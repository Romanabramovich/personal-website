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
        <nav className="border-b border-gray-200 dark:border-white-200 border-2.5">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              {/* Centered navigation links */}
              <div className="flex-1 flex justify-left gap-40 text-sm">
                <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  about me
                </Link>
                <Link href="/work" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  work
                </Link>
                <Link href="/resume" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  resume
                </Link>
                <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  contact me
                </Link>
              </div>
              
              {/* Theme toggle on the right */}
              <ThemeToggle />
            </div>
          </div>
        </nav>
    
        {/* child container */}
        <main className="max-w-4xl mx-auto px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
