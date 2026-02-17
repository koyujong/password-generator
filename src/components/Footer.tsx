"use client";

import Link from "next/link";
import { Language } from "@/lib/translations";
import { extraTranslations } from "@/lib/extraTranslations";

interface FooterProps {
    lang: Language;
}

export default function Footer({ lang }: FooterProps) {
    const t = extraTranslations[lang];
    const mainTitle = lang === 'en' ? 'Strong Password Generator' : lang === 'ko' ? '강력한 비밀번호 생성기' : 'Generador de Contraseñas Fuertes';

    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* 상단: 로고 + 네비게이션 */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* 브랜드 */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                                <span className="font-bold">P</span>
                            </div>
                            <span className="font-bold text-lg tracking-tight text-slate-900">{mainTitle}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                            {t.footer.tagline}
                        </p>
                    </div>

                    {/* 법적 링크 */}
                    <div>
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                                    {t.footer.privacy}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                                    {t.footer.terms}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                                    {t.footer.about}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 연락처 */}
                    <div>
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-4">{t.footer.contact}</h3>
                        <a href="mailto:support@strongpassgen.com" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                            support@strongpassgen.com
                        </a>
                    </div>
                </div>

                {/* 하단: 저작권 */}
                <div className="border-t border-slate-100 pt-6 text-center">
                    <p className="text-sm text-slate-400">
                        &copy; {new Date().getFullYear()} {mainTitle}. {t.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
