import ReactMarkdown from 'react-markdown';
import { getPostData, getAllPostSlugs } from '@/lib/blog';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ShareButtons from '@/components/ShareButtons';
import SubscribeForm from '@/components/SubscribeForm';
import logo from '../../images/logo.svg';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    const baseUrl = 'https://bluelotusmedia.com';
    const url = `${baseUrl}/blog/${slug}`;
    
    return {
      title: `${post.title} | Blue Lotus Media`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url,
        type: 'article',
        publishedTime: post.date,
        authors: ['Blue Lotus AI'],
        images: post.image ? [post.image] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: post.image ? [post.image] : [],
      },
      alternates: {
        canonical: url,
      },
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostData(slug);
  } catch (e) {
    notFound();
  }

  const postUrl = `https://bluelotusmedia.com/blog/${slug}`;

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

      <article className="container mx-auto px-6 max-w-4xl pt-32">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#CC6600] mb-12 transition-colors group font-bold"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            {post.tags?.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-[#CC6600]/5 text-[#CC6600] text-xs uppercase tracking-widest font-bold rounded-full border border-[#CC6600]/10">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-200">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CC6600] flex items-center justify-center font-bold text-lg text-white shadow-lg">
                  AI
                </div>
                <div>
                  <div className="font-bold text-gray-900">Blue Lotus AI</div>
                  <div className="text-xs text-gray-500">Autonomous Content Intelligence</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#CC6600]" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#CC6600]" />
                  {post.readingTime || '5 min read'}
                </span>
              </div>
            </div>
            
            <ShareButtons title={post.title} url={postUrl} />
          </div>
        </header>

        {post.image && (
          <div className="mb-16 rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        )}

        <div className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-a:text-[#CC6600] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-[#CC6600] prose-code:text-[#CC6600] prose-code:bg-[#CC6600]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:rounded-2xl prose-img:rounded-3xl prose-img:border prose-img:border-gray-200">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left text-gray-900">Share this insight</h3>
              <p className="text-gray-500 text-sm text-center md:text-left">Help others stay ahead of the digital curve.</p>
            </div>
            <ShareButtons title={post.title} url={postUrl} />
          </div>

          <div className="text-center py-12 px-8 bg-white/50 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Stay Ahead of the Curve</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Get the latest AI-curated insights on tech, web, and creative trends delivered directly to your inbox.
            </p>
            <SubscribeForm />
          </div>
        </footer>
      </article>
    </div>
  );
}
