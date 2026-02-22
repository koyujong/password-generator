import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import AdBanner from "@/components/AdBanner";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Password Blog`,
        description: post.description,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    // Structured Data (JSON-LD) for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "Strong Password Generator"
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                            <span className="font-bold">P</span>
                        </div>
                        <span className="font-bold text-lg hidden sm:block tracking-tight text-slate-900">Password Generator</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/blog" className="text-sm font-bold text-indigo-600 transition-colors">
                            Blog
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-bold text-indigo-600 mb-10 hover:translate-x-1 transition-transform"
                >
                    <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Back to Blog
                </Link>

                {/* AdSense Top Banner */}
                <div className="mb-10">
                    <AdBanner slot="6780266694" />
                </div>

                <article className="bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-8">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            {post.description}
                        </p>
                    </header>

                    <div
                        className="prose prose-slate prose-indigo max-w-none prose-h2:text-2xl prose-h2:font-black prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-10 border-t border-slate-100">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Article Keywords</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.keywords.map((kw) => (
                                <span key={kw} className="px-3 py-1.5 bg-slate-50 text-slate-500 rounded-xl text-xs font-semibold">
                                    #{kw}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                {/* AdSense Middle Banner */}
                <div className="mt-16">
                    <AdBanner slot="4221082772" />
                </div>

                <div className="mt-12 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-10 text-white shadow-2xl overflow-hidden relative group">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4 text-white">Need a secure password right now?</h2>
                        <p className="text-indigo-100 mb-8 max-w-md">Our tool generates high-entropy, random passwords in your browser without ever sending them to a server.</p>
                        <Link
                            href="/"
                            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                        >
                            Generate Password
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
            </main>

            {/* AdSense Lower Banner */}
            <div className="max-w-3xl mx-auto px-4 mb-16">
                <AdBanner slot="7907422200" />
            </div>

            <Footer lang="en" />
        </div>
    );
}
