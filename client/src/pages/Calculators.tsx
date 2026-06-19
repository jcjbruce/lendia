import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { Mail, ArrowRight, Calculator, DollarSign, Home, CreditCard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function fmt(n: number) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);
}
function fmtDec(n: number) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

/* ─── Mortgage Payment Calculator ─── */
function MortgageCalc() {
  const [price, setPrice] = useState(600000);
  const [down, setDown] = useState(120000);
  const [rate, setRate] = useState(4.34);
  const [amort, setAmort] = useState(25);
  const [freq, setFreq] = useState<"monthly" | "biweekly" | "weekly">("monthly");

  const result = useMemo(() => {
    const principal = price - down;
    const downPct = (down / price) * 100;
    let cmhcPremium = 0;
    if (downPct < 20) {
      if (downPct >= 15) cmhcPremium = principal * 0.028;
      else if (downPct >= 10) cmhcPremium = principal * 0.031;
      else cmhcPremium = principal * 0.04;
    }
    const totalMortgage = principal + cmhcPremium;
    const periodsPerYear = freq === "monthly" ? 12 : freq === "biweekly" ? 26 : 52;
    const semiAnnualRate = rate / 100 / 2;
    const effectiveRate = Math.pow(1 + semiAnnualRate, 2 / periodsPerYear) - 1;
    const n = amort * periodsPerYear;
    const payment = totalMortgage * (effectiveRate * Math.pow(1 + effectiveRate, n)) / (Math.pow(1 + effectiveRate, n) - 1);
    const totalPaid = payment * n;
    const totalInterest = totalPaid - totalMortgage;
    return { principal, cmhcPremium, totalMortgage, payment, totalInterest, totalPaid, periodsPerYear };
  }, [price, down, rate, amort, freq]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <InputSlider label="Home Price" value={price} onChange={setPrice} min={100000} max={3000000} step={10000} prefix="$" />
        <InputSlider label="Down Payment" value={down} onChange={setDown} min={0} max={price} step={5000} prefix="$" suffix={` (${((down/price)*100).toFixed(1)}%)`} />
        <InputSlider label="Interest Rate" value={rate} onChange={setRate} min={1} max={12} step={0.01} suffix="%" isDecimal />
        <InputSlider label="Amortization" value={amort} onChange={setAmort} min={5} max={30} step={1} suffix=" years" />
        <div>
          <label className="text-sm font-medium text-[#0A1F44] mb-2 block">Payment Frequency</label>
          <div className="flex gap-2">
            {(["monthly", "biweekly", "weekly"] as const).map((f) => (
              <button key={f} onClick={() => setFreq(f)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${freq === f ? "bg-[#0A1F44] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#0A1F44] rounded-2xl p-8 text-white">
        <h3 className="text-lg font-semibold text-white/80 mb-1">Your {freq} Payment</h3>
        <div className="text-4xl font-bold text-[#C9A84C] mb-6">{fmtDec(result.payment)}</div>
        <div className="space-y-3 text-sm">
          <ResultRow label="Mortgage Amount" value={fmt(result.principal)} />
          {result.cmhcPremium > 0 && <ResultRow label="CMHC Insurance" value={fmt(result.cmhcPremium)} highlight />}
          <ResultRow label="Total Mortgage" value={fmt(result.totalMortgage)} />
          <div className="border-t border-white/10 pt-3 mt-3" />
          <ResultRow label="Total Interest" value={fmt(result.totalInterest)} />
          <ResultRow label="Total Cost" value={fmt(result.totalPaid)} />
        </div>
        <div className="mt-6 pt-4 border-t border-white/10">
          <Link href="/contact" className="btn-gold w-full justify-center text-sm">
            Get a Personalized Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Affordability Calculator ─── */
function AffordabilityCalc() {
  const [income, setIncome] = useState(100000);
  const [downPayment, setDownPayment] = useState(100000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [rate, setRate] = useState(4.34);
  const [propTax, setPropTax] = useState(4000);
  const [heating, setHeating] = useState(150);

  const result = useMemo(() => {
    const monthlyIncome = income / 12;
    const gdsLimit = monthlyIncome * 0.39;
    const tdsLimit = monthlyIncome * 0.44;
    const monthlyPropTax = propTax / 12;
    const availableForMortgageGDS = gdsLimit - monthlyPropTax - heating;
    const availableForMortgageTDS = tdsLimit - monthlyPropTax - heating - monthlyDebts;
    const availableForMortgage = Math.min(availableForMortgageGDS, availableForMortgageTDS);
    const semiAnnualRate = (rate + 2) / 100 / 2;
    const effectiveMonthlyRate = Math.pow(1 + semiAnnualRate, 2 / 12) - 1;
    const n = 25 * 12;
    const maxMortgage = availableForMortgage > 0
      ? availableForMortgage * (Math.pow(1 + effectiveMonthlyRate, n) - 1) / (effectiveMonthlyRate * Math.pow(1 + effectiveMonthlyRate, n))
      : 0;
    const maxPurchase = maxMortgage + downPayment;
    return { maxMortgage: Math.max(0, maxMortgage), maxPurchase: Math.max(0, maxPurchase), monthlyPayment: Math.max(0, availableForMortgage) };
  }, [income, downPayment, monthlyDebts, rate, propTax, heating]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <InputSlider label="Annual Household Income" value={income} onChange={setIncome} min={30000} max={500000} step={5000} prefix="$" />
        <InputSlider label="Down Payment" value={downPayment} onChange={setDownPayment} min={0} max={2000000} step={5000} prefix="$" />
        <InputSlider label="Monthly Debt Payments" value={monthlyDebts} onChange={setMonthlyDebts} min={0} max={10000} step={50} prefix="$" />
        <InputSlider label="Interest Rate" value={rate} onChange={setRate} min={1} max={12} step={0.01} suffix="%" isDecimal />
        <InputSlider label="Annual Property Tax" value={propTax} onChange={setPropTax} min={0} max={20000} step={100} prefix="$" />
        <InputSlider label="Monthly Heating" value={heating} onChange={setHeating} min={0} max={500} step={10} prefix="$" />
      </div>
      <div className="bg-[#0A1F44] rounded-2xl p-8 text-white">
        <h3 className="text-lg font-semibold text-white/80 mb-1">Maximum Purchase Price</h3>
        <div className="text-4xl font-bold text-[#C9A84C] mb-6">{fmt(result.maxPurchase)}</div>
        <div className="space-y-3 text-sm">
          <ResultRow label="Maximum Mortgage" value={fmt(result.maxMortgage)} />
          <ResultRow label="Down Payment" value={fmt(downPayment)} />
          <ResultRow label="Est. Monthly Payment" value={fmtDec(result.monthlyPayment)} />
        </div>
        <p className="text-white/40 text-xs mt-4">*Based on stress test rate ({rate}% + 2%) and 25-year amortization. GDS 39%, TDS 44%.</p>
        <div className="mt-6 pt-4 border-t border-white/10">
          <Link href="/contact" className="btn-gold w-full justify-center text-sm">
            Get Pre-Approved <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── CMHC Insurance Calculator ─── */
function CmhcCalc() {
  const [price, setPrice] = useState(600000);
  const [down, setDown] = useState(50000);

  const result = useMemo(() => {
    const downPct = (down / price) * 100;
    if (downPct >= 20) return { premium: 0, premiumPct: 0, totalMortgage: price - down, required: false };
    let premiumPct = 0;
    if (downPct >= 15) premiumPct = 2.8;
    else if (downPct >= 10) premiumPct = 3.1;
    else premiumPct = 4.0;
    const mortgage = price - down;
    const premium = mortgage * (premiumPct / 100);
    return { premium, premiumPct, totalMortgage: mortgage + premium, required: true };
  }, [price, down]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <InputSlider label="Home Price" value={price} onChange={setPrice} min={100000} max={1500000} step={10000} prefix="$" />
        <InputSlider label="Down Payment" value={down} onChange={setDown} min={0} max={price} step={5000} prefix="$" suffix={` (${((down/price)*100).toFixed(1)}%)`} />
      </div>
      <div className="bg-[#0A1F44] rounded-2xl p-8 text-white">
        <h3 className="text-lg font-semibold text-white/80 mb-1">CMHC Insurance Premium</h3>
        <div className="text-4xl font-bold text-[#C9A84C] mb-6">
          {result.required ? fmt(result.premium) : "Not Required"}
        </div>
        <div className="space-y-3 text-sm">
          <ResultRow label="Home Price" value={fmt(price)} />
          <ResultRow label="Down Payment" value={`${fmt(down)} (${((down/price)*100).toFixed(1)}%)`} />
          <ResultRow label="Mortgage Amount" value={fmt(price - down)} />
          {result.required && (
            <>
              <ResultRow label="Premium Rate" value={`${result.premiumPct}%`} highlight />
              <ResultRow label="Insurance Premium" value={fmt(result.premium)} highlight />
              <div className="border-t border-white/10 pt-3 mt-3" />
              <ResultRow label="Total Mortgage" value={fmt(result.totalMortgage)} />
            </>
          )}
        </div>
        <p className="text-white/40 text-xs mt-4">CMHC insurance is required when down payment is less than 20%. Premium is added to your mortgage.</p>
      </div>
    </div>
  );
}

/* ─── Land Transfer Tax Calculator ─── */
function LttCalc() {
  const [price, setPrice] = useState(600000);
  const [isToronto, setIsToronto] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  const result = useMemo(() => {
    // Ontario LTT
    let ontarioLtt = 0;
    const brackets = [
      { limit: 55000, rate: 0.005 },
      { limit: 250000, rate: 0.01 },
      { limit: 400000, rate: 0.015 },
      { limit: 2000000, rate: 0.02 },
      { limit: Infinity, rate: 0.025 },
    ];
    let remaining = price;
    let prev = 0;
    for (const b of brackets) {
      const taxable = Math.min(remaining, b.limit - prev);
      if (taxable <= 0) break;
      ontarioLtt += taxable * b.rate;
      remaining -= taxable;
      prev = b.limit;
    }

    // Toronto Municipal LTT
    let torontoLtt = 0;
    if (isToronto) {
      const tBrackets = [
        { limit: 55000, rate: 0.005 },
        { limit: 400000, rate: 0.01 },
        { limit: 2000000, rate: 0.02 },
        { limit: Infinity, rate: 0.025 },
      ];
      remaining = price;
      prev = 0;
      for (const b of tBrackets) {
        const taxable = Math.min(remaining, b.limit - prev);
        if (taxable <= 0) break;
        torontoLtt += taxable * b.rate;
        remaining -= taxable;
        prev = b.limit;
      }
    }

    // First-time buyer rebates
    let ontarioRebate = 0;
    let torontoRebate = 0;
    if (isFirstTime) {
      ontarioRebate = Math.min(ontarioLtt, 4000);
      if (isToronto) torontoRebate = Math.min(torontoLtt, 4475);
    }

    const totalLtt = ontarioLtt + torontoLtt - ontarioRebate - torontoRebate;
    return { ontarioLtt, torontoLtt, ontarioRebate, torontoRebate, totalLtt };
  }, [price, isToronto, isFirstTime]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <InputSlider label="Purchase Price" value={price} onChange={setPrice} min={100000} max={3000000} step={10000} prefix="$" />
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={isToronto} onChange={(e) => setIsToronto(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-[#C9A84C] focus:ring-[#C9A84C]" />
            <span className="text-sm font-medium text-[#0A1F44]">Property is in the City of Toronto</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={isFirstTime} onChange={(e) => setIsFirstTime(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-[#C9A84C] focus:ring-[#C9A84C]" />
            <span className="text-sm font-medium text-[#0A1F44]">First-time home buyer</span>
          </label>
        </div>
      </div>
      <div className="bg-[#0A1F44] rounded-2xl p-8 text-white">
        <h3 className="text-lg font-semibold text-white/80 mb-1">Total Land Transfer Tax</h3>
        <div className="text-4xl font-bold text-[#C9A84C] mb-6">{fmt(result.totalLtt)}</div>
        <div className="space-y-3 text-sm">
          <ResultRow label="Ontario LTT" value={fmt(result.ontarioLtt)} />
          {isToronto && <ResultRow label="Toronto Municipal LTT" value={fmt(result.torontoLtt)} />}
          {isFirstTime && result.ontarioRebate > 0 && <ResultRow label="Ontario First-Time Rebate" value={`-${fmt(result.ontarioRebate)}`} highlight />}
          {isFirstTime && isToronto && result.torontoRebate > 0 && <ResultRow label="Toronto First-Time Rebate" value={`-${fmt(result.torontoRebate)}`} highlight />}
          <div className="border-t border-white/10 pt-3 mt-3" />
          <ResultRow label="Total Due on Closing" value={fmt(result.totalLtt)} />
        </div>
      </div>
    </div>
  );
}

/* ─── Shared components ─── */
function InputSlider({ label, value, onChange, min, max, step, prefix, suffix, isDecimal }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; prefix?: string; suffix?: string; isDecimal?: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-[#0A1F44]">{label}</label>
        <span className="text-sm font-semibold text-[#C9A84C]">
          {prefix}{isDecimal ? value.toFixed(2) : value.toLocaleString()}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
      />
    </div>
  );
}

function ResultRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-white/60">{label}</span>
      <span className={highlight ? "text-[#C9A84C] font-semibold" : "text-white font-medium"}>{value}</span>
    </div>
  );
}

export default function Calculators() {
  return (
    <Layout>
      <SEOHead title="Mortgage Calculators | Lendia" description="Free mortgage calculators: payment calculator, affordability, CMHC insurance, and Ontario land transfer tax. Plan your home purchase today." />
      <PageHero
        title="Mortgage Calculators"
        subtitle="Use our free calculators to estimate payments, affordability, insurance costs, and land transfer taxes."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Calculators" }]}
        image={siteConfig.images.calculatorHero}
        compact
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="payment" className="space-y-8">
            <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
              {[
                { value: "payment", icon: Calculator, label: "Payment" },
                { value: "affordability", icon: Home, label: "Affordability" },
                { value: "cmhc", icon: DollarSign, label: "CMHC Insurance" },
                { value: "ltt", icon: CreditCard, label: "Land Transfer Tax" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 text-sm font-medium data-[state=active]:bg-[#0A1F44] data-[state=active]:text-white data-[state=active]:border-[#0A1F44] hover:bg-gray-50 transition-colors"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="payment"><MortgageCalc /></TabsContent>
            <TabsContent value="affordability"><AffordabilityCalc /></TabsContent>
            <TabsContent value="cmhc"><CmhcCalc /></TabsContent>
            <TabsContent value="ltt"><LttCalc /></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Need a More Accurate Estimate?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">These calculators provide estimates. Contact us for a personalized assessment based on your exact situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Get a Personalized Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" /> {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
