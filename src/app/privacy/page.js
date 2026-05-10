import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.svg';
import { ChevronLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Blue Lotus Media',
  description: 'Privacy Policy for Blue Lotus Media.',
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: May 10, 2026</p>
        </header>

        <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Blue Lotus Media ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal information you share with us through our website, bluelotusmedia.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We only collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Fill out our contact form (Name, Email, Message).</li>
              <li>Subscribe to our blog newsletter (Email address).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the collected information solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Respond to your inquiries and project requests.</li>
              <li>Send you blog updates and newsletters (only if you subscribed).</li>
              <li>Maintain the security and integrity of our website.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Data Processing & Third Parties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the following third-party services to process data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>GitHub Pages:</strong> Our website is hosted on GitHub Pages. GitHub may collect certain log data (like IP addresses) for security and maintenance purposes as part of their hosting services.</li>
              <li><strong>Formspree:</strong> We use Formspree to handle form submissions. When you submit a form, your data is processed by Formspree and delivered to our email.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              This website is designed to be privacy-friendly. We do not use tracking cookies or third-party analytics scripts (like Google Analytics) to track your behavior across the web.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to request access to the personal data we hold about you, to request corrections, or to request that we delete your information. To exercise these rights, please contact us at REDACTED.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> REDACTED
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
