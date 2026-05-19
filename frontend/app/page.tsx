"use client";
import TiltedCard from './components/TiltedCard';
import ProductSection from './components/ProductSection';
import SpotlightCard from './components/SpotlightCard';

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 space-y-24">

      {/* PRODUKT GRID */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Våre produkter
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            place-items-center
          "
        >



          <TiltedCard
            imageSrc="/mus.jpeg"
            type="Mus"
            kvalitet="fungerer ikke"
            antall={6}
            plassering="IM-laben"
            tillegsutstyr="pclader"
          />

          <TiltedCard
            imageSrc="/mus.jpeg"
            type="Mus"
            kvalitet="fungerer ikke"
            antall={6}
            plassering="IM-laben"
            tillegsutstyr="pclader"
          />

          <TiltedCard
            imageSrc="/mus.jpeg"
            type="Mus"
            kvalitet="fungerer ikke"
            antall={6}
            plassering="IM-laben"
            tillegsutstyr="pclader"
          />
        </div>
      </section>

      {/* PRODUKT DETALJER */}
      <ProductSection />

    </main>
  );
}
