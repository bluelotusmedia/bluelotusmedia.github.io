import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.svg';
import { ChevronLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Blue Lotus Media',
  description: 'Terms of Service for Blue Lotus Media.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F0F8FF] text-gray-900">
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
          <Link href="/blog" className="text-gray-600 hover:text-[#CC6600] font-medium transition-colors">Blog</Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 max-w-4xl pt-32 pb-20">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#CC6600] mb-12 transition-colors group font-bold"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-500">Last updated: May 10, 2026</p>
        </header>

        <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using bluelotusmedia.com (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this Website, including text, graphics, logos, and AI-generated blog posts, is the property of Blue Lotus Media or its content creators and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without express written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Use of Website</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use the Website only for lawful purposes. You are prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Attempting to interfere with the proper functioning of the Website.</li>
              <li>Using the Website to transmit any malicious software or spam.</li>
              <li>Scraping content for commercial use without authorization.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. AI-Generated Content</h2>
            <p className="text-gray-600 leading-relaxed">
              Some content on our blog is generated using artificial intelligence. While we strive for accuracy and quality, Blue Lotus Media does not guarantee the absolute correctness or completeness of AI-generated insights. Use of such information is at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              The Website is provided &quot;as is&quot; without any warranties of any kind, either express or implied. Blue Lotus Media does not warrant that the Website will be uninterrupted or error-free.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall Blue Lotus Media be liable for any damages arising out of the use or inability to use the Website, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of the jurisdiction in which Blue Lotus Media operates, without regard to its conflict of law principles.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
