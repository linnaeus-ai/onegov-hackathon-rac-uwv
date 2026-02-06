import React from 'react';
import { TrendingDown, ReceiptText, ChevronRight, ArrowRight, Gift } from 'lucide-react';
import { motion } from 'motion/react';

interface ImpactCardProps {
  type: 'income' | 'tax' | 'benefits';
  title: string;
  description: string;
  value: string;
  trend: string;
  onClick: () => void;
}

export function ImpactCard({ type, title, description, value, trend, onClick }: ImpactCardProps) {
  const isIncome = type === 'income';
  const isBenefits = type === 'benefits';
  const isNeutral = trend === 'Neutraal';

  const getIcon = () => {
    if (isIncome) return <TrendingDown className="w-6 h-6" />;
    if (isBenefits) return <Gift className="w-6 h-6" />;
    return <ReceiptText className="w-6 h-6" />;
  };

  // Uniform blue icon background for all cards
  const getColorClasses = () => {
    if (isNeutral) return 'bg-gray-100 text-gray-500';
    return 'bg-blue-50 text-blue-600';
  };

  // Red for negative impact values, gray for neutral
  const getValueColor = () => {
    if (isNeutral) return 'text-gray-500';
    return 'text-red-600';
  };

  // Consistent trend indicator
  const getTrendColor = () => {
    if (isNeutral) return 'text-gray-400';
    return 'text-red-500';
  };

  return (
    <motion.button
      whileHover={{ y: -4, shadow: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
      onClick={onClick}
      className="w-full text-left bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all flex flex-col justify-between group h-full"
    >
      <div>
        <div className={`p-3 rounded-xl w-fit mb-4 ${getColorClasses()}`}>
          {getIcon()}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-6">{description}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase block mb-1">Impact</span>
            <span className={`text-2xl font-bold ${getValueColor()}`}>{value}</span>
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColor()}`}>
            {trend}
            {!isNeutral && <ArrowRight className="w-4 h-4" />}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
          Bekijk details
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.button>
  );
}
