import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { ImpactCard } from './components/ImpactCard';
import { ImpactModal } from './components/ImpactModal';
import { TrendingUp, Wallet, ShieldCheck, ArrowRightLeft, Info, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

// Simplified Tax Logic for 2026 (Mock)
// Schijf 1: 37.07% (up to 75k)
// Schijf 2: 49.50% (above 75k)
const calculateTax = (income: number) => {
  const bracketLimit = 75000;
  if (income <= bracketLimit) return income * 0.3707;
  return (bracketLimit * 0.3707) + ((income - bracketLimit) * 0.495);
};

export default function App() {
  const [lumpsum, setLumpsum] = useState(5);
  const [years, setYears] = useState(25);
  const [activeModal, setActiveModal] = useState<'income' | 'tax' | null>(null);

  const baseAnnualIncome = 35000;
  const pensionPot = 280000;

  const results = useMemo(() => {
    const lumpsumAmount = pensionPot * (lumpsum / 100);
    const reductionFactor = lumpsum / 100;
    const baseMonthly = Math.round(baseAnnualIncome / 12);
    const newMonthly = Math.round(baseMonthly * (1 - reductionFactor));
    
    // Tax Calculation
    const taxNormal = calculateTax(baseAnnualIncome);
    const taxWithLumpsum = calculateTax(baseAnnualIncome + lumpsumAmount);
    const taxImpact = Math.max(0, taxWithLumpsum - taxNormal);
    const netLumpsum = lumpsumAmount - taxImpact;

    return {
      lumpsumAmount,
      baseMonthly,
      newMonthly,
      taxImpact,
      netLumpsum,
      reductionMonthly: baseMonthly - newMonthly,
      incomeChartData: [
        { name: 'Huidig', waarde: baseMonthly },
        { name: 'Na Opname', waarde: newMonthly },
      ],
      taxChartData: [
        { name: 'Normaal', waarde: taxNormal },
        { name: 'Met Lumpsum', waarde: taxWithLumpsum },
      ]
    };
  }, [lumpsum, years]);

  const handleCalculateBest = () => {
    const maxForBracket1 = 75000 - baseAnnualIncome;
    const bestPercent = Math.min(10, Math.floor((maxForBracket1 / pensionPot) * 100 * 2) / 2);
    setLumpsum(Math.max(0, bestPercent));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        {/* Intro Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                Bedrag ineens berekenen
              </h1>
              <p className="text-gray-500 max-w-2xl">
                Ontdek wat de gevolgen zijn als u een deel van uw pensioen in één keer laat uitbetalen. 
                U kunt maximaal 10% van uw opgebouwde ouderdomspensioen opnemen.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 text-blue-700 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Beveiligde omgeving
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-4 space-y-6">
            <Calculator 
              lumpsum={lumpsum} 
              setLumpsum={setLumpsum} 
              years={years} 
              setYears={setYears} 
              onCalculateBest={handleCalculateBest}
            />
          </div>

          {/* Right: Impact Analysis */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-blue-100 text-sm font-medium mb-1">Geschatte eenmalige bruto opname</p>
                <h3 className="text-3xl font-bold mb-4">€{results.lumpsumAmount.toLocaleString()}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm py-2 border-t border-white/10">
                    <span className="opacity-80">Netto bedrag</span>
                    <span className="font-bold">€{results.netLumpsum.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Wallet className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5 text-blue-600" />
                  Impact Analyse
                </h2>
                <div className="text-xs text-gray-500 italic flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Klik op een blok voor details
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ImpactCard
                  type="income"
                  title="Levenslang Inkomen"
                  description="Effect op uw maandelijkse pensioenuitkering vanaf uw pensioendatum."
                  value={`- €${results.reductionMonthly} /mnd`}
                  trend="Daling"
                  onClick={() => setActiveModal('income')}
                />
                <ImpactCard
                  type="tax"
                  title="Belastingdruk"
                  description="Extra belasting die u betaalt in het jaar van de eenmalige opname."
                  value={`€${results.taxImpact.toLocaleString()}`}
                  trend="Toename"
                  onClick={() => setActiveModal('tax')}
                />
              </div>

              {/* Quick Summary Table */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 overflow-hidden">
                <h3 className="font-bold text-gray-900 mb-4">Overzicht scenario</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-50">
                        <th className="pb-3">Onderdeel</th>
                        <th className="pb-3">Huidige situatie</th>
                        <th className="pb-3">Nieuwe situatie</th>
                        <th className="pb-3 text-right">Verschil</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="py-4 text-sm font-medium">Maandinkomen (Bruto)</td>
                        <td className="py-4 text-sm">€{results.baseMonthly.toLocaleString()}</td>
                        <td className="py-4 text-sm font-bold">€{results.newMonthly.toLocaleString()}</td>
                        <td className="py-4 text-sm text-red-500 font-bold text-right">- €{results.reductionMonthly}</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-sm font-medium">Jaarlijkse belasting</td>
                        <td className="py-4 text-sm">€{(calculateTax(baseAnnualIncome) / 12).toFixed(0)}</td>
                        <td className="py-4 text-sm">€{((calculateTax(baseAnnualIncome + results.lumpsumAmount) - results.taxImpact) / 12).toFixed(0)}*</td>
                        <td className="py-4 text-sm text-gray-400 text-right">Variable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-[10px] text-gray-400">
                  * Exclusief de eenmalige belastingpiek op de lumpsum zelf. De maandelijkse belasting verandert door aanpassing van heffingskortingen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Warning Banner */}
        <div className="sticky bottom-6 mt-12 z-40">
          <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-start gap-3 text-orange-800 text-sm backdrop-blur-sm bg-orange-50/95">
            <AlertTriangle className="w-5 h-5 shrink-0 text-orange-600 mt-0.5" />
            <p>
              <strong>Belangrijke waarschuwing:</strong> De getoonde berekeningen zijn indicatief en gebaseerd op algemene aannames. 
              De werkelijke bedragen kunnen afwijken door persoonlijke omstandigheden of toekomstige wijzigingen in wet- en regelgeving. 
              Aan deze berekening kunnen geen rechten worden ontleend.
            </p>
          </div>
        </div>
      </main>

      <ImpactModal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        type={activeModal}
        data={activeModal === 'income' ? {
          lumpsumAmount: results.lumpsumAmount,
          baseMonthly: results.baseMonthly,
          newMonthly: results.newMonthly,
          chartData: results.incomeChartData
        } : {
          lumpsumAmount: results.lumpsumAmount,
          taxImpact: results.taxImpact,
          chartData: results.taxChartData
        }}
      />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-blue-500" />
            <span className="text-white font-bold text-lg">Mijn Pensioen Dashboard</span>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl">
            Dit dashboard helpt u bij het maken van een weloverwogen beslissing over uw pensioen. 
            Het is een initiatief van de Nederlandse pensioenuitvoerders in samenwerking met UWV.
          </p>
        </div>
      </footer>
    </div>
  );
}
