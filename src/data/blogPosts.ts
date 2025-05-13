
import { BlogPost } from '@/components/BlogCard';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and TypeScript",
    excerpt: "Learn how to create maintainable and scalable web applications using React and TypeScript with best practices and design patterns.",
    date: "May 10, 2023",
    readTime: "8 min",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "building-scalable-web-applications"
  },
  {
    id: 2,
    title: "Microservices vs. Monoliths: When to Use Each Architecture",
    excerpt: "A detailed comparison of microservice and monolithic architectures, with practical guidance on when to choose one over the other.",
    date: "April 22, 2023",
    readTime: "11 min",
    tags: ["Architecture", "Microservices", "System Design"],
    slug: "microservices-vs-monoliths"
  },
  {
    id: 3,
    title: "Optimizing React Performance with Memoization and Virtual DOM",
    excerpt: "Deep dive into React's performance optimization techniques including memoization, useCallback, and understanding the Virtual DOM.",
    date: "March 15, 2023",
    readTime: "9 min",
    tags: ["React", "Performance", "JavaScript"],
    slug: "optimizing-react-performance"
  },
  {
    id: 4,
    title: "Getting Started with AWS Lambda and Serverless Architecture",
    excerpt: "A beginner's guide to building serverless applications using AWS Lambda functions and related services.",
    date: "February 28, 2023",
    readTime: "7 min",
    tags: ["AWS", "Serverless", "Cloud"],
    slug: "getting-started-with-aws-lambda"
  },
  {
    id: 5,
    title: "Implementing CI/CD Pipelines with GitHub Actions",
    excerpt: "Learn how to set up continuous integration and deployment workflows using GitHub Actions for your projects.",
    date: "January 17, 2023",
    readTime: "6 min",
    tags: ["DevOps", "CI/CD", "GitHub"],
    slug: "implementing-cicd-github-actions"
  },
  {
    id: 6,
    title: "Creating Custom React Hooks for Reusable Logic",
    excerpt: "How to extract and share stateful logic between components by creating your own custom React hooks.",
    date: "December 10, 2022",
    readTime: "5 min",
    tags: ["React", "Hooks", "JavaScript"],
    slug: "creating-custom-react-hooks"
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
