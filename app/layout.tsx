import { inglishenglosoftw8asc} from '@/components/lifonts/localfonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'zikis8',
  description: 'xsia multiliNguxl chxtgpt',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inglishenglosoftw8asc.className} min-h-screen bg-background antialiased`}>
        {children}</body>
    </html>
  )
}
