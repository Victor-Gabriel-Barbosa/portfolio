import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Victor Barbosa - Dev Full Stack',
  description:
    'Portfólio de Victor Barbosa, estudante de Sistemas de Informação e desenvolvedor Full Stack focado em aplicações web modernas, performáticas e escaláveis.',
  keywords: [
    'desenvolvedor',
    'full stack',
    'portfólio',
    'Next.js',
    'React',
    'TypeScript',
    'Victor Barbosa',
  ],
  authors: [{ name: 'Victor Barbosa' }],
  openGraph: {
    title: 'Victor Barbosa - Desenvolvedor Full Stack',
    description:
      'Portfólio profissional apresentando projetos de desenvolvimento de software.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1114' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
