import { ing15b } from '@/components/lifonts/localfonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'zikis8',
  description: 'asiA multiliNgual chatgpt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ing15b.className}>
        {children}</body>
    </html>
  )
}
