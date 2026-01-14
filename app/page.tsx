"use client";
import Box from './components/box';
import TiltedCard from './components/TiltedCard';
/* import express, { Request, Response } from 'express';
import cors from 'cors';

// --- TypeScript-type for utstyr ---
type Utstyr = {
  id: number;
  type: string;
  kvalitet: string;
  antall: number;
  plassering: string;
  tillegsutstyr: string;
};

// --- Opprett Express app ---
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// --- Dummy data ---
let utstyr: Utstyr[] = [
  {
    id: 1,
    type: "L380",
    kvalitet: "fungerer ikke",
    antall: 6,
    plassering: "IM-labben",
    tillegsutstyr: "pclader"
  },
  {
    id: 2,
    type: "L380",
    kvalitet: "fungerer ikke",
    antall: 6,
    plassering: "IM-labben",
    tillegsutstyr: "pclader"
  }
];

// --- GET /utstyr ---
app.get('/utstyr', (req: Request, res: Response) => {
  res.json(utstyr);
});

// --- POST /utstyr ---
app.post('/utstyr', (req: Request, res: Response) => {
  const nyttUtstyr: Partial<Utstyr> = req.body; // Partial fordi id kommer senere

  if (!nyttUtstyr.type) {
    return res.status(400).json({ error: "Mangler type" });
  } 
  if (!nyttUtstyr.kvalitet) {
    return res.status(400).json({ error: "Mangler kvalitet" });
  }

  const nyId = utstyr.length > 0 ? utstyr[utstyr.length - 1].id + 1 : 1;

  const komplettUtstyr: Utstyr = {
    id: nyId,
    type: nyttUtstyr.type!,
    kvalitet: nyttUtstyr.kvalitet!,
    antall: nyttUtstyr.antall ?? 0,
    plassering: nyttUtstyr.plassering ?? "",
    tillegsutstyr: nyttUtstyr.tillegsutstyr ?? ""
  };

  utstyr.push(komplettUtstyr);
  res.status(201).json(komplettUtstyr);
});

// --- DELETE /utstyr/:id ---
app.delete('/utstyr/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = utstyr.findIndex(u => u.id === id);

  if (index === -1) return res.status(404).json({ error: "Ikke funnet" });

  const slettetUtstyr = utstyr.splice(index, 1);
  res.json(slettetUtstyr[0]);
});

// --- PUT /utstyr/:id ---
app.put('/utstyr/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = utstyr.findIndex(u => u.id === id);

  if (index === -1) return res.status(404).json({ error: "Ikke funnet" });

  const oppdatertUtstyr: Partial<Utstyr> = req.body;
  utstyr[index] = { ...utstyr[index], ...oppdatertUtstyr };

  res.json(utstyr[index]);
});

// --- Start server ---
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
}); */

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <Box />
      <TiltedCard
        imageSrc="last ned.jpeg"
        altText="Mr Bean"
        infoText="Mr Bean"
        width={300}
        height={300}
        rotateAmplitude={12}
        scaleOnHover={1.05}
      />
    </div>
  );
}
