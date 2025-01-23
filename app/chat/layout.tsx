import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ChatsSidebar from '@/components/ChatsSidebar'
import ChatsSidebarMobile from '@/components/ChatsSidebarMobile'
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
      <body className={`${hindi15.className}`}>
        <div className='w-full flex flex-row'>
          <ChatsSidebar />
          <ChatsSidebarMobile />
          {children}
        </div>
      </body>
    </html>
  )
}
