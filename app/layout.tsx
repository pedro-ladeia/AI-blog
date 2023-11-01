import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from 'app/(shared)/Navbar';
import Footer from './(shared)/Footer';


const open_Sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Blog',
  description: 'Blog that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>
        <Navbar />
        {children}
          <Footer />
        </body>
    </html>
  )
}
