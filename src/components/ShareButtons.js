'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: faXTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:text-[#0A66C2]'
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all text-slate-400 ${link.color} shadow-sm flex items-center justify-center w-10 h-10`}
          aria-label={`Share on ${link.name}`}
        >
          <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all text-slate-400 hover:text-white shadow-sm relative flex items-center justify-center w-10 h-10"
        aria-label="Copy link"
      >
        {copied ? (
          <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-400" />
        ) : (
          <FontAwesomeIcon icon={faLink} className="w-4 h-4" />
        )}
        {copied && (
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs text-white rounded shadow-lg whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}
