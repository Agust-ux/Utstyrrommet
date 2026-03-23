CREATE TABLE utstyr {
    utstyr_id INTEGER PRIMARY KEY, 
    antall INTEGER NOT NULL,
    serienummer VARCHAR(100) UNIQUE,
    kvalitet BOOLEAN DEFAULT TRUE NOT NULL,
    kvalitet_description  VARCHAR(150), --description på hva er feil med utstyret
    utstyr_modell VARCHAR(100) NOT NULL,
    kategori VARCHAR(100)
    plassering VARCHAR(200) NOT NULL,
    lan_status VARCHAR(15) DEFAULT 'tilgjenglig' CHECK (lan_status IN ('tilgjenglig','lånt'))
    }

    INSERT INTO Utstyr_oversikt VALUES {
        1,
        LENOVO,
        3,
        Fungerende,
        Tastatur
    }

CREATE TABLE users{
    users_id INTEGER PRIMARY KEY,
    navn VARCHAR(100) NOT NULL,
    epost VARCHAR(255) NOT NULL UNIQUE,
    rolle VARCHAR(20) NOT NULL CHECK (rolle IN ('elev','admin'))
}

--Hentet fra ChatGPT
CREATE TABLE utlan (
    utlan_id INTEGER PRIMARY KEY,

    utstyr_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    dato_utlan DATE NOT NULL,
    dato_levert DATE,

    FOREIGN KEY (utstyr_id)
        REFERENCES utstyr(utstyr_id),

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);