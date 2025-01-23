import '../globals.css'
import type { Metadata } from 'next'
import { hindi15 } from '@/components/lifonts/localfonts'

import UkuhumushaHeader from '@/components/UkuhumushaHeader'


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
        <div className="w-full h-full bg-p-5">
          <div className='flex relative items-center justify-center flex-col gap-2 w-full h-screen rounded-t-3xl bg-white text-center'>
            <UkuhumushaHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
