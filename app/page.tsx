"use client";
import Box from './components/box';
/* import TiltedCard from './components/TiltedCard'; */




const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');


app.use(express.json());
app.use(cors())

let utstyr = [
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

app.get('/utstyr', (req, res) => {
    res.json(utstyr)
});


app.post('/utstyr', (req, res) => {
    const nyttUtstyr = req.body;

    if(!nyttUtstyr.type) {
        return res.status(400).json({error: "Mangler type"});
    } else if(!nyttUtstyr.kvalitet) {
        return res.status(400).json({error: "Mangler kvalitet"})
    }
    
    const nyId = utstyr.length > 0 ? utstyr[utstyr.length - 1].id + 1 : 1;
    nyttUtstyr.id = nyId;


    utstyr.push(nyttUtstyr);
    res.status(201).json(nyttUtstyr);

});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
});


app.delete('/utstyr/:id',(req, res) => {
    const id = parseInt(req.params.id);
    const index = utstyr.findIndex(u => u.id === id);

    if (index === -1) return res.status(404).json({ error: "Ikke funnet"});

    const slettetUtstyr = utstyr.splice(index, 1);

    res.json(slettetUtstyr[0])
});


app.put('/utstyr/:id', (res,req) => {
    const id = parseInt(req.params.id);
    const index = utstyr.findIndex(u => u.id === id);

    if (index === -1) return res.status(404).json({ error: "Ikke funnet" });

    utstyr[index] = { ...utstyr[index], ...req.body };
})

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <Box />

    <TiltedCard
      imageSrc="mrbean.avif"
      altText="mrbean"
      captionText="Kendrick Lamar - GNX"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.0067}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text">
          Mr Bean
        </p>
      }
    />
  
    </div>
  );
}
