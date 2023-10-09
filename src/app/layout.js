
import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AkashPedia',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
       <head><link rel="icon" href="titleIcon.png" /></head>
      
      <body className={inter.className}>
        <Navbar />
        {children}
        
        </body>

    </html>
  )
}