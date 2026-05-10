import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import logo from '../images/logo.svg';

export const metadata = {
  title: 'Blog | Blue Lotus Media',
  description: 'Latest insights on AI, Tech, Web Development, and Digital Trends.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-[#F0F8FF] text-gray-900 pb-20">
      {/* Blog Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="Blue Lotus Media Logo"
              width={250}
              height={40}
              className="brightness-0 cursor-pointer"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-gray-600 hover:text-[#CC6600] font-medium transition-colors">About</Link>
            <Link href="/#services" className="text-gray-600 hover:text-[#CC6600] font-medium transition-colors">Services</Link>
            <Link href="/#portfolio" className="text-gray-600 hover:text-[#CC6600] font-medium transition-colors">Portfolio</Link>
            <Link href="/blog" className="text-[#CC6600] font-bold">Blog</Link>
            <Link href="/#contact" className="bg-[#CC6600] text-white px-6 py-2 rounded-full font-bold hover:bg-[#A34F00] transition-all">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-32">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
            Digital Insights
          </h1>
          <div className="w-24 h-1 bg-[#CC6600] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exploring the frontiers of AI, web technology, and creative digital trends.
            Curated by our advanced AI writing system.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-3xl border border-gray-200">
            <p className="text-gray-400 text-xl italic">The AI is currently drafting our first insights. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-[#CC6600]/30 transition-all duration-500 hover:shadow-xl flex flex-col"
              >
                {post.image && (
                  <div className="h-48 w-full overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime || '5 min read'}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-[#CC6600] transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-[#CC6600]/5 text-[#CC6600] text-[10px] uppercase tracking-wider font-bold rounded-full border border-[#CC6600]/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-sm font-bold text-[#CC6600] group/link"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
