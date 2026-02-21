import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Security & Password Blog | Strong Password Generator",
    description: "Read the latest tips on cybersecurity, password management, and digital safety. Experts insights on how to stay safe online in 2026.",
};

export default function BlogListPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
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

            <main className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Security & Password Blog
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Expert advice on digital security, crypto safety, and the best practices for 2026.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
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
                                Read More
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer lang="en" />
        </div>
    );
}
