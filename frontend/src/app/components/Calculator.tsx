import React from 'react';
import { Info, Calculator as CalcIcon, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CalculatorProps {
  lumpsum: number;
  setLumpsum: (val: number) => void;
  years: number;
  setYears: (val: number) => void;
  onCalculateBest: () => void;
  isCalculatingOptimal?: boolean;
  currentAge?: number;
}

export function Calculator({ lumpsum, setLumpsum, years, setYears, onCalculateBest, isCalculatingOptimal, currentAge = 67 }: CalculatorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
          <CalcIcon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Bedragen aanpassen</h2>
      </div>

      <div className="space-y-8">
        {/* Bedrag ineens Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              Bedrag ineens
              <Info className="w-4 h-4 text-gray-400 cursor-help" />
            </label>
            <span className="text-lg font-bold text-blue-600">{lumpsum}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={lumpsum}
            onChange={(e) => setLumpsum(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0% (Geen opname)</span>
            <span>10% (Maximum)</span>
          </div>
        </div>

        {/* Years Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              Verwachte levensduur
              <Info className="w-4 h-4 text-gray-400 cursor-help" />
            </label>
            <span className="text-lg font-bold text-blue-600">{currentAge + years} jaar</span>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{currentAge + 5} jaar</span>
            <span>{currentAge + 40} jaar</span>
          </div>
          <p className="text-xs text-gray-400">
            Nog {years} jaar na uw huidige leeftijd ({currentAge})
          </p>
        </div>

        <motion.button
          whileHover={{ scale: isCalculatingOptimal ? 1 : 1.01 }}
          whileTap={{ scale: isCalculatingOptimal ? 1 : 0.98 }}
          onClick={onCalculateBest}
          disabled={isCalculatingOptimal}
          className={`w-full py-4 ${isCalculatingOptimal ? 'bg-orange-400' : 'bg-orange-500 hover:bg-orange-600'} text-white font-bold rounded-xl shadow-lg shadow-orange-200 transition-all flex items-center justify-center gap-2`}
        >
          {isCalculatingOptimal ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Berekenen...
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Bereken de beste keuze
            </>
          )}
        </motion.button>

        <p className="text-xs text-gray-400 text-center">
          Let op: Dit is een indicatieve berekening. Er kunnen geen rechten aan worden ontleend.
        </p>
      </div>
    </div>
  );
}
