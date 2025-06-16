import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Temesgen Asmamaw | Software Engineer',
  description: 'Portfolio and blog of Temesgen Asmamaw, a software engineer specializing in web and mobile development.',
  authors: [{ name: 'Temesgen Asmamaw' }],
  openGraph: {
    title: 'Temesgen Asmamaw | Software Engineer',
    description: 'Portfolio and blog of Temesgen Asmamaw, a software engineer specializing in web and mobile development.',
    type: 'website',
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@temesgendeveloper',
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}