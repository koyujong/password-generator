"use client";

import { useState } from "react";
import { Language } from "@/lib/translations";
import { extraTranslations } from "@/lib/extraTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    const [lang, setLang] = useState<Language>("en");
    const t = extraTranslations[lang];
    const mainTitle = lang === 'en' ? 'Strong Password Generator' : lang === 'ko' ? '강력한 비밀번호 생성기' : 'Generador de Contraseñas Fuertes';

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header lang={lang} setLang={setLang} title={mainTitle} />

            <main className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-10 tracking-tight">{t.about.title}</h1>

                <div className="space-y-8">
                    {t.about.sections.map((section, idx) => (
                        <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 mb-3">{section.heading}</h2>
                            <p className="text-slate-600 leading-relaxed">{section.content}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer lang={lang} />
        </div>
    );
}
