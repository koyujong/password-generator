import { blogPosts } from "@/lib/blogData";
import Footer from "@/components/Footer";
import BlogListClient from "@/components/BlogListClient";

export const metadata = {
    title: "Security & Password Blog | Strong Password Generator",
    description: "Read the latest tips on cybersecurity, password management, and digital safety. Experts insights on how to stay safe online in 2026.",
};

export default function BlogListPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <BlogListClient allPosts={blogPosts} />
            <Footer lang="en" />
        </div>
    );
}
