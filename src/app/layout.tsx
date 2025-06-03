import type { Metadata } from 'next'
import { Josefin_Sans, Yeseva_One } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const josefinSans = Josefin_Sans({
  variable: '--font-josefin',
  subsets: ['latin'],
  display: 'swap',
})

const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  variable: '--font-yeseva',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coffee & Wifi',
  description:
    'A curated guide to the best cafés for remote work — with great coffee, good vibes, and strong wifi.',
  keywords: [
    'remote work',
    'coffee shops',
    'cafés',
    'wifi',
    'coworking',
    'digital nomad',
    'Porto',
    'best cafes',
  ],
  authors: [{ name: 'Inês Silva' }],
  creator: 'Inês Silva',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${yesevaOne.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
