import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
          <h3 className="text-xl font-bold hover:text-blue-600 transition-colors">{post.title}</h3>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-slate-700 text-blue-800 dark:text-blue-300 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;