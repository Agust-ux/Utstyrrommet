'use client';
import { useRef, useState } from 'react';

interface TiltedCardProps {
  imageSrc: string;
  type: string;
  kvalitet: string;
  antall: number;
  plassering: string;
  tillegsutstyr?: string;
  width?: number;
  height?: number;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

export default function TiltedCard({
  imageSrc,
  type,
  kvalitet,
  antall,
  plassering,
  tillegsutstyr,
  width = 300,
  height = 300,
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const showPopup = hovered || pinned;
  const broken = kvalitet?.toLowerCase().includes('fungerer ikke') || kvalitet?.toLowerCase().includes('ødelagt');

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * rotateAmplitude;
    const rotateX = -((e.clientY - rect.top) / rect.height - 0.5) * rotateAmplitude;
    setRotation({ x: rotateX, y: rotateY });
  }

  function handleLeave() {
    if (!pinned) {
      setHovered(false);
      setRotation({ x: 0, y: 0 });
      setScale(1);
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setScale(scaleOnHover)}
      onMouseLeave={handleLeave}
      className="[perspective:800px]"
      style={{ width, height }}
    >
      <div
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
          transition: 'transform 0.1s ease-out'
        }}
        className="relative w-full h-full rounded-2xl shadow-xl [transform-style:preserve-3d]"
      >
        <img
          src={imageSrc}
          className="w-full h-full object-cover rounded-2xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => !pinned && setHovered(false)}
          alt={type}
        />

        {/* Trigger + popup wrapper */}
        <div>
          {/* Produktnavn */}
          <div
            className="
              absolute bottom-4 left-4
              bg-gray-700 text-white text-sm
              px-3 py-1 rounded-lg cursor-pointer
              [transform:translateZ(30px)]
            "
          >
            {type}
          </div>

          {/* Popup */}
          {showPopup && (
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => !pinned && setHovered(false)}
              className="
                absolute bottom-16 left-4 w-64
                bg-white rounded-xl shadow-2xl
                p-4 space-y-3 text-sm
                [transform:translateZ(40px)]
              "
            >
              <p className="font-semibold text-gray-900 text-lg">{type}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Kvalitet:</span>
                  <span className={`font-medium ${broken ? 'text-red-600' : 'text-green-600'}`}>
                    {kvalitet}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Antall:</span>
                  <span className="font-medium text-gray-900">{antall}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Plassering:</span>
                  <span className="font-medium text-gray-900">{plassering}</span>
                </div>
                
                {tillegsutstyr && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tilleggsutstyr:</span>
                    <span className="font-medium text-gray-900">{tillegsutstyr}</span>
                  </div>
                )}
              </div>

              {broken && (
                <p className="text-red-600 font-medium pt-2 border-t border-gray-200">
                  ⚠️ Produktet er ødelagt – kan lånes for reparasjon
                </p>
              )}

              <button
                onClick={() => setPinned((p) => !p)}
                className="w-full mt-2 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
              >
                {pinned ? 'Skjul info' : 'Lån / vis info'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}