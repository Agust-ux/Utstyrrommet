'use client';
import { useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function TiltedCard({
  imageSrc,
  infoText = 'Produkt',
  description = 'Kort produktbeskrivelse',
  broken = false,
  width = 300,
  height = 300,
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);

  const rotateX = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 });
  const scale = useSpring(1, { stiffness: 100, damping: 20 });

  const showPopup = hovered || pinned;

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * rotateAmplitude);
    rotateX.set(-((e.clientY - rect.top) / rect.height - 0.5) * rotateAmplitude);
  }

  function handleLeave() {
    if (!pinned) {
      setHovered(false);
      rotateX.set(0);
      rotateY.set(0);
      scale.set(1);
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => scale.set(scaleOnHover)}
      onMouseLeave={handleLeave}
      className="[perspective:800px]"
      style={{ width, height }}
    >
      <motion.div
        style={{ rotateX, rotateY, scale }}
        className="relative w-full h-full rounded-2xl shadow-xl [transform-style:preserve-3d]"
      >
        <img
          src={imageSrc}
          className="w-full h-full object-cover rounded-2xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => !pinned && setHovered(false)}
        />

        {/* Trigger + popup wrapper */}
        <div
          
        >
          {/* Produktnavn */}
          <div
            className="
              absolute bottom-4 left-4
              bg-gray-700 text-white text-sm
              px-3 py-1 rounded-lg cursor-pointer
              [transform:translateZ(30px)]
            "
          >
            {infoText}
          </div>

          {/* Popup */}
          {showPopup && (
            <div
              className="
                absolute bottom-16 left-4 w-64
                bg-white rounded-xl shadow-2xl
                p-4 space-y-3 text-sm
                [transform:translateZ(40px)]
              "
            >
              <p className="font-semibold">{infoText}</p>
              <p className="text-gray-600">{description}</p>

              {broken && (
                <p className="text-red-600 font-medium">
                  ⚠️ Produktet er ødelagt – kan lånes for reparasjon
                </p>
              )}

              <button
                onClick={() => setPinned((p) => !p)}
                className="w-full mt-2 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
              >
                {pinned ? 'Skjul info' : 'Lån / vis info'}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
