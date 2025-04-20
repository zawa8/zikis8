import '../globals.css'
import type { Metadata } from 'next'
import ChatsSidebar from '@/components/ChatsSidebar'
import ChatsSidebarMobile from '@/components/ChatsSidebarMobile'
import { hindienglosoftw8asc } from '@/components/lifonts/localfonts'

export const metadata: Metadata = {
  title: '8aiueohcg+8ADHTNkvz',
  description: 'asiA multiliNgual chatgpt 8aiueohcg+8ADHTNkvz+yileven(=Y=8+3) tdpbsyrlmnf',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hindienglosoftw8asc.className} min-h-screen bg-background antialiased`}>
        <div className='w-full flex flex-row'>
          <ChatsSidebar />
          <ChatsSidebarMobile />
          {children}
        </div>
      </body>
    </html>
  )
}
