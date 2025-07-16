import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'AIDD - AI Driven Development',
  description: 'AIDD official website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">首页</Link>
          <Link href="/about">关于我们</Link>
          <Link href="/services">业务介绍</Link>
          <Link href="/timeline">发展历程</Link>
          <Link href="/contact">联系我们</Link>
        </nav>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} AIDD</footer>
      </body>
    </html>
  );
}
