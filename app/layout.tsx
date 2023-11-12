import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/styledRegistry';
import { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: "#141719",
}

export const metadata: Metadata = {
  title: "portfolio",
  metadataBase: new URL("https://tiagosc.org.br"),
  description:
    "portfolio desc",
  openGraph: {
    title: "portfolio",
    description:
      "portfolio desc",
    siteName: "Portfolio",
    images: [
      {
        url: "https://tiagosc.org.br/tiagosc-banner.jpg",
        width: 1280,
        height: 720,
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  robots: {
    index: process.env.VERCEL_ENV === "production",
  },
  twitter: {
    card: "summary_large_image",
    title: "portfolio",
    description:
      "portfolio desc",
    creator: "@tiagosc21",
    images: ["https://tiagosc.org.br/tiagosc-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
