import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Header } from "./components/Header";
import { Calculator } from "./components/Calculator";
import { ImpactCard } from "./components/ImpactCard";
import { ImpactModal } from "./components/ImpactModal";
import {
  TrendingUp,
  Wallet,
  ShieldCheck,
  ArrowRightLeft,
  Info,
  AlertTriangle,
  Loader2,
  CheckCircle2,
  Gift,
} from "lucide-react";
import { motion } from "motion/react";
import {
  fetchProfiles,
  calculate,
  calculateOptimal,
  type Profile,
  type CalculationResponse,
  type OptimalResponse,
} from "./api";

export default function App() {
  const [lumpsum, setLumpsum] = useState(5);
  const [years, setYears] = useState(25);
  const [activeModal, setActiveModal] = useState<
    "income" | "tax" | "benefits" | null
  >(null);

  // Profile state
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(
    null,
  );
  const [isLoadingProfiles, setIsLoadingProfiles] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculation, setCalculation] = useState<CalculationResponse | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  // Optimal calculation state
  const [isCalculatingOptimal, setIsCalculatingOptimal] = useState(false);
  const [optimalResult, setOptimalResult] = useState<OptimalResponse | null>(
    null,
  );

  // Load profiles on mount
  useEffect(() => {
    fetchProfiles()
      .then((data) => {
        setProfiles(data);
        // Select first profile by default
        if (data.length > 0) {
          setSelectedProfileId(data[0].id);
        }
      })
      .catch((err) => {
        console.error("Failed to load profiles:", err);
        setError(
          "Kon profielen niet laden. Zorg dat de backend draait op localhost:3001",
        );
      })
      .finally(() => setIsLoadingProfiles(false));
  }, []);

  // Calculate when profile or lumpsum changes
  useEffect(() => {
    if (!selectedProfileId) return;

    setIsCalculating(true);
    setError(null);

    calculate(selectedProfileId, lumpsum)
      .then(setCalculation)
      .catch((err) => {
        console.error("Calculation failed:", err);
        setError("Berekening mislukt");
      })
      .finally(() => setIsCalculating(false));
  }, [selectedProfileId, lumpsum]);

  // Clear optimal result when profile or years changes
  useEffect(() => {
    setOptimalResult(null);
  }, [selectedProfileId, years]);

  // Compute display values from calculation
  const results = useMemo(() => {
    if (!calculation) {
      // Fallback values when no calculation available
      return {
        lumpsumAmount: 0,
        baseMonthly: 0,
        newMonthly: 0,
        ongoingMonthly: 0,
        taxImpact: 0,
        netLumpsum: 0,
        reductionMonthly: 0,
        incomeChartData: [],
        taxChartData: [],
        pensioenvermogen: 0,
        nettoInkomen: 0,
        zorgtoeslag: 0,
        huurtoeslag: 0,
      };
    }

    const { result, baseline, comparison, profile } = calculation;

    // Calculate the ongoing monthly income AFTER the lump sum year
    // This is lower because the pension is permanently reduced
    const ongoingMonthly = Math.round(
      baseline.maandelijksNettoInkomen - result.maandelijksVerlies,
    );

    return {
      lumpsumAmount: result.bedragIneens,
      baseMonthly: Math.round(baseline.maandelijksNettoInkomen),
      newMonthly: Math.round(result.maandelijksNettoInkomen),
      ongoingMonthly: ongoingMonthly, // Permanent monthly income after lump sum
      taxImpact: Math.round(comparison.belastingVerschil),
      netLumpsum: Math.round(comparison.nettoUitkering),
      reductionMonthly: Math.round(result.maandelijksVerlies),
      pensioenvermogen: profile.pensioenvermogen,
      nettoInkomen: result.nettoInkomen,
      zorgtoeslag: result.zorgtoeslag,
      huurtoeslag: result.huurtoeslag,
      // Show comparison: current income vs permanent income after lump sum
      incomeChartData: [
        {
          name: "Zonder opname",
          waarde: Math.round(baseline.maandelijksNettoInkomen),
        },
        { name: "Na opname", waarde: ongoingMonthly },
      ],
      taxChartData: [
        {
          name: "Normaal",
          waarde: Math.round(baseline.belastingNaHeffingskortingen),
        },
        {
          name: "Met bedrag ineens",
          waarde: Math.round(result.belastingNaHeffingskortingen),
        },
      ],
    };
  }, [calculation]);

  const handleCalculateBest = useCallback(async () => {
    if (!selectedProfileId) return;

    setIsCalculatingOptimal(true);
    setError(null);

    try {
      // Use the years slider as life expectancy (remaining years after retirement)
      const currentAge = calculation?.profile.age || 67;
      const lifeExpectancy = currentAge + years;

      const result = await calculateOptimal(selectedProfileId, lifeExpectancy);
      setOptimalResult(result);
      // Set the optimal percentage
      setLumpsum(result.optimal);
    } catch (err) {
      console.error("Optimal calculation failed:", err);
      setError("Kon optimale keuze niet berekenen");
    } finally {
      setIsCalculatingOptimal(false);
    }
  }, [selectedProfileId, years, calculation?.profile.age]);

  const handleSelectProfile = useCallback((id: string) => {
    setSelectedProfileId(id);
  }, []);

  const selectedProfile = profiles.find((p) => p.id === selectedProfileId);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex flex-col">
      <Header
        profiles={profiles}
        selectedProfileId={selectedProfileId || undefined}
        onSelectProfile={handleSelectProfile}
        isLoading={isLoadingProfiles}
      />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        {/* Error Banner */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            {error}
          </div>
        )}

        {/* Intro Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                Bedrag ineens berekenen
              </h1>
              <p className="text-gray-500 max-w-2xl">
                Ontdek wat de gevolgen zijn als u een deel van uw pensioen in
                één keer laat uitbetalen. U kunt maximaal 10% van uw opgebouwde
                ouderdomspensioen opnemen.
              </p>
              {selectedProfile && (
                <p className="text-sm text-blue-600 mt-2">
                  Berekening voor: <strong>{selectedProfile.name}</strong>
                  {calculation?.profile.pensioenvermogen ? (
                    <span className="text-gray-500 ml-2">
                      (Pensioenvermogen: €
                      {calculation.profile.pensioenvermogen.toLocaleString()})
                    </span>
                  ) : null}
                </p>
              )}
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
              isCalculatingOptimal={isCalculatingOptimal}
              currentAge={calculation?.profile.age || 67}
            />

            {/* Profile Info Card */}
            {calculation?.profile && (
              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-3">
                  Profielgegevens
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Leeftijd</span>
                    <span className="font-medium">
                      {calculation.profile.age} jaar
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">AOW-gerechtigd</span>
                    <span className="font-medium">
                      {calculation.profile.isAOWGerechtigd ? "Ja" : "Nee"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Alleenstaand</span>
                    <span className="font-medium">
                      {calculation.profile.isAlleenstaand ? "Ja" : "Nee"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pensioenvermogen</span>
                    <span className="font-medium">
                      €{calculation.profile.pensioenvermogen.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pensioen/maand</span>
                    <span className="font-medium">
                      €
                      {calculation.profile.aanvullendPensioenPerMaand.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Optimal Recommendation Card */}
            {optimalResult && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-4">
                <h3 className="font-bold text-green-800 text-sm mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Aanbeveling
                </h3>
                <div className="space-y-3">
                  <div className="text-center py-2">
                    <span className="text-3xl font-bold text-green-700">
                      {optimalResult.optimal}%
                    </span>
                    <p className="text-sm text-green-600 mt-1">
                      Optimale opname
                    </p>
                  </div>
                  <p className="text-xs text-green-700 leading-relaxed">
                    {optimalResult.recommendation.reason}
                  </p>
                  <div className="pt-2 border-t border-green-200 space-y-1 text-xs">
                    <div className="flex justify-between text-green-700">
                      <span>Verwachte leeftijd</span>
                      <span className="font-medium">
                        {optimalResult.lifeExpectancy} jaar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Impact Analysis */}
          <div className="lg:col-span-8 space-y-6">
            {isCalculating && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-500">
                  Berekening wordt uitgevoerd...
                </span>
              </div>
            )}

            {!isCalculating && calculation && (
              <>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-blue-100 text-sm font-medium mb-1">
                      Geschatte eenmalige bruto opname
                    </p>
                    <h3 className="text-3xl font-bold mb-4">
                      €{results.lumpsumAmount.toLocaleString()}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm py-2 border-t border-white/10">
                        <span className="opacity-80">
                          Netto bedrag (na belasting)
                        </span>
                        <span className="font-bold">
                          €{results.netLumpsum.toLocaleString()}
                        </span>
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <ImpactCard
                      type="income"
                      title="Levenslang Inkomen"
                      description="Effect op uw maandelijkse pensioenuitkering vanaf uw pensioendatum."
                      value={
                        results.reductionMonthly > 0
                          ? `- €${results.reductionMonthly} /mnd`
                          : "Geen wijziging"
                      }
                      trend={
                        results.reductionMonthly > 0 ? "Daling" : "Neutraal"
                      }
                      onClick={() => setActiveModal("income")}
                    />
                    <ImpactCard
                      type="tax"
                      title="Belastingdruk"
                      description="Extra belasting die u betaalt in het jaar van de eenmalige opname."
                      value={
                        results.taxImpact > 0
                          ? `+ €${results.taxImpact.toLocaleString()}`
                          : "Geen extra belasting"
                      }
                      trend={results.taxImpact > 0 ? "Toename" : "Neutraal"}
                      onClick={() => setActiveModal("tax")}
                    />
                    <ImpactCard
                      type="benefits"
                      title="Toeslagen"
                      description="Impact op zorgtoeslag en huurtoeslag door hoger inkomen in opnamejaar."
                      value={
                        calculation &&
                        calculation.baseline.zorgtoeslag +
                          calculation.baseline.huurtoeslag >
                          calculation.result.zorgtoeslag +
                            calculation.result.huurtoeslag
                          ? `- €${Math.round(calculation.baseline.zorgtoeslag + calculation.baseline.huurtoeslag - (calculation.result.zorgtoeslag + calculation.result.huurtoeslag)).toLocaleString()}`
                          : "Geen wijziging"
                      }
                      trend={
                        calculation &&
                        calculation.baseline.zorgtoeslag +
                          calculation.baseline.huurtoeslag >
                          calculation.result.zorgtoeslag +
                            calculation.result.huurtoeslag
                          ? "Daling"
                          : "Neutraal"
                      }
                      onClick={() => setActiveModal("benefits")}
                    />
                  </div>

                  {/* Quick Summary Table */}
                  <div className="bg-white rounded-xl border border-gray-100 p-6 overflow-hidden">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Overzicht scenario
                    </h3>
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
                            <td className="py-4 text-sm font-medium">
                              Beschikbaar inkomen /mnd
                            </td>
                            <td className="py-4 text-sm">
                              €{results.baseMonthly.toLocaleString()}
                            </td>
                            <td className="py-4 text-sm font-bold">
                              €{results.ongoingMonthly.toLocaleString()}
                            </td>
                            <td className="py-4 text-sm text-red-500 font-bold text-right">
                              {results.reductionMonthly > 0
                                ? `- €${results.reductionMonthly}`
                                : "€0"}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 text-sm font-medium">
                              Belasting (jaar)
                            </td>
                            <td className="py-4 text-sm">
                              €
                              {Math.round(
                                calculation.baseline
                                  .belastingNaHeffingskortingen,
                              ).toLocaleString()}
                            </td>
                            <td className="py-4 text-sm font-bold">
                              €
                              {Math.round(
                                calculation.result.belastingNaHeffingskortingen,
                              ).toLocaleString()}
                            </td>
                            <td
                              className={`py-4 text-sm font-bold text-right ${results.taxImpact > 0 ? "text-red-500" : "text-gray-400"}`}
                            >
                              {results.taxImpact > 0
                                ? `+ €${results.taxImpact.toLocaleString()}`
                                : "€0"}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 text-sm font-medium">
                              Zorgtoeslag (jaar)
                            </td>
                            <td className="py-4 text-sm">
                              €
                              {Math.round(
                                calculation.baseline.zorgtoeslag,
                              ).toLocaleString()}
                            </td>
                            <td className="py-4 text-sm font-bold">
                              €
                              {Math.round(
                                calculation.result.zorgtoeslag,
                              ).toLocaleString()}
                            </td>
                            <td
                              className={`py-4 text-sm font-bold text-right ${calculation.result.zorgtoeslag < calculation.baseline.zorgtoeslag ? "text-red-500" : "text-green-500"}`}
                            >
                              {calculation.result.zorgtoeslag -
                                calculation.baseline.zorgtoeslag >=
                              0
                                ? "+ "
                                : "- "}
                              €
                              {Math.abs(
                                Math.round(
                                  calculation.result.zorgtoeslag -
                                    calculation.baseline.zorgtoeslag,
                                ),
                              ).toLocaleString()}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 text-sm font-medium">
                              Huurtoeslag (jaar)
                            </td>
                            <td className="py-4 text-sm">
                              €
                              {Math.round(
                                calculation.baseline.huurtoeslag,
                              ).toLocaleString()}
                            </td>
                            <td className="py-4 text-sm font-bold">
                              €
                              {Math.round(
                                calculation.result.huurtoeslag,
                              ).toLocaleString()}
                            </td>
                            <td
                              className={`py-4 text-sm font-bold text-right ${calculation.result.huurtoeslag < calculation.baseline.huurtoeslag ? "text-red-500" : "text-green-500"}`}
                            >
                              {calculation.result.huurtoeslag -
                                calculation.baseline.huurtoeslag >=
                              0
                                ? "+ "
                                : "- "}
                              €
                              {Math.abs(
                                Math.round(
                                  calculation.result.huurtoeslag -
                                    calculation.baseline.huurtoeslag,
                                ),
                              ).toLocaleString()}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-4 text-[10px] text-gray-400">
                      * Berekeningen zijn gebaseerd op de Regelspraak regels
                      voor bedrag ineens. De werkelijke bedragen kunnen
                      afwijken.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sticky Warning Banner */}
        <div className="sticky bottom-6 mt-12 z-40">
          <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-start gap-3 text-orange-800 text-sm backdrop-blur-sm bg-orange-50/95">
            <AlertTriangle className="w-5 h-5 shrink-0 text-orange-600 mt-0.5" />
            <p>
              <strong>Belangrijke waarschuwing:</strong> De getoonde
              berekeningen zijn indicatief en gebaseerd op algemene aannames. De
              werkelijke bedragen kunnen afwijken door persoonlijke
              omstandigheden of toekomstige wijzigingen in wet- en regelgeving.
              Aan deze berekening kunnen geen rechten worden ontleend.
            </p>
          </div>
        </div>
      </main>

      <ImpactModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        type={activeModal}
        data={
          activeModal === "income"
            ? {
                // Basic values
                lumpsumAmount: results.lumpsumAmount,
                baseMonthly: results.baseMonthly,
                newMonthly: results.newMonthly,
                ongoingMonthly: results.ongoingMonthly, // Permanent monthly income after lump sum
                reductionMonthly: results.reductionMonthly,
                chartData: results.incomeChartData,
                // Calculation details
                percentage: lumpsum,
                pensioenvermogen: calculation?.profile.pensioenvermogen || 0,
                pensioenPerMaand:
                  calculation?.profile.aanvullendPensioenPerMaand || 0,
                pensioenPerJaar: calculation?.result.pensioenPerJaar || 0,
                resterendPensioenPerJaar:
                  calculation?.result.resterendPensioenPerJaar || 0,
                permanentVerliesPerJaar:
                  calculation?.result.permanentVerliesPerJaar || 0,
                years: years,
                currentAge: calculation?.profile.age || 67,
              }
            : activeModal === "tax"
              ? {
                  // Basic values
                  lumpsumAmount: results.lumpsumAmount,
                  taxImpact: results.taxImpact,
                  netLumpsum: results.netLumpsum,
                  chartData: results.taxChartData,
                  // Calculation details
                  percentage: lumpsum,
                  brutoInkomen: calculation?.result.brutoInkomen || 0,
                  baselineBrutoInkomen: calculation?.baseline.brutoInkomen || 0,
                  belastingBox1: calculation?.result.belastingBox1 || 0,
                  baselineBelastingBox1:
                    calculation?.baseline.belastingBox1 || 0,
                  totaleHeffingskortingen:
                    calculation?.result.totaleHeffingskortingen || 0,
                  baselineHeffingskortingen:
                    calculation?.baseline.totaleHeffingskortingen || 0,
                  belastingNaHeffingskortingen:
                    calculation?.result.belastingNaHeffingskortingen || 0,
                  baselineBelasting:
                    calculation?.baseline.belastingNaHeffingskortingen || 0,
                }
              : {
                  // Benefits data
                  lumpsumAmount: results.lumpsumAmount,
                  brutoInkomen: calculation?.result.brutoInkomen || 0,
                  baselineBrutoInkomen: calculation?.baseline.brutoInkomen || 0,
                  zorgtoeslag: calculation?.result.zorgtoeslag || 0,
                  baselineZorgtoeslag: calculation?.baseline.zorgtoeslag || 0,
                  huurtoeslag: calculation?.result.huurtoeslag || 0,
                  baselineHuurtoeslag: calculation?.baseline.huurtoeslag || 0,
                  percentage: lumpsum,
                }
        }
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-blue-500" />
            <span className="text-white font-bold text-lg">
              Mijn Pensioen Dashboard
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl">
            Dit dashboard helpt u bij het maken van een weloverwogen beslissing
            over uw pensioen. Het is een initiatief van de Nederlandse
            pensioenuitvoerders in samenwerking met UWV.
          </p>
        </div>
      </footer>
    </div>
  );
}
