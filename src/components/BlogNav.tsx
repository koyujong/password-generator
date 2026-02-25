"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Lang = "en" | "ko" | "es" | "ja";

const langLabels: Record<Lang, string> = {
    en: "🇺🇸 English",
    ko: "🇰🇷 한국어",
    es: "🇪🇸 Español",
    ja: "🇯🇵 日本語",
};

interface BlogNavProps {
    activePage?: "home" | "blog";
    translations?: Record<string, string>;
    currentLang?: string;
    onLangChange?: (lang: Lang) => void;
}

export default function BlogNav({ activePage = "blog", translations, currentLang, onLangChange }: BlogNavProps) {
    const [lang, setLang] = useState<Lang>((currentLang as Lang) || "en");
    const router = useRouter();

    const handleLangChange = (newLang: Lang) => {
        setLang(newLang);

        if (onLangChange) {
            onLangChange(newLang);
            return;
        }

        if (translations && translations[newLang]) {
            router.push(`/blog/${translations[newLang]}`);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <span className="font-bold">P</span>
                    </div>
                    <span className="font-bold text-lg hidden sm:block tracking-tight text-slate-900">Strong Password Generator</span>
                </Link>
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className={`text-sm font-semibold transition-colors ${activePage === "home" ? "text-indigo-600 font-bold" : "text-slate-600 hover:text-indigo-600"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/blog"
                        className={`text-sm font-semibold transition-colors ${activePage === "blog" ? "text-indigo-600 font-bold" : "text-slate-600 hover:text-indigo-600"}`}
                    >
                        Blog
                    </Link>

                    {/* Language Selector */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-indigo-400 hover:bg-white transition-all text-sm font-medium">
                            <span>{langLabels[lang]}</span>
                            <ChevronDownIcon className="w-4 h-4 text-slate-500" />
                        </button>
                        <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden divide-y divide-slate-100">
                            {(Object.keys(langLabels) as Lang[]).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => handleLangChange(l)}
                                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${l === lang ? "bg-indigo-50 text-indigo-600 font-bold" : "hover:bg-indigo-50 hover:text-indigo-600"}`}
                                >
                                    {langLabels[l]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
