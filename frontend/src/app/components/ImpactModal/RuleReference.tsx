import React, { useState } from 'react';
import { ChevronDown, BookOpen, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RuleReferenceProps {
  ruleName: string;
  ruleText: string;
  ruleNumber?: string;
  explanation?: string;
}

export function RuleReference({ ruleName, ruleText, ruleNumber, explanation }: RuleReferenceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-3 border-t border-gray-200 pt-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors w-full"
      >
        <BookOpen className="w-4 h-4 text-orange-600" />
        <span className="font-medium">Regelspraak regel: {ruleName}</span>
        {ruleNumber && (
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
            {ruleNumber}
          </span>
        )}
        <ChevronDown
          className={`w-4 h-4 ml-auto transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-start gap-2 mb-2">
                <FileText className="w-4 h-4 text-orange-700 mt-0.5 shrink-0" />
                <div className="flex-1">
                  <h6 className="text-xs font-bold text-orange-900 mb-1">Officiële regel uit regels.rs</h6>
                  <div className="text-xs text-orange-800 leading-relaxed whitespace-pre-line font-mono bg-white/50 rounded p-2 border border-orange-200">
                    {ruleText}
                  </div>
                </div>
              </div>

              {explanation && (
                <div className="mt-3 pt-3 border-t border-orange-200">
                  <p className="text-xs text-orange-900">
                    <strong>Betekenis:</strong> {explanation}
                  </p>
                </div>
              )}

              <div className="mt-3 text-xs text-orange-700 italic">
                Deze regel komt rechtstreeks uit het Regelspraak regelbestand en is de basis voor deze berekening.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
