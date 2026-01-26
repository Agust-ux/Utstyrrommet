'use client';
import { useState, useRef, useEffect } from 'react';
import { User, ChevronDown } from 'lucide-react';

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Lukk meny ved klikk utenfor
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
      >
        <User size={36} />
        <span className="text-xl font-large">Account</span>
        <ChevronDown size={26} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border overflow-hidden">
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Profil
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Innstillinger
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            Logg ut
          </button>
        </div>
      )}
    </div>
  );
}
