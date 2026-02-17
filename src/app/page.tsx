"use client";

import { useState, useEffect, useCallback } from "react";
import { translations, Language } from "@/lib/translations";
import { extraTranslations } from "@/lib/extraTranslations";
import { generatePassword, calculateStrength, getStrengthColor } from "@/lib/passwordUtils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import {
  ClipboardDocumentIcon,
  ArrowPathIcon,
  CheckIcon
} from "@heroicons/react/24/outline";

export default function PasswordGeneratorPage() {
  // State for language
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  // State for password generation
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState(0);

  // Handle generation
  const handleGenerate = useCallback(() => {
    const newPass = generatePassword(length, options);
    setPassword(newPass);
    setStrength(calculateStrength(newPass));
    setCopied(false);
  }, [length, options]);

  // Initial generation
  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  // Dynamic SEO
  useEffect(() => {
    document.title = t.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t.seoDesc);
    }
  }, [t.seoTitle, t.seoDesc]);

  // Handle Copy
  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 transition-colors duration-300">
      <Header lang={lang} setLang={setLang} title={t.title} />

      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
        {/* AdSense Upper Banner - 패스워드제너레이터(상단) */}
        <div className="mb-10">
          <AdBanner slot="6780266694" />
        </div>

        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            {t.title}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Generator Box */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 p-6 sm:p-10 mb-12 transition-transform hover:scale-[1.01] duration-500 ring-1 ring-slate-100">

          {/* Output Area */}
          <div className="relative mb-10 group">
            <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 sm:p-7 pr-16 text-2xl sm:text-3xl font-mono text-indigo-700 break-all min-h-[5rem] flex items-center shadow-inner group-hover:border-indigo-200 transition-colors">
              {password}
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button
                onClick={handleGenerate}
                className="p-2 sm:p-3 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all shadow-sm active:scale-95"
                title={t.generate}
              >
                <ArrowPathIcon className="w-6 h-6" />
              </button>
              <button
                onClick={handleCopy}
                className={`p-2 sm:p-3 rounded-xl transition-all shadow-sm active:scale-95 ${copied ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-indigo-600 hover:bg-white'}`}
                title={t.copy}
              >
                {copied ? <CheckIcon className="w-6 h-6" /> : <ClipboardDocumentIcon className="w-6 h-6" />}
              </button>
            </div>
            {copied && (
              <div className="absolute -top-10 right-4 bg-green-500 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg animate-bounce">
                {t.copied}
              </div>
            )}
          </div>

          {/* Strength Meter */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{t.strength}</span>
              <span className={`text-sm font-bold uppercase tracking-tight ${getStrengthColor(strength).replace('bg-', 'text-')}`}>
                {t.strengthLabels[strength]}
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2 h-3 sm:h-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-500 ${i <= strength ? getStrengthColor(strength) : 'bg-slate-100'}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Settings Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Slider */}
            <div>
              <div className="flex justify-between items-center mb-5">
                <label className="text-sm font-bold text-slate-700">{t.length}</label>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-mono font-bold text-lg border border-indigo-100">{length}</span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>8</span>
                <span>32</span>
                <span>64</span>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Checkbox
                label={t.includeUppercase}
                checked={options.uppercase}
                onChange={(v) => setOptions({ ...options, uppercase: v })}
              />
              <Checkbox
                label={t.includeLowercase}
                checked={options.lowercase}
                onChange={(v) => setOptions({ ...options, lowercase: v })}
              />
              <Checkbox
                label={t.includeNumbers}
                checked={options.numbers}
                onChange={(v) => setOptions({ ...options, numbers: v })}
              />
              <Checkbox
                label={t.includeSymbols}
                checked={options.symbols}
                onChange={(v) => setOptions({ ...options, symbols: v })}
              />
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full mt-10 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-xl rounded-2xl shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all hover:shadow-[0_15px_40px_rgba(79,70,229,0.4)] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <ArrowPathIcon className="w-6 h-6" />
            {t.generate}
          </button>
        </div>

        {/* AdSense Lower Banner - 패스워드제너레이터(하단) */}
        <div className="mb-16">
          <AdBanner slot="7907422200" />
        </div>

        {/* Password Security Statistics */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">{extraTranslations[lang].stats.title}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{extraTranslations[lang].stats.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {extraTranslations[lang].stats.items.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-md hover:border-indigo-100 transition-all group">
                <div className="text-3xl sm:text-4xl font-black text-indigo-600 mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                <p className="text-xs sm:text-sm text-slate-500 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="mb-16 prose prose-slate max-w-none">
          <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
              {t.whyTitle}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-0">
              {t.whyContent}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors group">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">Q: {faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all group">
      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${checked ? 'bg-indigo-600 border-indigo-600 shadow-sm' : 'border-slate-300 bg-white group-hover:border-indigo-300'}`}>
        {checked && <CheckIcon className="w-4 h-4 text-white" />}
      </div>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={`text-sm font-semibold transition-colors ${checked ? 'text-slate-900' : 'text-slate-500'}`}>{label}</span>
    </label>
  );
}
