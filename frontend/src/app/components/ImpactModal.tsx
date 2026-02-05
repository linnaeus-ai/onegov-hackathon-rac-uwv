import React from 'react';
import { X, Info, AlertTriangle, TrendingDown, ReceiptText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'income' | 'tax' | null;
  data: any;
}

export function ImpactModal({ isOpen, onClose, type, data }: ImpactModalProps) {
  if (!isOpen || !type) return null;

  const isIncome = type === 'income';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
        >
          {/* Header */}
          <div className={`p-6 flex items-center justify-between border-b ${isIncome ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${isIncome ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {isIncome ? <TrendingDown className="w-6 h-6" /> : <ReceiptText className="w-6 h-6" />}
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                {isIncome ? 'Hoe beïnvloedt dit uw inkomen?' : 'Hoe beïnvloedt dit uw belasting?'}
              </h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Context */}
            <p className="text-gray-600 leading-relaxed">
              {isIncome 
                ? `Door een bedrag ineens van €${data.lumpsumAmount.toLocaleString()} op te nemen, wordt uw maandelijkse pensioenuitkering lager voor de rest van uw pensioen. In dit scenario daalt uw bruto maandinkomen van €${data.baseMonthly.toLocaleString()} naar €${data.newMonthly.toLocaleString()}.`
                : `Het opnemen van een lumpsum wordt in het jaar van opname belast als inkomen uit werk en woning (Box 1). Hierdoor kunt u in een hoger belastingtarief terechtkomen.`}
            </p>

            {/* Chart Area */}
            <div className="h-64 w-full bg-gray-50 rounded-xl p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="waarde" radius={[4, 4, 0, 0]} barSize={60}>
                    {data.chartData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={index === 1 ? (isIncome ? '#ef4444' : '#ef4444') : '#3b82f6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Logic Explanation */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-bold text-blue-900 text-sm">Uitleg van de berekening</h4>
                  <p className="text-sm text-blue-800/80 leading-snug">
                    {isIncome 
                      ? "De factor voor de verlaging is gebaseerd op uw huidige leeftijd en de verwachte looptijd. Een opname van 10% leidt meestal tot een levenslange verlaging van ongeveer 10% van uw aanvullend pensioen."
                      : "We rekenen met de tarieven van 2026. Een deel van de uitbetaling valt waarschijnlijk in de tweede schijf (49,5%), terwijl uw normale inkomen in de eerste schijf (37,07%) valt."}
                  </p>
                </div>
              </div>
            </div>

            {/* Warning if tax is high */}
            {!isIncome && data.taxImpact > 5000 && (
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-orange-900 text-sm">Hoge belastingdruk</p>
                  <p className="text-sm text-orange-800/80 leading-snug">
                    Let op: De extra belasting is aanzienlijk. U houdt netto minder over dan u wellicht verwacht.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-50 border-t flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Sluiten
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
