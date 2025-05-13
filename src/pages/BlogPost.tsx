
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBlogPost } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg dark:prose-invert prose-blue max-w-none">
            <div className="mb-8">
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {post.title}
              </h1>
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
            </div>
            
            {/* Sample content for the blog post */}
            <p>
              As software engineers, we constantly face challenges when building large-scale applications. 
              This article explores best practices and patterns that can help maintain code quality and scalability.
            </p>
            
            <h2>Understanding the Problem</h2>
            <p>
              When applications grow beyond simple demos, they often become difficult to maintain. 
              Features like state management, routing, data fetching, and performance optimization become critical.
            </p>
            
            <h2>Key Strategies</h2>
            <p>
              Let's examine some approaches that have proven effective in real-world applications:
            </p>
            
            <ol>
              <li>
                <strong>Component Architecture</strong>: Organize components with clear responsibilities following atomic design principles.
              </li>
              <li>
                <strong>State Management</strong>: Choose appropriate state management based on application needs - local state, context, or external libraries.
              </li>
              <li>
                <strong>Code Splitting</strong>: Implement code splitting to reduce bundle size and improve initial load time.
              </li>
              <li>
                <strong>TypeScript Integration</strong>: Leverage TypeScript for improved code quality, better IDE support, and fewer runtime errors.
              </li>
            </ol>
            
            <h2>Implementation Example</h2>
            
            <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-auto">
              <code>{`// Example of a well-structured React component with TypeScript
import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserProfileProps {
  userId: string;
  onUserUpdate?: (user: User) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  userId, 
  onUserUpdate 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
        if (onUserUpdate) {
          onUserUpdate(userData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId, onUserUpdate]);
  
  if (loading) return <div>Loading user data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};`}</code>
            </pre>
            
            <h2>Conclusion</h2>
            <p>
              By adopting these practices, you can build applications that are easier to maintain, 
              perform better, and provide a better developer experience. Remember that the best architecture 
              is one that fits your project's specific needs - don't blindly follow patterns without understanding them.
            </p>
            
            <p>
              In future articles, we'll explore more advanced topics like state management libraries, 
              performance optimization techniques, and testing strategies for React applications.
            </p>
          </article>
          
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-4">Discussion</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comments are coming soon. Follow me on Twitter or GitHub to join the discussion.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
