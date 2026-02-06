import React from 'react';
import { X, Info, AlertTriangle, TrendingDown, ReceiptText, ArrowDown, ArrowRight, Coins, Calendar, Percent, PiggyBank, Receipt, Heart, Home, ChevronDown, CheckCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ThresholdVisualization } from './ImpactModal/ThresholdVisualization';
import { BracketBreakdown } from './ImpactModal/BracketBreakdown';
import { AfbouwExplanation } from './ImpactModal/AfbouwExplanation';
import { ConditionalLogicBox } from './ImpactModal/ConditionalLogicBox';
import { RuleReference } from './ImpactModal/RuleReference';
import { getRule } from './ImpactModal/rules-data';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'income' | 'tax' | 'toeslagen' | null;
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
  color?: 'green' | 'orange' | 'red';
}) {
  const colors = {
    green: 'bg-green-50 border-green-200 text-green-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    red: 'bg-red-50 border-red-200 text-red-700'
  };

  const iconColors = {
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-100 text-red-700'
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

  // Safety check for data
  if (!data) {
    console.error('[ImpactModal] No data provided');
    return null;
  }

  const isIncome = type === 'income';
  const isTax = type === 'tax';
  const isToeslagen = type === 'toeslagen';

  // Log data for debugging
  console.log('[ImpactModal] Opening modal:', { type, hasData: !!data, dataKeys: Object.keys(data) });

  // Extra logging for tax modal
  if (type === 'tax') {
    console.log('[ImpactModal] Tax modal data:', {
      lumpsumAmount: data.lumpsumAmount,
      taxImpact: data.taxImpact,
      inkomen: data.inkomen,
      zvwBijdrage: data.zvwBijdrage,
      hasParameters: !!data.parameters,
      parameters: data.parameters
    });
  }

  // Wrap in error boundary
  try {
    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <div key="impact-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
          <div className={`p-6 flex items-center justify-between border-b shrink-0 ${
            isIncome ? 'bg-green-50' :
            isTax ? 'bg-red-50' :
            'bg-orange-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                isIncome ? 'bg-green-100 text-green-700' :
                isTax ? 'bg-red-100 text-red-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {isIncome ? <TrendingDown className="w-6 h-6" /> :
                 isTax ? <ReceiptText className="w-6 h-6" /> :
                 <Heart className="w-6 h-6" />}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isIncome ? 'Hoe beïnvloedt dit uw inkomen?' :
                   isTax ? 'Hoe beïnvloedt dit uw belasting?' :
                   'Hoe beïnvloedt dit uw toeslagen?'}
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
                    U neemt <strong>{data.percentage}%</strong> van uw pensioenvermogen op als bedrag ineens
                    (<strong>€{data.lumpsumAmount.toLocaleString()}</strong> bruto, eenmalig).
                  </p>
                  <div className="mt-3 p-3 bg-red-100 rounded-lg border border-red-200">
                    <p className="text-sm text-red-800 font-medium">
                      ⚠️ Let op: Uw maandelijkse inkomen wordt daarna <strong>permanent €{data.reductionMonthly} lager</strong> voor de rest van uw leven.
                      Dit is €{(data.reductionMonthly * 12).toLocaleString()} per jaar.
                    </p>
                  </div>
                </div>

                {/* Temporal Logic Explanation */}
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Waarom is dit eenmalig voor belasting, maar permanent voor inkomen?
                  </h4>
                  <p className="text-sm text-yellow-800 mb-3">
                    Het bedrag ineens wordt alleen in <strong>het jaar van opname</strong> bij uw inkomen geteld voor belastingdoeleinden.
                    De verlaging van uw maandelijkse pensioen is echter <strong>permanent</strong>.
                  </p>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-white rounded-lg p-3 text-center border border-yellow-200">
                      <div className="text-xs text-yellow-700 font-medium mb-1">Jaar vóór opname</div>
                      <div className="text-sm font-bold text-gray-900 mb-1">Normaal inkomen</div>
                      <div className="text-xs text-gray-600">
                        €{Math.round(data.pensioenPerMaand).toLocaleString()}/mnd
                      </div>
                      <div className="text-xs text-green-600 font-medium mt-1">✓ Volledig pensioen</div>
                    </div>
                    <div className="bg-orange-100 rounded-lg p-3 text-center border-2 border-orange-400">
                      <div className="text-xs text-orange-700 font-medium mb-1">Jaar van opname</div>
                      <div className="text-sm font-bold text-orange-900 mb-1">Verhoogd inkomen</div>
                      <div className="text-xs text-gray-600 mb-1">
                        €{Math.round((data.resterendPensioenPerJaar + data.lumpsumAmount) / 12).toLocaleString()}/mnd*
                      </div>
                      <div className="text-xs text-orange-700 font-bold">⚠️ Eenmalig hoger</div>
                      <div className="text-xs text-red-600 font-bold">Extra belasting!</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-red-300">
                      <div className="text-xs text-red-700 font-medium mb-1">Jaren erna</div>
                      <div className="text-sm font-bold text-red-900 mb-1">Verlaagd inkomen</div>
                      <div className="text-xs text-gray-600">
                        €{Math.round(data.resterendPensioenPerJaar / 12).toLocaleString()}/mnd
                      </div>
                      <div className="text-xs text-red-600 font-bold mt-1">⚠ Permanent lager</div>
                    </div>
                  </div>
                  <p className="text-xs text-yellow-700 mt-3 italic">
                    * Schijnbaar hoger door eenmalige uitkering, maar structureel lager pensioen
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
                    color="green"
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
                  <RuleReference
                    ruleName={getRule('bedragIneens').name}
                    ruleNumber={getRule('bedragIneens').number}
                    ruleText={getRule('bedragIneens').text}
                    explanation={getRule('bedragIneens').explanation}
                  />

                  <StepConnector />

                  <CalculationStep
                    step={3}
                    title="Jaarlijks pensioen berekenen"
                    description="Uw aanvullend pensioen wordt omgerekend naar een jaarbedrag."
                    formula={`€${data.pensioenPerMaand.toLocaleString()}/mnd × 12 = €${data.pensioenPerJaar.toLocaleString()}/jaar`}
                    result={`€${data.pensioenPerJaar.toLocaleString()} per jaar`}
                    icon={Calendar}
                    color="green"
                  />
                  <RuleReference
                    ruleName={getRule('pensioenPerJaar').name}
                    ruleNumber={getRule('pensioenPerJaar').number}
                    ruleText={getRule('pensioenPerJaar').text}
                    explanation={getRule('pensioenPerJaar').explanation}
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
                  <RuleReference
                    ruleName={getRule('resterendPensioen').name}
                    ruleNumber={getRule('resterendPensioen').number}
                    ruleText={getRule('resterendPensioen').text}
                    explanation={getRule('resterendPensioen').explanation}
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
                  <RuleReference
                    ruleName={getRule('permanentVerlies').name}
                    ruleNumber={getRule('permanentVerlies').number}
                    ruleText={getRule('permanentVerlies').text}
                    explanation={getRule('permanentVerlies').explanation}
                  />
                </div>

                {/* Visual Impact */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-4">Vergelijking maandinkomen over tijd</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Let op: in het jaar van opname ontvangt u eenmalig het bedrag ineens, waardoor uw inkomen hoger lijkt.
                    Maar in alle jaren daarna is uw maandinkomen <strong>permanent lager</strong>.
                  </p>
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.chartData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                        <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} width={110} />
                        <Tooltip
                          formatter={(value: number) => [`€${value.toLocaleString()}`, 'Per maand']}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="waarde" radius={[0, 4, 4, 0]} barSize={32}>
                          {data.chartData.map((entry: any, index: number) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index === 0 ? '#6b7280' : index === 1 ? '#22c55e' : '#ef4444'}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex gap-4 mt-3 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-gray-500"></div>
                      <span className="text-gray-600">Referentie (geen opname)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-green-500"></div>
                      <span className="text-gray-600">Eenmalig hoger (incl. bedrag ineens)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-red-500"></div>
                      <span className="text-gray-600">Permanent lager</span>
                    </div>
                  </div>
                </div>

                {/* Long-term Impact */}
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Impact over tijd
                  </h4>
                  <p className="text-sm text-orange-800 mb-3">
                    Bij een verwachte levensduur van {data.currentAge + data.years} jaar (nog {data.years} jaar),
                    is het totale effect:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">Eenmalig ontvangen</div>
                      <div className="text-xl font-bold text-green-600">+ €{data.lumpsumAmount.toLocaleString()}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">Maandelijks verlies</div>
                      <div className="text-xl font-bold text-red-600">
                        - €{data.reductionMonthly}/mnd
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">Totaal verlies ({data.years} jaar)</div>
                      <div className="text-xl font-bold text-red-600">
                        - €{(data.reductionMonthly * 12 * data.years).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Break-even point */}
                  {data.lumpsumAmount > 0 && data.reductionMonthly > 0 && (
                    <div className="mt-4 bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-800">
                        <strong>Break-even punt:</strong> Na {Math.ceil(data.lumpsumAmount / (data.reductionMonthly * 12))} jaar
                        heeft u het bedrag ineens "terugverdiend" aan gemiste pensioeninkomsten.
                        {data.years > Math.ceil(data.lumpsumAmount / (data.reductionMonthly * 12)) ? (
                          <span className="text-red-600"> Gezien uw levensverwachting ontvangt u minder dan zonder opname.</span>
                        ) : (
                          <span className="text-green-600"> Gezien uw levensverwachting kan opname voordelig zijn.</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : isTax ? (
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
                    color="green"
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
                  <RuleReference
                    ruleName={getRule('inkomenJaarMetOpname').name}
                    ruleNumber={getRule('inkomenJaarMetOpname').number}
                    ruleText={getRule('inkomenJaarMetOpname').text}
                    explanation={getRule('inkomenJaarMetOpname').explanation}
                  />

                  <StepConnector />

                  {/* NEW Step 3: Zvw Bijdrage */}
                  <CalculationStep
                    step={3}
                    title="Zvw bijdrage (zorgverzekering)"
                    description="Inkomensafhankelijke bijdrage voor de Zorgverzekeringswet."
                    formula={`min(€${Math.round(data.inkomen).toLocaleString()}, €${data.parameters?.zvwMaximum?.toLocaleString() || '73.031'}) × ${((data.parameters?.zvwPercentage || 0.0545) * 100).toFixed(2)}%`}
                    result={`€${Math.round(data.zvwBijdrage).toLocaleString()}`}
                    icon={Heart}
                    color="orange"
                  />
                  <RuleReference
                    ruleName={getRule('berekenZvw').name}
                    ruleNumber={getRule('berekenZvw').number}
                    ruleText={getRule('berekenZvw').text}
                    explanation={getRule('berekenZvw').explanation}
                  />

                  {data.inkomen > (data.parameters?.zvwMaximum || 73031) && (
                    <div className="ml-4 mt-2 text-sm bg-orange-50 rounded-lg p-3 border border-orange-200">
                      <p className="text-orange-800">
                        ℹ️ Uw inkomen overschrijdt het Zvw maximum van €{(data.parameters?.zvwMaximum || 73031).toLocaleString()}.
                        U betaalt Zvw over maximaal dit bedrag.
                      </p>
                    </div>
                  )}

                  <StepConnector />

                  {/* Enhanced Step 4: Tax Bracket Breakdown */}
                  <CalculationStep
                    step={4}
                    title="Belasting Box 1 (per schijf)"
                    description="Uw inkomen wordt progressief belast in drie schijven met oplopende tarieven."
                    icon={Receipt}
                    color="red"
                  />

                  <div className="ml-4 space-y-3 mt-3">
                    <BracketBreakdown
                      inkomen={data.inkomen}
                      brackets={[
                        {
                          name: 'Schijf 1',
                          min: 0,
                          max: data.parameters?.eersteSchijfgrens || 40021,
                          rate: data.parameters?.tariefEersteSchijfAOW || 0.1907,
                          amountInBracket: Math.min(data.inkomen, data.parameters?.eersteSchijfgrens || 40021),
                          taxPaid: data.belastingEersteSchijf || 0
                        },
                        {
                          name: 'Schijf 2',
                          min: data.parameters?.eersteSchijfgrens || 40021,
                          max: data.parameters?.tweedeSchijfgrens || 75518,
                          rate: data.parameters?.tariefTweedeSchijf || 0.3693,
                          amountInBracket: Math.max(0, Math.min(data.inkomen, data.parameters?.tweedeSchijfgrens || 75518) - (data.parameters?.eersteSchijfgrens || 40021)),
                          taxPaid: data.belastingTweedeSchijf || 0
                        },
                        {
                          name: 'Schijf 3',
                          min: data.parameters?.tweedeSchijfgrens || 75518,
                          max: Infinity,
                          rate: data.parameters?.tariefDerdeSchijf || 0.4950,
                          amountInBracket: Math.max(0, data.inkomen - (data.parameters?.tweedeSchijfgrens || 75518)),
                          taxPaid: data.belastingDerdeSchijf || 0
                        }
                      ]}
                    />

                    <ThresholdVisualization
                      userValue={data.inkomen}
                      thresholds={[
                        { label: 'Schijf 1→2', value: data.parameters?.eersteSchijfgrens || 40021, color: '#10b981' },
                        { label: 'Schijf 2→3', value: data.parameters?.tweedeSchijfgrens || 75518, color: '#f59e0b' }
                      ]}
                      max={Math.max(data.inkomen * 1.1, (data.parameters?.tweedeSchijfgrens || 75518) * 1.2)}
                      title="Uw positie in belastingschijven"
                    />

                    {/* Tax bracket rules */}
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-bold text-gray-700 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-orange-600" />
                        Regelspraak regels voor belastingschijven:
                      </div>
                      <details className="bg-orange-50 rounded-lg border border-orange-200">
                        <summary className="px-3 py-2 cursor-pointer hover:bg-orange-100 text-xs font-medium text-orange-900 flex items-center gap-2">
                          <ChevronDown className="w-3 h-3" />
                          Bekijk de drie belastingschijf regels
                        </summary>
                        <div className="px-3 pb-3 space-y-3 text-xs">
                          <div className="bg-white rounded p-2 border border-green-200">
                            <div className="font-bold text-green-700 mb-1">Schijf 1 - {getRule('belastingEersteSchijf').name}</div>
                            <pre className="font-mono text-green-800 whitespace-pre-wrap text-xs leading-relaxed">{getRule('belastingEersteSchijf').text}</pre>
                          </div>
                          <div className="bg-white rounded p-2 border border-orange-200">
                            <div className="font-bold text-orange-700 mb-1">Schijf 2 - {getRule('belastingTweedeSchijf').name}</div>
                            <pre className="font-mono text-orange-800 whitespace-pre-wrap text-xs leading-relaxed">{getRule('belastingTweedeSchijf').text}</pre>
                          </div>
                          <div className="bg-white rounded p-2 border border-red-200">
                            <div className="font-bold text-red-700 mb-1">Schijf 3 - {getRule('belastingDerdeSchijf').name}</div>
                            <pre className="font-mono text-red-800 whitespace-pre-wrap text-xs leading-relaxed">{getRule('belastingDerdeSchijf').text}</pre>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>

                  <StepConnector />

                  {/* Enhanced Step 5: Heffingskortingen Breakdown */}
                  <CalculationStep
                    step={5}
                    title="Heffingskortingen"
                    description="Belastingkortingen waar u recht op heeft, verminderd bij hoger inkomen."
                    icon={Percent}
                    color="green"
                  />

                  <div className="ml-4 space-y-3 mt-3">
                    {/* Algemene Heffingskorting */}
                    <AfbouwExplanation
                      name="Algemene Heffingskorting (AHK)"
                      maxAmount={data.parameters?.ahkMaximumAOW || 1735}
                      actualAmount={data.algemeneHeffingskorting}
                      threshold={data.parameters?.ahkAfbouwgrens || 24813}
                      userIncome={data.inkomen}
                      afbouwRate={data.parameters?.ahkAfbouwPercentageAOW || 0.03421}
                      type="korting"
                    />

                    {/* Ouderenkorting */}
                    <AfbouwExplanation
                      name="Ouderenkorting (OK)"
                      maxAmount={data.parameters?.okMaximum || 1835}
                      actualAmount={data.ouderenkorting}
                      threshold={data.parameters?.okAfbouwgrens || 44770}
                      userIncome={data.inkomen}
                      afbouwRate={data.parameters?.okAfbouwPercentage || 0.15}
                      type="korting"
                    />

                    {/* Alleenstaande Ouderenkorting */}
                    {data.isAlleenstaand && data.alleenstaandeOuderenkorting > 0 && (
                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-bold text-green-900">Alleenstaande Ouderenkorting (AOK)</span>
                        </div>
                        <p className="text-xs text-green-800 mb-2">
                          U bent alleenstaand, dus u ontvangt de volledige AOK zonder afbouw.
                        </p>
                        <div className="text-lg font-bold text-green-700">
                          €{Math.round(data.alleenstaandeOuderenkorting).toLocaleString()}
                        </div>
                      </div>
                    )}

                    {/* Comparison with baseline */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3 border border-orange-200">
                      <h5 className="text-sm font-bold text-orange-900 mb-2">Impact op kortingen</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Zonder bedrag ineens:</span>
                          <span className="font-bold text-gray-900">€{Math.round(data.baselineHeffingskortingen).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Met bedrag ineens:</span>
                          <span className="font-bold text-gray-900">€{Math.round(data.totaleHeffingskortingen).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-orange-300">
                          <span className="text-red-800 font-bold">Verlies door hoger inkomen:</span>
                          <span className="text-red-700 font-bold">- €{Math.round(data.baselineHeffingskortingen - data.totaleHeffingskortingen).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Heffingskortingen rules */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-gray-700 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-orange-600" />
                        Regelspraak regels voor heffingskortingen:
                      </div>
                      <details className="bg-green-50 rounded-lg border border-green-200">
                        <summary className="px-3 py-2 cursor-pointer hover:bg-green-100 text-xs font-medium text-green-900 flex items-center gap-2">
                          <ChevronDown className="w-3 h-3" />
                          Bekijk de heffingskorting regels (AHK, OK, AOK)
                        </summary>
                        <div className="px-3 pb-3 space-y-3 text-xs">
                          <div className="bg-white rounded p-2 border border-green-200">
                            <div className="font-bold text-green-700 mb-1">{getRule('algemeneHeffingskorting').name}</div>
                            <pre className="font-mono text-green-800 whitespace-pre-wrap text-xs leading-relaxed">{getRule('algemeneHeffingskorting').text}</pre>
                            <p className="text-green-700 mt-2 italic">{getRule('algemeneHeffingskorting').explanation}</p>
                          </div>
                          <div className="bg-white rounded p-2 border border-green-200">
                            <div className="font-bold text-green-700 mb-1">{getRule('ouderenkorting').name}</div>
                            <pre className="font-mono text-green-800 whitespace-pre-wrap text-xs leading-relaxed">{getRule('ouderenkorting').text}</pre>
                            <p className="text-green-700 mt-2 italic">{getRule('ouderenkorting').explanation}</p>
                          </div>
                          <div className="bg-white rounded p-2 border border-green-200">
                            <div className="font-bold text-green-700 mb-1">{getRule('alleenstaandeOuderenkorting').name}</div>
                            <pre className="font-mono text-green-800 whitespace-pre-wrap text-xs leading-relaxed">{getRule('alleenstaandeOuderenkorting').text}</pre>
                            <p className="text-green-700 mt-2 italic">{getRule('alleenstaandeOuderenkorting').explanation}</p>
                          </div>
                        </div>
                      </details>
                    </div>

                    <div className="border-t pt-2 flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-700">Totale heffingskortingen:</span>
                      <span className="text-xl font-bold text-green-600">
                        €{Math.round(data.totaleHeffingskortingen).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <StepConnector />

                  {/* Step 6: Final Tax */}
                  <CalculationStep
                    step={6}
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
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#6b7280' : '#ef4444'} />
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
            ) : (
              // TOESLAGEN EXPLANATION
              <>
                {/* Summary */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Samenvatting
                  </h3>
                  <p className="text-sm text-orange-800">
                    Door <strong>€{data.lumpsumAmount.toLocaleString()}</strong> bedrag ineens op te nemen,
                    stijgt uw inkomen in dat jaar naar <strong>€{Math.round(data.inkomen).toLocaleString()}</strong>.
                    Hierdoor kunnen uw toeslagen (zorgtoeslag en huurtoeslag) vervallen of worden verminderd.
                  </p>
                </div>

                {/* Enhanced Benefits Impact with Thresholds */}
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-orange-600" />
                    Effect op toeslagen en drempels
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Door het hogere inkomen in het jaar van opname kunnen uw toeslagen vervallen of worden verminderd.
                    Hieronder ziet u de precieze drempels en afbouwmechanismen.
                  </p>

                  {/* Zorgtoeslag Section */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-5 h-5 text-red-600" />
                      <span className="font-bold text-gray-900">Zorgtoeslag</span>
                    </div>

                    <ConditionalLogicBox
                      condition={`uw inkomen €${(data.parameters?.ztGrensAlleenstaand || 37496).toLocaleString()} of meer is`}
                      result="heeft u geen recht op zorgtoeslag"
                      isMet={data.inkomen >= (data.parameters?.ztGrensAlleenstaand || 37496)}
                    />

                    {data.inkomen < (data.parameters?.ztGrensAlleenstaand || 37496) && (
                      <div className="mt-3 space-y-3">
                        <p className="text-sm text-gray-700">
                          Uw inkomen valt onder de grens. De hoogte van de zorgtoeslag wordt berekend met een afbouwformule:
                        </p>

                        <div className="bg-gray-50 rounded px-3 py-2 font-mono text-xs text-gray-700">
                          €{(data.parameters?.ztMaximumAlleenstaand || 1800).toLocaleString()} -
                          max(0, (€{Math.round(data.inkomen).toLocaleString()} - €{(data.parameters?.ztDrempel || 25437).toLocaleString()}) × {((data.parameters?.ztAfbouwPercentage || 0.1322) * 100).toFixed(2)}%)
                          = €{Math.round(data.zorgtoeslag).toLocaleString()}
                        </div>

                        <ThresholdVisualization
                          userValue={data.inkomen}
                          thresholds={[
                            { label: 'Afbouw start', value: data.parameters?.ztDrempel || 25437, color: '#10b981' },
                            { label: 'Zorgtoeslag vervalt', value: data.parameters?.ztGrensAlleenstaand || 37496, color: '#ef4444' }
                          ]}
                          max={(data.parameters?.ztGrensAlleenstaand || 37496) * 1.2}
                          title="Uw positie ten opzichte van zorgtoeslag grenzen"
                        />
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                      <span className="text-sm text-gray-600">
                        Zonder opname: <strong>€{Math.round(data.baselineZorgtoeslag).toLocaleString()}</strong>
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                      <span className={`text-sm font-bold ${data.zorgtoeslag < data.baselineZorgtoeslag ? 'text-red-600' : 'text-green-600'}`}>
                        Met opname: <strong>€{Math.round(data.zorgtoeslag).toLocaleString()}</strong>
                      </span>
                    </div>
                    {data.zorgtoeslag < data.baselineZorgtoeslag && (
                      <div className="text-sm text-red-600 font-bold mt-2 text-center">
                        Verlies: €{Math.round(data.baselineZorgtoeslag - data.zorgtoeslag).toLocaleString()}
                      </div>
                    )}
                  </div>

                  {/* Huurtoeslag Section */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Home className="w-5 h-5 text-orange-600" />
                      <span className="font-bold text-gray-900">Huurtoeslag</span>
                    </div>

                    <ConditionalLogicBox
                      condition={`uw inkomen boven €${(data.parameters?.htGrensDerde || 38000).toLocaleString()} komt`}
                      result="heeft u geen recht op huurtoeslag"
                      isMet={data.inkomen > (data.parameters?.htGrensDerde || 38000)}
                    />

                    {data.inkomen <= (data.parameters?.htGrensDerde || 38000) && (
                      <div className="mt-3 space-y-3">
                        <p className="text-sm text-gray-700">
                          Huurtoeslag wordt geleidelijk afgebouwd tussen drie inkomensdrempels met een sliding scale formule:
                        </p>

                        <ThresholdVisualization
                          userValue={data.inkomen}
                          thresholds={[
                            { label: 'Grens 1', value: data.parameters?.htGrensEerste || 26000, color: '#10b981' },
                            { label: 'Grens 2', value: data.parameters?.htGrensTweede || 32000, color: '#f59e0b' },
                            { label: 'Grens 3 (vervalt)', value: data.parameters?.htGrensDerde || 38000, color: '#ef4444' }
                          ]}
                          max={(data.parameters?.htGrensDerde || 38000) * 1.2}
                          title="Huurtoeslag afbouw schaal"
                        />

                        <div className="bg-gray-50 rounded px-3 py-2 font-mono text-xs text-gray-700">
                          €{(data.parameters?.htMaximum || 2900).toLocaleString()} ×
                          (€{(data.parameters?.htGrensDerde || 38000).toLocaleString()} - €{Math.round(data.inkomen).toLocaleString()}) ÷
                          (€{(data.parameters?.htGrensDerde || 38000).toLocaleString()} - €{(data.parameters?.htGrensEerste || 26000).toLocaleString()})
                          = €{Math.round(data.huurtoeslag).toLocaleString()}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                      <span className="text-sm text-gray-600">
                        Zonder opname: <strong>€{Math.round(data.baselineHuurtoeslag).toLocaleString()}</strong>
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                      <span className={`text-sm font-bold ${data.huurtoeslag < data.baselineHuurtoeslag ? 'text-red-600' : 'text-green-600'}`}>
                        Met opname: <strong>€{Math.round(data.huurtoeslag).toLocaleString()}</strong>
                      </span>
                    </div>
                    {data.huurtoeslag < data.baselineHuurtoeslag && (
                      <div className="text-sm text-red-600 font-bold mt-2 text-center">
                        Verlies: €{Math.round(data.baselineHuurtoeslag - data.huurtoeslag).toLocaleString()}
                      </div>
                    )}
                  </div>

                  {/* Total Impact Summary */}
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <h4 className="font-bold text-orange-900 mb-3">Totaal effect op toeslagen</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <ImpactBox
                        label="Zorgtoeslag verlies"
                        before={`€${Math.round(data.baselineZorgtoeslag).toLocaleString()}`}
                        after={`€${Math.round(data.zorgtoeslag).toLocaleString()}`}
                        difference={`- €${Math.round(data.baselineZorgtoeslag - data.zorgtoeslag).toLocaleString()}`}
                      />
                      <ImpactBox
                        label="Huurtoeslag verlies"
                        before={`€${Math.round(data.baselineHuurtoeslag).toLocaleString()}`}
                        after={`€${Math.round(data.huurtoeslag).toLocaleString()}`}
                        difference={`- €${Math.round(data.baselineHuurtoeslag - data.huurtoeslag).toLocaleString()}`}
                      />
                    </div>
                    <div className="mt-4 pt-4 border-t border-orange-200 text-center">
                      <div className="text-sm text-orange-700">Totaal verlies aan toeslagen</div>
                      <div className="text-2xl font-bold text-red-600">
                        - €{Math.round((data.baselineZorgtoeslag - data.zorgtoeslag) + (data.baselineHuurtoeslag - data.huurtoeslag)).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
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
        )}
      </AnimatePresence>
    );
  } catch (error) {
    console.error('[ImpactModal] Error rendering modal:', error);
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60">
        <div className="bg-white rounded-lg p-6 max-w-md">
          <h3 className="text-lg font-bold text-red-600 mb-2">Fout bij laden</h3>
          <p className="text-sm text-gray-700">
            Er is een fout opgetreden bij het laden van de details. Probeer de pagina te verversen.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Sluiten
          </button>
        </div>
      </div>
    );
  }
}
