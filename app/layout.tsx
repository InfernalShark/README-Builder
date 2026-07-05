import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'README Builder — GitHub Profile Generator',
  description:
    'Visually construct an aesthetic GitHub profile README.md with live preview, drag-and-drop blocks, and one-click export.',
  keywords: [
    'github profile readme generator',
    'readme builder',
    'markdown editor',
    'github profile visual editor',
    'aesthetic github profile',
    'dnd readme builder',
    'nextjs',
    'tailwindcss',
    'zustand',
    'github stats creator'
  ],
  authors: [{ name: 'InfernalShark' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
  openGraph: {
    title: 'README Builder — GitHub Profile Generator',
    description: 'Visually construct an aesthetic GitHub profile README.md in minutes with live preview.',
    url: 'https://github.com/InfernalShark/README-Builder',
    siteName: 'README Builder',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'README Builder Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'README Builder — GitHub Profile Generator',
    description: 'Visually construct an aesthetic GitHub profile README.md in minutes.',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
