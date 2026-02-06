import React from 'react';
import { BracketBreakdownProps } from './types';

export function BracketBreakdown({ inkomen, brackets }: BracketBreakdownProps) {
  const totalTax = brackets.reduce((sum, bracket) => sum + bracket.taxPaid, 0);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Schijf</th>
            <th className="px-4 py-2 text-right font-semibold text-gray-700">Tarief</th>
            <th className="px-4 py-2 text-right font-semibold text-gray-700">Inkomen in schijf</th>
            <th className="px-4 py-2 text-right font-semibold text-gray-700">Belasting</th>
          </tr>
        </thead>
        <tbody>
          {brackets.map((bracket, index) => {
            const isActive = bracket.amountInBracket > 0;
            const colors = ['bg-green-50', 'bg-orange-50', 'bg-red-50'];
            const textColors = ['text-green-700', 'text-orange-700', 'text-red-700'];

            return (
              <tr
                key={index}
                className={`border-b border-gray-100 ${isActive ? colors[index] : ''}`}
              >
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{bracket.name}</div>
                  <div className="text-xs text-gray-500">
                    {bracket.max === Infinity
                      ? `Boven €${bracket.min.toLocaleString()}`
                      : `€${bracket.min.toLocaleString()} - €${bracket.max.toLocaleString()}`}
                  </div>
                </td>
                <td className={`px-4 py-3 text-right font-bold ${isActive ? textColors[index] : 'text-gray-400'}`}>
                  {(bracket.rate * 100).toFixed(2)}%
                </td>
                <td className="px-4 py-3 text-right font-semibold text-gray-900">
                  {isActive ? `€${Math.round(bracket.amountInBracket).toLocaleString()}` : '-'}
                </td>
                <td className={`px-4 py-3 text-right font-bold ${isActive ? textColors[index] : 'text-gray-400'}`}>
                  {isActive ? `€${Math.round(bracket.taxPaid).toLocaleString()}` : '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="bg-gray-50 border-t-2 border-gray-300">
          <tr>
            <td colSpan={3} className="px-4 py-3 text-right font-bold text-gray-900">
              Totaal belasting Box 1:
            </td>
            <td className="px-4 py-3 text-right font-bold text-red-700 text-lg">
              €{Math.round(totalTax).toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Visual proportion bar */}
      <div className="p-4 bg-gray-50">
        <div className="text-xs font-medium text-gray-600 mb-2">Verdeling inkomen over schijven:</div>
        <div className="flex h-6 rounded-lg overflow-hidden">
          {brackets.map((bracket, index) => {
            const percentage = (bracket.amountInBracket / inkomen) * 100;
            const colors = ['bg-green-500', 'bg-orange-500', 'bg-red-500'];

            return percentage > 0 ? (
              <div
                key={index}
                className={`${colors[index]} flex items-center justify-center text-xs font-bold text-white`}
                style={{ width: `${percentage}%` }}
                title={`Schijf ${index + 1}: ${percentage.toFixed(1)}%`}
              >
                {percentage > 10 && `${percentage.toFixed(0)}%`}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
