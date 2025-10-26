import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://coruscating-cannoli-391e09.netlify.app'),
  title: {
    default: 'Бот "РУПы" - Закрой академические долги без стресса | Московский Политех',
    template: '%s | Бот РУПы'
  },
  description: 'Персональный Telegram-бот для студентов Московского Политеха. Помогает закрывать академические задолженности: напоминания о дедлайнах, контроль РУПов, советы по учебе. 500+ довольных студентов, 95% успешность.',
  keywords: [
    'РУПы',
    'академические долги',
    'Московский Политех',
    'студенты',
    'Telegram бот',
    'помощник студента',
    'закрыть долги',
    'дедлайны',
    'учеба',
    'РУП',
    'задолженности',
    'напоминания',
    'контроль учебы',
    'МосПолитех'
  ],
  authors: [{ name: 'Московский Политех' }],
  creator: 'Московский Политех',
  publisher: 'Московский Политех',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://coruscating-cannoli-391e09.netlify.app',
    title: 'Бот "РУПы" - Закрой академические долги без стресса',
    description: 'Персональный Telegram-бот для студентов. Напоминания о дедлайнах, контроль РУПов, советы по учебе. 500+ студентов уже используют!',
    siteName: 'Бот РУПы',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Бот РУПы - помощник студента',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бот "РУПы" - Закрой академические долги без стресса',
    description: 'Персональный Telegram-бот для студентов Московского Политеха. 500+ студентов, 95% успешность!',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://coruscating-cannoli-391e09.netlify.app',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
