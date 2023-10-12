import Navbar from '@/components/Navbar '
import './globals.css'
import type { Metadata } from 'next'
import { Roboto  } from 'next/font/google'
import Footer from '@/components/Footer '

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Memory Treasure',
  description: 'Appwrite - Next_js App',
  keywords: ['Photos','Appwrite', 'Next_js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  bg-slate-800 text-white
       `}>
        <div className='flex flex-col justify-center '>
        <Navbar />
        <div>
        {children}
        </div>
         <Footer />
         </div>
        </body>
    </html>
  )
}
