// app/layout.tsx
import Link from "next/link"; 
import React from "react";
import type { Metadata } from 'next';
import './globals.css';
import ThemeToggle from './components/ThemeToggle';

export const metadata: Metadata = {
  title: {
    template: '%s', //replace with page name in children page
    default: 'roman abramovich', // a default is required when creating a template
  },
  description: "Roman Abramovich's portfolio website",
  keywords: ['Roman Abramovich', 'portfolio', 'website', 'Internship', 'Software Engineer', 'Software Developer'],
  authors: [{ name: 'Roman Abramovich' }],
  creator: 'Roman Abramovich',
  publisher: 'Roman Abramovich',
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  metadataBase: new URL('https://romanabramovich.vercel.app'),
  openGraph: {
  title: 'Roman Abramovich - Software Developer',
  description: "Roman Abramovich's portfolio website",
  url: 'https://romanabramovich.vercel.app',
  siteName: 'Roman Abramovich Portfolio',
  locale: 'en_US',
  type: 'website',
  images: ['/profilePic.jpg'],
  },
}


export default function RootLayout({children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* navigation */}
        <nav className="border-b border-2.5" style={{ borderColor: 'var(--foreground)' }}>
          <div className="max-w-4xl mx-auto px-2 md:px-6 py-4 md:py-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 flex justify-evenly md:justify-start md:gap-30 lg:gap-40 text-xs sm:text-sm lg:text-lg xl:text-xl">
                <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors whitespace-nowrap">
                  about me
                </Link>
                <Link href="/work" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  work
                </Link>
                <Link href="/resume" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  resume
                </Link>
                <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors whitespace-nowrap">
                  contact me
                </Link>
              </div>
              
              {/* Theme toggle on the right */}
              <div className="flex-shrink-0">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
    
        {/* child container */}
        <main className="max-w-4xl mx-auto px-4 md:px-6 py-4 md:py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
