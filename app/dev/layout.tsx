import '../globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import { hindi15 } from '@/components/lifonts/localfonts'

export const metadata: Metadata = {
  title: '8aiueohcg+8ADHTNkvz',
  description: 'asiA multiliNgual chatgpt 8aiueohcg+8ADHTNkvz+zileven(=J=8+3) tdpbsyrlmnf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hindi15.className}>
        {children}</body>
    </html>
  )
}
