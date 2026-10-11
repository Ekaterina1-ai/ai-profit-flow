import { useEffect, useState } from 'react';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  url: string;
};

type RawPost = {
  slug?: string;
  title?: string;
  description?: string;
  date?: string;
};

function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  return `${m[3]}.${m[2]}.${m[1]}`;
}

function normalize(items: RawPost[]): BlogPost[] {
  return items
    .filter((item): item is Required<Pick<RawPost, 'slug' | 'title'>> & RawPost =>
      Boolean(item?.slug && item?.title),
    )
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      description: item.description || '',
      date: item.date ? formatDate(item.date) : '',
      url: `/blog/${item.slug}.html`,
    }));
}

/** Loads articles published by SEO Agent into /blog/posts.json. */
export function useBlogPosts(): BlogPost[] {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch('/blog/posts.json', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (cancelled || !Array.isArray(data)) return;
        setPosts(normalize(data));
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return posts;
}
