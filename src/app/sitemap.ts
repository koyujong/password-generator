import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pw.4kdrivewalk.com';

    const blogEntries = blogPosts.map((post) => {
        const translations = blogPosts.filter(
            (p) => p.translationGroup === post.translationGroup
        );

        const languages: Record<string, string> = {};
        translations.forEach((t) => {
            languages[t.language] = `${baseUrl}/blog/${t.slug}`;
        });
        const enPost = translations.find((t) => t.language === "en");
        if (enPost) {
            languages["x-default"] = `${baseUrl}/blog/${enPost.slug}`;
        }

        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            alternates: {
                languages,
            },
        };
    });

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogEntries,
    ];
}
