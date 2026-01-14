'use client';
import { useRef } from 'react';
import { motion, useSpring } from 'motion/react';

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card',
  infoText = 'Mus',
  width = 300,
  height = 300,
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
}: {
  imageSrc: string;
  altText?: string;
  infoText?: string;
  width?: number;
  height?: number;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 });
  const scale = useSpring(1, { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x / rect.width) - 0.5) * rotateAmplitude;
    const rotateXValue = -((y / rect.height) - 0.5) * rotateAmplitude;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="[perspective:800px]"
      style={{ width, height }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          width: '100%',
          height: '100%',
        }}
        className="
          relative
          rounded-2xl
          shadow-xl
          [transform-style:preserve-3d]
        "
      >
        {/* Bildet */}
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* 3D infotekst */}
        <div
          className="
            absolute bottom-4 left-4
            text-white text-sm font-semibold
            bg-black/50 backdrop-blur-sm
            px-3 py-1 rounded-lg
            [transform:translateZ(30px)]
            pointer-events-none
          "
        >
          {infoText}
        </div>
      </motion.div>
    </div>
  );
}
