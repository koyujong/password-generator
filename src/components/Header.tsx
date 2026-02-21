"use client";

import Link from "next/link";
import { Language } from "@/lib/translations";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
    lang: Language;
    setLang: (lang: Language) => void;
    title: string;
}

export default function Header({ lang, setLang, title }: HeaderProps) {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <span className="font-bold">P</span>
                    </div>
                    <span className="font-bold text-lg hidden sm:block tracking-tight">{title}</span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/blog" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                        Blog
                    </Link>

                    {/* Language Selector */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-indigo-400 hover:bg-white transition-all text-sm font-medium">
                            <span>{lang === 'en' ? '🇺🇸 English' : lang === 'ko' ? '🇰🇷 한국어' : '🇪🇸 Español'}</span>
                            <ChevronDownIcon className="w-4 h-4 text-slate-500" />
                        </button>
                        <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden divide-y divide-slate-100">
                            <button onClick={() => setLang('en')} className="w-full px-4 py-2.5 text-left text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">English</button>
                            <button onClick={() => setLang('ko')} className="w-full px-4 py-2.5 text-left text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">한국어</button>
                            <button onClick={() => setLang('es')} className="w-full px-4 py-2.5 text-left text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Español</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
