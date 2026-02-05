import React from 'react';
import { Landmark, User, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#007bc7] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white p-1 rounded-sm">
            <Landmark className="text-[#007bc7] w-8 h-8" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-xl tracking-tight">UWV</span>
            <span className="text-xs opacity-90 uppercase">Mijn Pensioenoverzicht</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">J. de Vries</span>
          </button>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
