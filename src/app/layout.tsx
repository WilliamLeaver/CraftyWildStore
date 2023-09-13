import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Crafty WildFlower Store',
  description: 'The Official Store for The Crafty WildFlower',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className="bg-backgroundColor">
        <div className="">
          <Navbar></Navbar>
        </div>
        {children}
      </body>  
    </html>
  )
}
