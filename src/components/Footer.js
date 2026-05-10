'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Blue Lotus Media. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-[#CC6600] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#CC6600] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/#contact" className="text-gray-400 hover:text-[#CC6600] text-sm transition-colors font-bold">
              Contact
            </Link>
            <a
              href="https://facebook.com/bluelotusmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CC6600] transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://instagram.com/bluelotusmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CC6600] transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://x.com/bluelotusmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CC6600] transition-colors"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
