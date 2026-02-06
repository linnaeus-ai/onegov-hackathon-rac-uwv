import React, { useState, useEffect, useRef } from 'react';
import { Landmark, User, Menu, ChevronDown, Check } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  description: string;
}

interface HeaderProps {
  profiles?: Profile[];
  selectedProfileId?: string;
  onSelectProfile?: (id: string) => void;
  isLoading?: boolean;
}

export function Header({ profiles = [], selectedProfileId, onSelectProfile, isLoading }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedProfile = profiles.find(p => p.id === selectedProfileId);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          {/* Profile Selector */}
          {profiles.length > 0 && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isLoading}
                className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors border border-white/20"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline text-sm max-w-[150px] truncate">
                  {isLoading ? 'Laden...' : (selectedProfile?.name || 'Selecteer profiel')}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Selecteer een profiel
                    </p>
                  </div>
                  {profiles.map((profile) => (
                    <button
                      key={profile.id}
                      onClick={() => {
                        onSelectProfile?.(profile.id);
                        setIsOpen(false);
                      }}
                      className="w-full px-3 py-3 text-left hover:bg-blue-50 transition-colors flex items-start gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {profile.name}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {profile.description}
                        </p>
                      </div>
                      {profile.id === selectedProfileId && (
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
