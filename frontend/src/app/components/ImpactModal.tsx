import React from 'react';
import { X, Info, AlertTriangle, TrendingDown, ReceiptText, ArrowDown, ArrowRight, Coins, Calendar, Percent, PiggyBank, Receipt, Heart, Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'income' | 'tax' | null;
  data: any;
}

// Step component for calculation flow
function CalculationStep({
  step,
  title,
  description,
  formula,
  result,
  icon: Icon,
  color = 'blue'
}: {
  step: number;
  title: string;
  description: string;
  formula?: string;
  result: string;
  icon: React.ElementType;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    red: 'bg-red-50 border-red-200 text-red-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700'
  };

  const iconColors = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className={`rounded-xl border p-4 ${colors[color]}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${iconColors[color]} shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${iconColors[color]}`}>
              Stap {step}
            </span>
            <h4 className="font-bold text-sm">{title}</h4>
          </div>
          <p className="text-xs opacity-80 mb-2">{description}</p>
          {formula && (
            <div className="bg-white/50 rounded-lg px-3 py-2 font-mono text-xs mb-2">
              {formula}
            </div>
          )}
          <div className="text-lg font-bold">{result}</div>
        </div>
      </div>
    </div>
  );
}

// Arrow connector between steps
function StepConnector() {
  return (
    <div className="flex justify-center py-1">
      <ChevronDown className="w-5 h-5 text-gray-300" />
    </div>
  );
}

// Impact comparison box
function ImpactBox({
  label,
  before,
  after,
  difference,
  isPositive = false
}: {
  label: string;
  before: string;
  after: string;
  difference: string;
  isPositive?: boolean;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3">
      <div className="text-xs font-medium text-gray-500 mb-2">{label}</div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-xs text-gray-400">Was</div>
          <div className="font-semibold text-gray-600">{before}</div>
        </div>
        <div>
          <ArrowRight className="w-4 h-4 mx-auto text-gray-300" />
        </div>
        <div>
          <div className="text-xs text-gray-400">Wordt</div>
          <div className="font-semibold text-gray-900">{after}</div>
        </div>
      </div>
      <div className={`text-center mt-2 text-sm font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {difference}
      </div>
    </div>
  );
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
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className={`p-6 flex items-center justify-between border-b shrink-0 ${isIncome ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${isIncome ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {isIncome ? <TrendingDown className="w-6 h-6" /> : <ReceiptText className="w-6 h-6" />}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isIncome ? 'Hoe beïnvloedt dit uw inkomen?' : 'Hoe beïnvloedt dit uw belasting?'}
                </h2>
                <p className="text-sm text-gray-500">
                  Stap voor stap uitleg van de berekening
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isIncome ? (
              // INCOME EXPLANATION
              <>
                {/* Summary */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Samenvatting
                  </h3>
                  <p className="text-sm text-orange-800">
                    U neemt <strong>{data.percentage}%</strong> van uw pensioenvermogen op als bedrag ineens.
                    Dit betekent dat uw maandelijkse pensioenuitkering <strong>permanent</strong> lager wordt
                    met <strong>€{data.reductionMonthly}/maand</strong>.
                  </p>
                </div>

                {/* Calculation Steps */}
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Coins className="w-5 h-5 text-blue-600" />
                    Berekening stap voor stap
                  </h3>

                  <CalculationStep
                    step={1}
                    title="Uw pensioenvermogen"
                    description="Dit is het totale bedrag dat u heeft opgebouwd voor uw pensioen."
                    result={`€${data.pensioenvermogen.toLocaleString()}`}
                    icon={PiggyBank}
                    color="blue"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={2}
                    title="Bedrag ineens berekenen"
                    description={`U kiest voor ${data.percentage}% opname van uw pensioenvermogen.`}
                    formula={`€${data.pensioenvermogen.toLocaleString()} × ${data.percentage}% = €${data.lumpsumAmount.toLocaleString()}`}
                    result={`€${data.lumpsumAmount.toLocaleString()} bruto ontvangst`}
                    icon={Percent}
                    color="green"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={3}
                    title="Jaarlijks pensioen berekenen"
                    description="Uw aanvullend pensioen wordt omgerekend naar een jaarbedrag."
                    formula={`€${data.pensioenPerMaand.toLocaleString()}/mnd × 12 = €${data.pensioenPerJaar.toLocaleString()}/jaar`}
                    result={`€${data.pensioenPerJaar.toLocaleString()} per jaar`}
                    icon={Calendar}
                    color="blue"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={4}
                    title="Resterend pensioen na opname"
                    description={`Door ${data.percentage}% op te nemen, houdt u ${100 - data.percentage}% van uw jaarlijkse pensioen over.`}
                    formula={`€${data.pensioenPerJaar.toLocaleString()} × ${100 - data.percentage}% = €${data.resterendPensioenPerJaar.toLocaleString()}`}
                    result={`€${data.resterendPensioenPerJaar.toLocaleString()} per jaar resterend`}
                    icon={TrendingDown}
                    color="orange"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={5}
                    title="Permanent verlies per maand"
                    description="Dit bedrag ontvangt u elke maand minder, voor de rest van uw leven."
                    formula={`(€${data.pensioenPerJaar.toLocaleString()} - €${data.resterendPensioenPerJaar.toLocaleString()}) ÷ 12 = €${data.reductionMonthly}`}
                    result={`- €${data.reductionMonthly} per maand`}
                    icon={AlertTriangle}
                    color="red"
                  />
                </div>

                {/* Visual Impact */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-4">Vergelijking maandinkomen</h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.chartData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                        <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} width={100} />
                        <Tooltip
                          formatter={(value: number) => [`€${value.toLocaleString()}`, 'Bedrag']}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="waarde" radius={[0, 4, 4, 0]} barSize={40}>
                          {data.chartData.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#f97316'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Long-term Impact */}
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Impact over tijd
                  </h4>
                  <p className="text-sm text-purple-800 mb-3">
                    Bij een verwachte levensduur van {data.currentAge + data.years} jaar (nog {data.years} jaar),
                    is het totale effect:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-purple-600 mb-1">Eenmalig ontvangen</div>
                      <div className="text-xl font-bold text-green-600">+ €{data.lumpsumAmount.toLocaleString()}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-purple-600 mb-1">Totaal minder pensioen</div>
                      <div className="text-xl font-bold text-red-600">
                        - €{(data.reductionMonthly * 12 * data.years).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // TAX EXPLANATION
              <>
                {/* Summary */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Samenvatting
                  </h3>
                  <p className="text-sm text-red-800">
                    Door <strong>€{data.lumpsumAmount.toLocaleString()}</strong> bedrag ineens op te nemen,
                    stijgt uw inkomen in dat jaar. Hierdoor betaalt u <strong>€{data.taxImpact.toLocaleString()}</strong> meer belasting.
                    {data.baselineZorgtoeslag > data.zorgtoeslag && (
                      <> Ook verliest u mogelijk recht op toeslagen.</>
                    )}
                  </p>
                </div>

                {/* Calculation Steps */}
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-red-600" />
                    Berekening stap voor stap
                  </h3>

                  <CalculationStep
                    step={1}
                    title="Uw normale jaarinkomen"
                    description="Dit is uw inkomen zonder bedrag ineens (AOW + pensioen + overig)."
                    result={`€${Math.round(data.baselineInkomen).toLocaleString()} per jaar`}
                    icon={Coins}
                    color="blue"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={2}
                    title="Inkomen met bedrag ineens"
                    description="In het jaar van opname wordt het bedrag ineens bij uw inkomen geteld."
                    formula={`€${Math.round(data.baselineInkomen).toLocaleString()} + €${data.lumpsumAmount.toLocaleString()} = €${Math.round(data.inkomen).toLocaleString()}`}
                    result={`€${Math.round(data.inkomen).toLocaleString()} totaal inkomen`}
                    icon={TrendingDown}
                    color="orange"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={3}
                    title="Bruto belasting (Box 1)"
                    description="Belasting wordt berekend over schijven met verschillende tarieven (19,07%, 36,93%, 49,50%)."
                    formula={`Schijf 1 (19,07%) + Schijf 2 (36,93%) + Schijf 3 (49,50%)`}
                    result={`€${Math.round(data.belastingBox1).toLocaleString()} bruto belasting`}
                    icon={Receipt}
                    color="red"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={4}
                    title="Heffingskortingen toepassen"
                    description="U heeft recht op kortingen (algemene heffingskorting, ouderenkorting). Deze worden lager bij hoger inkomen."
                    formula={`Normaal: €${Math.round(data.baselineHeffingskortingen).toLocaleString()} → Nu: €${Math.round(data.totaleHeffingskortingen).toLocaleString()}`}
                    result={`€${Math.round(data.totaleHeffingskortingen).toLocaleString()} aan kortingen`}
                    icon={Percent}
                    color="green"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={5}
                    title="Te betalen belasting"
                    description="Bruto belasting minus heffingskortingen."
                    formula={`€${Math.round(data.belastingBox1).toLocaleString()} - €${Math.round(data.totaleHeffingskortingen).toLocaleString()} = €${Math.round(data.belastingNaHeffingskortingen).toLocaleString()}`}
                    result={`€${Math.round(data.belastingNaHeffingskortingen).toLocaleString()} te betalen`}
                    icon={AlertTriangle}
                    color="red"
                  />
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-2 gap-4">
                  <ImpactBox
                    label="Jaarlijkse belasting"
                    before={`€${Math.round(data.baselineBelasting).toLocaleString()}`}
                    after={`€${Math.round(data.belastingNaHeffingskortingen).toLocaleString()}`}
                    difference={`+ €${data.taxImpact.toLocaleString()} extra`}
                  />
                  <ImpactBox
                    label="Netto ontvangst"
                    before="€0"
                    after={`€${data.netLumpsum.toLocaleString()}`}
                    difference={`Na belasting over`}
                    isPositive={true}
                  />
                </div>

                {/* Benefits Impact */}
                {(data.baselineZorgtoeslag > 0 || data.baselineHuurtoeslag > 0) && (
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Effect op toeslagen
                    </h4>
                    <p className="text-sm text-orange-800 mb-4">
                      Door het hogere inkomen in het jaar van opname kunnen uw toeslagen vervallen of worden verminderd.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-4 h-4 text-pink-500" />
                          <span className="text-sm font-medium text-gray-700">Zorgtoeslag</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">€{Math.round(data.baselineZorgtoeslag).toLocaleString()}</span>
                          <ArrowRight className="w-4 h-4 text-gray-300" />
                          <span className={`font-bold ${data.zorgtoeslag < data.baselineZorgtoeslag ? 'text-red-600' : 'text-gray-900'}`}>
                            €{Math.round(data.zorgtoeslag).toLocaleString()}
                          </span>
                        </div>
                        {data.zorgtoeslag < data.baselineZorgtoeslag && (
                          <div className="text-xs text-red-600 mt-1">
                            - €{Math.round(data.baselineZorgtoeslag - data.zorgtoeslag).toLocaleString()} verlies
                          </div>
                        )}
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Home className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-gray-700">Huurtoeslag</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">€{Math.round(data.baselineHuurtoeslag).toLocaleString()}</span>
                          <ArrowRight className="w-4 h-4 text-gray-300" />
                          <span className={`font-bold ${data.huurtoeslag < data.baselineHuurtoeslag ? 'text-red-600' : 'text-gray-900'}`}>
                            €{Math.round(data.huurtoeslag).toLocaleString()}
                          </span>
                        </div>
                        {data.huurtoeslag < data.baselineHuurtoeslag && (
                          <div className="text-xs text-red-600 mt-1">
                            - €{Math.round(data.baselineHuurtoeslag - data.huurtoeslag).toLocaleString()} verlies
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-4">Vergelijking belasting</h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.chartData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                        <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} width={100} />
                        <Tooltip
                          formatter={(value: number) => [`€${value.toLocaleString()}`, 'Bedrag']}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="waarde" radius={[0, 4, 4, 0]} barSize={40}>
                          {data.chartData.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#ef4444'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Warning */}
                {data.taxImpact > 2000 && (
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-red-900 text-sm mb-1">Let op: Aanzienlijke belastingdruk</h4>
                        <p className="text-sm text-red-800">
                          Van uw bruto bedrag ineens van €{data.lumpsumAmount.toLocaleString()} houdt u netto
                          €{data.netLumpsum.toLocaleString()} over. Dit is {Math.round((data.netLumpsum / data.lumpsumAmount) * 100)}%
                          van het bruto bedrag.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Rules Reference */}
            <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
              <h4 className="font-bold text-gray-700 text-sm mb-2">Gebaseerd op Regelspraak regels</h4>
              <p className="text-xs text-gray-500">
                Deze berekening is gebaseerd op de officiële regels voor bedrag ineens, geïmplementeerd in Regelspraak.
                De regels volgen de wetgeving voor AOW-gerechtigden met de belastingtarieven en heffingskortingen van 2024.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-50 border-t flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Begrepen
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
