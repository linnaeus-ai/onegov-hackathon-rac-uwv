import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { ConditionalLogicBoxProps } from './types';

export function ConditionalLogicBox({
  condition,
  result,
  isMet,
  icon: Icon
}: ConditionalLogicBoxProps) {
  // Determine if condition being met is good or bad based on result text
  const isBeneficial = result.toLowerCase().includes('recht') || result.toLowerCase().includes('ontvangt');
  const isDetrimental = result.toLowerCase().includes('vervalt') || result.toLowerCase().includes('geen recht');

  // Choose color scheme: green=good, red=bad, orange=neutral
  let colorScheme = {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-900',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  };

  if (isMet && isDetrimental) {
    colorScheme = {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-900',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-700'
    };
  } else if (isMet && isBeneficial) {
    colorScheme = {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-900',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-700'
    };
  } else if (!isMet && isBeneficial) {
    colorScheme = {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-900',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    };
  }

  const StatusIcon = Icon || (isMet ? (isDetrimental ? XCircle : CheckCircle) : AlertCircle);

  return (
    <div className={`rounded-lg border p-3 ${colorScheme.bg} ${colorScheme.border}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg shrink-0 ${colorScheme.iconBg}`}>
          <StatusIcon className={`w-5 h-5 ${colorScheme.iconColor}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-sm">
            <span className="font-medium text-gray-700">Als: </span>
            <span className={colorScheme.text}>{condition}</span>
          </div>

          <div className="text-sm mt-1">
            <span className="font-medium text-gray-700">Dan: </span>
            <span className={`font-bold ${colorScheme.text}`}>{result}</span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            {isMet ? (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colorScheme.iconBg} ${colorScheme.iconColor}`}>
                ✓ Voorwaarde van toepassing
              </span>
            ) : (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                ✗ Voorwaarde niet van toepassing
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
