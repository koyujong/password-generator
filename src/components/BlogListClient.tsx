"use client";

import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/lib/blogData";
import BlogNav from "@/components/BlogNav";
import AdBanner from "@/components/AdBanner";

type Lang = "en" | "ko" | "es" | "ja";

const readMoreLabels: Record<Lang, string> = {
    en: "Read More",
    ko: "더 읽기",
    es: "Leer Más",
    ja: "続きを読む",
};

const titleLabels: Record<Lang, string> = {
    en: "Security & Password Blog",
    ko: "보안 & 비밀번호 블로그",
    es: "Blog de Seguridad y Contraseñas",
    ja: "セキュリティ＆パスワードブログ",
};

const subtitleLabels: Record<Lang, string> = {
    en: "Expert advice on digital security, crypto safety, and the best practices for 2026.",
    ko: "디지털 보안, 암호화폐 안전, 그리고 2026년 최신 모범 사례에 대한 전문가 조언.",
    es: "Consejos expertos sobre seguridad digital, seguridad cripto y las mejores prácticas para 2026.",
    ja: "デジタルセキュリティ、暗号通貨の安全性、そして2026年のベストプラクティスに関する専門家のアドバイス。",
};

export default function BlogListClient({ allPosts }: { allPosts: BlogPost[] }) {
    const [lang, setLang] = useState<Lang>("en");

    const filteredPosts = allPosts.filter((post) => post.language === lang);

    return (
        <>
            <BlogNav activePage="blog" currentLang={lang} onLangChange={(newLang) => setLang(newLang)} />

            <main className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
                <div className="mb-10">
                    <AdBanner slot="6780266694" />
                </div>

                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        {titleLabels[lang]}
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        {subtitleLabels[lang]}
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <div key={post.slug} className="contents">
                            {index === 3 && (
                                <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-4">
                                    <AdBanner slot="7907422200" />
                                </div>
                            )}
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
                            >
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="ml-3 text-xs text-slate-400 font-medium">{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="mt-6 flex items-center text-indigo-600 font-bold text-sm">
                                    {readMoreLabels[lang]}
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 mb-8">
                    <AdBanner slot="4221082772" />
                </div>
            </main>
        </>
    );
}
