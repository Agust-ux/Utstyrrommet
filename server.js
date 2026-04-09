//DETTE ER API-EN SOM SKAL VÆRE PÅ VM-EN
// REST API for utstyrssystem koblet til MySQL
// Denne filen lager en backend-server som lar deg hente, legge til,
// oppdatere og slette utstyr, brukere og utlån.

// Importerer Express-rammeverket (brukes til å lage API/server)
const express = require("express");

// Importerer MySQL bibliotek for å koble til databasen
const mysql = require("mysql2");

// Oppretter Express-applikasjonen (serveren)
const app = express();

// Gjør at serveren kan lese JSON data fra requests
app.use(express.json());

/* --------------------------------------------------
   DATABASE CONNECTION (MySQL)
-------------------------------------------------- */

// Oppretter en tilkoblingspool til databasen
// Pool betyr at flere connections kan brukes samtidig
const db = mysql.createPool({
  host: "localhost", // hvor databasen kjører
  user: "root", // database brukernavn
  password: "password", // database passord (må endres)
  database: "utstyr_db", // databasenavn
});

// Tester at databasen faktisk fungerer
// getConnection prøver å koble til databasen

db.getConnection((err, connection) => {
  if (err) {
    // Hvis feil → skriv feilmelding
    console.error("Database tilkobling feilet:", err);
  } else {
    // Hvis suksess → skriv melding
    console.log("Koblet til MySQL database.");

    // Frigjør connection tilbake til poolen
    connection.release();
  }
});

/* --------------------------------------------------
   UTSTYR ENDPOINTS
-------------------------------------------------- */

// GET /utstyr
// Henter ALT utstyr fra databasen
app.get("/utstyr", (req, res) => {
  const sql = "SELECT * FROM utstyr"; // SQL query

  // Kjører query mot databasen
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err); // feil

    // Returnerer resultat som JSON
    res.json(results);
  });
});

// GET /utstyr/:id
// Henter ett spesifikt utstyr basert på ID
app.get("/utstyr/:id", (req, res) => {
  const sql = "SELECT * FROM utstyr WHERE utstyr_id = ?";

  // req.params.id kommer fra URL
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);

    // Hvis ingen funnet
    if (results.length === 0)
      return res.status(404).json({ message: "Ikke funnet" });

    // Returner første resultat
    res.json(results[0]);
  });
});

// POST /utstyr
// Legger til nytt utstyr
app.post("/utstyr", (req, res) => {
  // Henter data fra request body
  const {
    antall,
    serienummer,
    kvalitet,
    kvalitet_description,
    utstyr_modell,
    kategori,
    plassering,
    lan_status,
  } = req.body;

  // SQL INSERT
  const sql = `
    INSERT INTO utstyr (
      antall,
      serienummer,
      kvalitet,
      kvalitet_description,
      utstyr_modell,
      kategori,
      plassering,
      lan_status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Kjører query med verdier
  db.query(
    sql,
    [
      antall,
      serienummer,
      kvalitet,
      kvalitet_description,
      utstyr_modell,
      kategori,
      plassering,
      lan_status,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);

      // Returnerer ID til ny rad
      res.json({ utstyr_id: result.insertId });
    }
  );
});

// PUT /utstyr/:id
// Oppdaterer eksisterende utstyr
app.put("/utstyr/:id", (req, res) => {
  const sql = `
    UPDATE utstyr
    SET antall = ?,
        kvalitet = ?,
        kvalitet_description = ?,
        plassering = ?,
        lan_status = ?
    WHERE utstyr_id = ?
  `;

  db.query(
    sql,
    [
      req.body.antall,
      req.body.kvalitet,
      req.body.kvalitet_description,
      req.body.plassering,
      req.body.lan_status,
      req.params.id,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);

      // Hvor mange rader ble oppdatert
      res.json({ updated: result.affectedRows });
    }
  );
});

// DELETE /utstyr/:id
// Sletter utstyr
app.delete("/utstyr/:id", (req, res) => {
  const sql = "DELETE FROM utstyr WHERE utstyr_id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);

    // Hvor mange rader ble slettet
    res.json({ deleted: result.affectedRows });
  });
});

/* --------------------------------------------------
   USERS ENDPOINTS
-------------------------------------------------- */

// GET /users
// Henter alle brukere
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
});

// POST /users
// Lager ny bruker
app.post("/users", (req, res) => {
  const { navn, epost, rolle } = req.body;

  const sql = `
    INSERT INTO users (navn, epost, rolle)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [navn, epost, rolle], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ users_id: result.insertId });
  });
});

/* --------------------------------------------------
   UTLÅN ENDPOINTS
-------------------------------------------------- */

// POST /utlan
// Registrerer at noen låner utstyr
app.post("/utlan", (req, res) => {
  const { utstyr_id, user_id, dato_utlan } = req.body;

  const sql = `
    INSERT INTO utlan (
      utstyr_id,
      user_id,
      dato_utlan
    ) VALUES (?, ?, ?)
  `;

  db.query(sql, [utstyr_id, user_id, dato_utlan], (err, result) => {
    if (err) return res.status(500).json(err);

    // Oppdaterer status til 'lånt'
    db.query(
      "UPDATE utstyr SET lan_status = 'lånt' WHERE utstyr_id = ?",
      [utstyr_id]
    );

    res.json({ utlan_id: result.insertId });
  });
});

// PUT /utlan/:id/lever
// Registrerer at utstyr er levert tilbake
app.put("/utlan/:id/lever", (req, res) => {
  const dato_levert = req.body.dato_levert;

  const sql = `
    UPDATE utlan
    SET dato_levert = ?
    WHERE utlan_id = ?
  `;

  db.query(sql, [dato_levert, req.params.id], (err) => {
    if (err) return res.status(500).json(err);

    // Finn hvilket utstyr som ble levert
    db.query(
      "SELECT utstyr_id FROM utlan WHERE utlan_id = ?",
      [req.params.id],
      (err, results) => {
        if (results.length > 0) {
          const utstyr_id = results[0].utstyr_id;

          // Sett status tilbake til tilgjengelig
          db.query(
            "UPDATE utstyr SET lan_status = 'tilgjenglig' WHERE utstyr_id = ?",
            [utstyr_id]
          );
        }
      }
    );

    res.json({ levert: true });
  });
});

// GET /utlan
// Henter alle utlån med JOIN
app.get("/utlan", (req, res) => {
  const sql = `
    SELECT u.utlan_id,
           us.navn,
           ut.utstyr_modell,
           u.dato_utlan,
           u.dato_levert
    FROM utlan u
    JOIN users us ON u.user_id = us.users_id
    JOIN utstyr ut ON u.utstyr_id = ut.utstyr_id
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
});

/* --------------------------------------------------
   START SERVER
-------------------------------------------------- */

// Setter portnummer
const PORT = 3000;

// Starter serveren
app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});
