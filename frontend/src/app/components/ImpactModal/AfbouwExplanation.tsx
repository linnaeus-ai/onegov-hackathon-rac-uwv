import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { AfbouwExplanationProps } from './types';

export function AfbouwExplanation({
  name,
  maxAmount,
  actualAmount,
  threshold,
  userIncome,
  afbouwRate,
  type
}: AfbouwExplanationProps) {
  const isReduced = actualAmount < maxAmount;
  const reduction = maxAmount - actualAmount;
  const isAboveThreshold = userIncome > threshold;

  return (
    <div className={`rounded-lg border p-3 ${isReduced ? 'bg-orange-50 border-orange-200' : 'bg-green-50 border-green-200'}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg shrink-0 ${isReduced ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
          {isReduced ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
        </div>

        <div className="flex-1 min-w-0">
          <h5 className="font-bold text-sm text-gray-900 mb-1">{name}</h5>

          {/* Amount display */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-600">Maximum:</span>
            <span className="text-sm font-semibold text-gray-500">€{maxAmount.toLocaleString()}</span>
            {isReduced && (
              <>
                <span className="text-xs text-gray-400">→</span>
                <span className={`text-sm font-bold ${isReduced ? 'text-orange-700' : 'text-green-700'}`}>
                  €{Math.round(actualAmount).toLocaleString()}
                </span>
              </>
            )}
            {!isReduced && (
              <span className="text-xs text-green-700 font-medium ml-1">(volledig)</span>
            )}
          </div>

          {/* Explanation */}
          {isAboveThreshold && (
            <div className={`text-xs ${isReduced ? 'text-orange-800' : 'text-gray-700'} mb-2`}>
              {isReduced ? (
                <>
                  Uw inkomen (€{userIncome.toLocaleString()}) overschrijdt de afbouwgrens van €{threshold.toLocaleString()}.
                  {type === 'korting' ? ' De korting wordt daarom verminderd.' : ' De toeslag wordt daarom verminderd.'}
                </>
              ) : (
                <>
                  Uw inkomen (€{userIncome.toLocaleString()}) ligt boven de afbouwgrens, maar u ontvangt nog steeds het volledige bedrag.
                </>
              )}
            </div>
          )}

          {!isAboveThreshold && (
            <div className="text-xs text-green-800 mb-2">
              Uw inkomen (€{userIncome.toLocaleString()}) ligt onder de afbouwgrens van €{threshold.toLocaleString()}.
              U ontvangt daarom het volledige {type === 'korting' ? 'kortingsbedrag' : 'toeslagbedrag'}.
            </div>
          )}

          {/* Formula if reduced */}
          {isReduced && (
            <div className="bg-white/70 rounded px-2 py-1 font-mono text-xs text-gray-700">
              €{maxAmount.toLocaleString()} - (€{userIncome.toLocaleString()} - €{threshold.toLocaleString()}) × {(afbouwRate * 100).toFixed(2)}%
              = €{Math.round(actualAmount).toLocaleString()}
            </div>
          )}

          {/* Reduction amount */}
          {isReduced && reduction > 0 && (
            <div className="mt-2 text-xs font-bold text-red-600">
              Verlies: €{Math.round(reduction).toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
