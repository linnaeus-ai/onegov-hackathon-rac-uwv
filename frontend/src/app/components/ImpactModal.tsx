import React, { useState } from 'react';
import { X, Info, AlertTriangle, TrendingDown, ReceiptText, ArrowDown, ArrowRight, Coins, Calendar, Percent, PiggyBank, Receipt, Heart, Home, ChevronDown, Gift, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'income' | 'tax' | 'benefits' | null;
  data: any;
}

// Rule references from regels.rs
const RULES = {
  pensioenPerJaar: {
    name: "Bereken pensioen per jaar",
    text: "Het pensioen per jaar van een Scenario moet berekend worden als het aanvullend pensioen per maand van zijn persoon maal 12.",
    line: 8
  },
  bedragIneens: {
    name: "Bereken bedrag ineens",
    text: "Het bedrag ineens van een Scenario moet berekend worden als het pensioenvermogen van zijn persoon maal het opname percentage van het scenario gedeeld door 100.",
    line: 13
  },
  resterendPensioen: {
    name: "Bereken resterend pensioen",
    text: "Het resterend pensioen per jaar van een Scenario moet berekend worden als het pensioen per jaar van het scenario maal (100 min het opname percentage van het scenario) gedeeld door 100.",
    line: 19
  },
  permanentVerlies: {
    name: "Bereken permanent verlies",
    text: "Het permanent verlies per jaar van een Scenario moet berekend worden als het pensioen per jaar van het scenario min het resterend pensioen per jaar van het scenario.",
    line: 25
  },
  brutoInkomen: {
    name: "Bereken bruto inkomen jaar met opname",
    text: "Het bruto inkomen van een Scenario moet berekend worden als het AOW inkomen van zijn persoon plus het resterend pensioen per jaar van het scenario plus het bedrag ineens van het scenario indien het scenario is jaar met opname.",
    line: 43
  },
  zvw: {
    name: "Bereken Zvw",
    text: "De Zvw bijdrage van een Scenario moet berekend worden als de minimale waarde van het bruto inkomen van het scenario en de Zvw maximum maal het Zvw percentage.",
    line: 55
  },
  belastingEersteSchijf: {
    name: "Bereken belasting eerste schijf",
    text: "De belasting eerste schijf van een Scenario moet berekend worden als de minimale waarde van het bruto inkomen van het scenario en de eerste schijfgrens maal het tarief eerste schijf AOW.",
    line: 61
  },
  belastingTweedeSchijf: {
    name: "Bereken belasting tweede schijf",
    text: "De belasting tweede schijf van een Scenario moet berekend worden als de maximale waarde van 0 € en (de minimale waarde van het bruto inkomen van het scenario en de tweede schijfgrens min de eerste schijfgrens) maal het tarief tweede schijf.",
    line: 67
  },
  belastingDerdeSchijf: {
    name: "Bereken belasting derde schijf",
    text: "De belasting derde schijf van een Scenario moet berekend worden als de maximale waarde van 0 € en (het bruto inkomen van het scenario min de tweede schijfgrens) maal het tarief derde schijf.",
    line: 75
  },
  belastingBox1: {
    name: "Bereken belasting box1",
    text: "De belasting box1 van een Scenario moet berekend worden als de belasting eerste schijf van het scenario plus de belasting tweede schijf van het scenario plus de belasting derde schijf van het scenario.",
    line: 82
  },
  ahk: {
    name: "Bereken algemene heffingskorting",
    text: "De algemene heffingskorting van een Scenario moet berekend worden als de maximale waarde van 0 € en (de AHK maximum AOW min (de maximale waarde van 0 € en (het bruto inkomen van het scenario min de AHK afbouwgrens)) maal het AHK afbouw percentage AOW).",
    line: 93
  },
  ouderenkorting: {
    name: "Bereken ouderenkorting met afbouw",
    text: "De ouderenkorting van een Scenario moet berekend worden als de maximale waarde van 0 € en (de OK maximum min (het bruto inkomen van het scenario min de OK afbouwgrens) maal het OK afbouw percentage) indien het bruto inkomen van het scenario is groter dan de OK afbouwgrens.",
    line: 107
  },
  zorgtoeslag: {
    name: "Bereken zorgtoeslag onder grens",
    text: "De zorgtoeslag van een Scenario moet berekend worden als de maximale waarde van 0 € en (de ZT maximum alleenstaand min (de maximale waarde van 0 € en (het bruto inkomen van het scenario min de ZT drempel)) maal het ZT afbouw percentage) indien het bruto inkomen van het scenario is kleiner dan de ZT grens alleenstaand.",
    line: 152
  },
  zorgtoeslagBoven: {
    name: "Bereken zorgtoeslag boven grens",
    text: "De zorgtoeslag van een Scenario moet gesteld worden op 0 € indien het bruto inkomen van het scenario is groter of gelijk aan de ZT grens alleenstaand.",
    line: 147
  },
  huurtoeslag: {
    name: "Bereken huurtoeslag onder grens",
    text: "De huurtoeslag van een Scenario moet berekend worden als de maximale waarde van 0 € en (de HT maximum maal (de HT grens derde min het bruto inkomen van het scenario) gedeeld door (de HT grens derde min de HT grens eerste)) indien het bruto inkomen van het scenario is kleiner of gelijk aan de HT grens derde.",
    line: 168
  },
  huurtoeslagBoven: {
    name: "Bereken huurtoeslag boven grens",
    text: "De huurtoeslag van een Scenario moet gesteld worden op 0 € indien het bruto inkomen van het scenario is groter dan de HT grens derde.",
    line: 162
  }
};

// Rule reference component with collapsible functionality
function RuleReference({
  ruleName,
  ruleText,
  line
}: {
  ruleName: string;
  ruleText: string;
  line: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-2 px-3 py-2 bg-white/70 hover:bg-white border border-gray-200 hover:border-blue-300 rounded-lg transition-all text-left group"
      >
        <FileText className="w-4 h-4 text-blue-500 group-hover:text-blue-600 shrink-0" />
        <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700 flex-1">
          {isExpanded ? 'Verberg Regelspraak regel' : 'Bekijk Regelspraak regel'}
        </span>
        <ChevronRight
          className={`w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
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
            <div className="bg-white/90 border border-gray-200 border-t-0 rounded-b-lg p-3 -mt-1">
              <div className="flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-700 mb-2">
                    Regel: {ruleName}
                  </div>
                  <div className="text-xs text-gray-700 italic leading-relaxed bg-gray-50 rounded p-2">
                    "{ruleText}"
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Step component for calculation flow
function CalculationStep({
  step,
  title,
  description,
  formula,
  result,
  icon: Icon,
  color = 'blue',
  rule
}: {
  step: number;
  title: string;
  description: string;
  formula?: string;
  result: string;
  icon: React.ElementType;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
  rule?: { name: string; text: string; line: number };
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
          <p className="text-xs opacity-80 mb-3">{description}</p>
          {formula && (
            <div className="bg-white/50 rounded-lg px-3 py-2 font-mono text-xs mb-3">
              {formula}
            </div>
          )}
          <div className="text-lg font-bold mb-3">{result}</div>
          {rule && (
            <RuleReference
              ruleName={rule.name}
              ruleText={rule.text}
              line={rule.line}
            />
          )}
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
  const isBenefits = type === 'benefits';

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
          <div className={`p-6 flex items-center justify-between border-b shrink-0 ${
            isIncome ? 'bg-green-50' : isBenefits ? 'bg-purple-50' : 'bg-red-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                isIncome ? 'bg-green-100 text-green-700' :
                isBenefits ? 'bg-purple-100 text-purple-700' :
                'bg-red-100 text-red-700'
              }`}>
                {isIncome ? <TrendingDown className="w-6 h-6" /> :
                 isBenefits ? <Gift className="w-6 h-6" /> :
                 <ReceiptText className="w-6 h-6" />}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isIncome ? 'Hoe beïnvloedt dit uw inkomen?' :
                   isBenefits ? 'Hoe beïnvloedt dit uw toeslagen?' :
                   'Hoe beïnvloedt dit uw belasting?'}
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
                    rule={RULES.bedragIneens}
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
                    rule={RULES.pensioenPerJaar}
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
                    rule={RULES.resterendPensioen}
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
                    rule={RULES.permanentVerlies}
                  />
                </div>

                {/* Visual Impact */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-4">Vergelijking maandinkomen</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Door het bedrag ineens op te nemen wordt uw maandelijkse pensioenuitkering <strong>permanent lager</strong>.
                  </p>
                  <div className="h-40">
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
                              fill={index === 0 ? '#3b82f6' : '#ef4444'}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex gap-4 mt-3 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-blue-500"></div>
                      <span className="text-gray-600">Huidige situatie (geen opname)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-red-500"></div>
                      <span className="text-gray-600">Na opname (permanent lager)</span>
                    </div>
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
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-purple-600 mb-1">Eenmalig ontvangen</div>
                      <div className="text-xl font-bold text-green-600">+ €{data.lumpsumAmount.toLocaleString()}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-purple-600 mb-1">Maandelijks verlies</div>
                      <div className="text-xl font-bold text-red-600">
                        - €{data.reductionMonthly}/mnd
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-purple-600 mb-1">Totaal verlies ({data.years} jaar)</div>
                      <div className="text-xl font-bold text-red-600">
                        - €{(data.reductionMonthly * 12 * data.years).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Break-even point */}
                  {data.lumpsumAmount > 0 && data.reductionMonthly > 0 && (
                    <div className="mt-4 bg-white rounded-lg p-3">
                      <div className="text-sm text-purple-900">
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
            ) : isBenefits ? (
              // BENEFITS EXPLANATION
              <>
                {/* Summary */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Samenvatting
                  </h3>
                  <p className="text-sm text-purple-800">
                    Door <strong>€{data.lumpsumAmount.toLocaleString()}</strong> bedrag ineens op te nemen,
                    stijgt uw inkomen tijdelijk naar <strong>€{Math.round(data.brutoInkomen).toLocaleString()}</strong>.
                    Hierdoor kunnen uw toeslagen in het jaar van opname worden verminderd of vervallen.
                  </p>
                </div>

                {/* Calculation Steps */}
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-purple-600" />
                    Berekening toeslagen stap voor stap
                  </h3>

                  <CalculationStep
                    step={1}
                    title="Zorgtoeslag berekening"
                    description="Zorgtoeslag wordt afgebouwd bij hoger inkomen en vervalt volledig boven de inkomensgrens."
                    formula={
                      data.brutoInkomen >= 37496
                        ? `Inkomen €${Math.round(data.brutoInkomen).toLocaleString()} ≥ €37.496 → Geen zorgtoeslag`
                        : `€1.800 - max(0, €${Math.round(data.brutoInkomen).toLocaleString()} - €25.437) × 13,22% = €${Math.round(data.zorgtoeslag).toLocaleString()}`
                    }
                    result={`€${Math.round(data.zorgtoeslag).toLocaleString()} zorgtoeslag`}
                    icon={Heart}
                    color="purple"
                    rule={data.brutoInkomen >= 37496 ? RULES.zorgtoeslagBoven : RULES.zorgtoeslag}
                  />

                  <StepConnector />

                  <CalculationStep
                    step={2}
                    title="Huurtoeslag berekening"
                    description="Huurtoeslag neemt lineair af met het inkomen en vervalt boven de inkomensgrens."
                    formula={
                      data.brutoInkomen > 38000
                        ? `Inkomen €${Math.round(data.brutoInkomen).toLocaleString()} > €38.000 → Geen huurtoeslag`
                        : `€2.900 × (€38.000 - €${Math.round(data.brutoInkomen).toLocaleString()}) / (€38.000 - €26.000) = €${Math.round(data.huurtoeslag).toLocaleString()}`
                    }
                    result={`€${Math.round(data.huurtoeslag).toLocaleString()} huurtoeslag`}
                    icon={Home}
                    color="blue"
                    rule={data.brutoInkomen > 38000 ? RULES.huurtoeslagBoven : RULES.huurtoeslag}
                  />
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-2 gap-4">
                  <ImpactBox
                    label="Zorgtoeslag (jaar van opname)"
                    before={`€${Math.round(data.baselineZorgtoeslag).toLocaleString()}`}
                    after={`€${Math.round(data.zorgtoeslag).toLocaleString()}`}
                    difference={
                      data.zorgtoeslag < data.baselineZorgtoeslag
                        ? `- €${Math.round(data.baselineZorgtoeslag - data.zorgtoeslag).toLocaleString()} verlies`
                        : 'Geen wijziging'
                    }
                  />
                  <ImpactBox
                    label="Huurtoeslag (jaar van opname)"
                    before={`€${Math.round(data.baselineHuurtoeslag).toLocaleString()}`}
                    after={`€${Math.round(data.huurtoeslag).toLocaleString()}`}
                    difference={
                      data.huurtoeslag < data.baselineHuurtoeslag
                        ? `- €${Math.round(data.baselineHuurtoeslag - data.huurtoeslag).toLocaleString()} verlies`
                        : 'Geen wijziging'
                    }
                  />
                </div>

                {/* Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-4">Vergelijking toeslagen</h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          {
                            name: 'Zorgtoeslag',
                            Normaal: Math.round(data.baselineZorgtoeslag),
                            'Met opname': Math.round(data.zorgtoeslag)
                          },
                          {
                            name: 'Huurtoeslag',
                            Normaal: Math.round(data.baselineHuurtoeslag),
                            'Met opname': Math.round(data.huurtoeslag)
                          }
                        ]}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                        <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} width={100} />
                        <Tooltip
                          formatter={(value: number) => [`€${value.toLocaleString()}`, '']}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="Normaal" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                        <Bar dataKey="Met opname" fill="#a855f7" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Important note */}
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-orange-900 text-sm mb-1">Let op: Tijdelijk effect</h4>
                      <p className="text-sm text-orange-800">
                        Dit verlies aan toeslagen geldt <strong>alleen voor het jaar van opname</strong>. In de jaren
                        daarna keert uw inkomen terug naar het normale niveau (zonder het bedrag ineens) en herstellen
                        uw toeslagen zich.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Threshold visualization */}
                {(data.brutoInkomen >= 37496 || data.brutoInkomen > 38000) && (
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      U overschrijdt een inkomensgrens
                    </h4>
                    <p className="text-sm text-red-800 mb-3">
                      Door de opname komt uw inkomen boven de drempel voor toeslagen:
                    </p>
                    <div className="space-y-2">
                      {data.brutoInkomen >= 37496 && (
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-sm font-medium text-red-900">Zorgtoeslag vervalt</div>
                          <div className="text-xs text-red-700 mt-1">
                            Uw inkomen (€{Math.round(data.brutoInkomen).toLocaleString()}) ligt boven de grens van €37.496
                          </div>
                        </div>
                      )}
                      {data.brutoInkomen > 38000 && (
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-sm font-medium text-red-900">Huurtoeslag vervalt</div>
                          <div className="text-xs text-red-700 mt-1">
                            Uw inkomen (€{Math.round(data.brutoInkomen).toLocaleString()}) ligt boven de grens van €38.000
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
                    stijgt uw inkomen in dat jaar. Hierdoor betaalt u <strong>€{data.taxImpact.toLocaleString()}</strong> meer belasting
                    in het jaar van opname.
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
                    result={`€${Math.round(data.baselineBrutoInkomen).toLocaleString()} per jaar`}
                    icon={Coins}
                    color="blue"
                  />

                  <StepConnector />

                  <CalculationStep
                    step={2}
                    title="Inkomen met bedrag ineens"
                    description="In het jaar van opname wordt het bedrag ineens bij uw inkomen geteld."
                    formula={`€${Math.round(data.baselineBrutoInkomen).toLocaleString()} + €${data.lumpsumAmount.toLocaleString()} = €${Math.round(data.brutoInkomen).toLocaleString()}`}
                    result={`€${Math.round(data.brutoInkomen).toLocaleString()} totaal inkomen`}
                    icon={TrendingDown}
                    color="orange"
                    rule={RULES.brutoInkomen}
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
                    rule={RULES.belastingBox1}
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
                    rule={RULES.ahk}
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
