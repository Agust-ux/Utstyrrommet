'use client';
import { useRef } from 'react';
import { motion, useSpring } from 'motion/react';

export default function ProductSection() {
  return (
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
      {/* Bilde */}
      <img
        src="/last ned.jpeg"
        alt="Gaming mus"
        className="rounded-2xl shadow-lg"
      />

      {/* Tekst */}
      <div className="space-y-6">
        <h3 className="text-4xl font-bold">
          Gaming-mus Pro X
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Gaming-mus Pro X er designet for presisjon, komfort og ytelse.
          Med justerbar DPI, ergonomisk form og ultralav responstid
          passer den perfekt for både casual og konkurransespillere.
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Justerbar DPI opptil 16 000</li>
          <li>RGB-belysning</li>
          <li>Ultralett design</li>
          <li>USB-C tilkobling</li>
        </ul>

        <button
          className="
            mt-4
            inline-block
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-gray-800
            transition
          "
        >
          Kjøp nå
        </button>
      </div>
    </section>
  );
}
