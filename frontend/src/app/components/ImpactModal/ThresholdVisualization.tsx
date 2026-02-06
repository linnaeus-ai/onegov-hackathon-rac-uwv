import React from 'react';
import { motion } from 'motion/react';
import { ThresholdVisualizationProps } from './types';

export function ThresholdVisualization({
  userValue,
  thresholds,
  max,
  title,
  unit = '€'
}: ThresholdVisualizationProps) {
  // Calculate user position as percentage
  const userPosition = Math.min((userValue / max) * 100, 100);

  // Sort thresholds by value
  const sortedThresholds = [...thresholds].sort((a, b) => a.value - b.value);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h5 className="text-sm font-bold text-gray-900 mb-3">{title}</h5>

      {/* Threshold visualization bar */}
      <div className="relative h-12 bg-gradient-to-r from-green-100 via-orange-100 to-red-100 rounded-lg overflow-hidden">
        {/* Threshold markers */}
        {sortedThresholds.map((threshold, index) => {
          const position = (threshold.value / max) * 100;
          return (
            <div
              key={index}
              className="absolute top-0 bottom-0 w-0.5 bg-gray-400"
              style={{ left: `${position}%` }}
            >
              {/* Label */}
              <div className="absolute top-full mt-1 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                <div className="font-medium">{threshold.label}</div>
                <div className="text-gray-500">
                  {unit}{threshold.value.toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}

        {/* User position indicator */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="absolute top-0 bottom-0 w-1 bg-gray-900 shadow-lg"
          style={{ left: `${userPosition}%` }}
        >
          {/* Indicator arrow */}
          <div className="absolute bottom-full mb-1 transform -translate-x-1/2 left-1/2">
            <div className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
              Uw inkomen: {unit}{userValue.toLocaleString()}
            </div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 mx-auto"></div>
          </div>
        </motion.div>
      </div>

      {/* Spacing for labels */}
      <div className="h-12"></div>
    </div>
  );
}
