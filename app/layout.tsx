import './globals.css'
import { inter } from './fonts'
import Navbar from '@/src/components/Common/Navbar/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <Navbar/>
        <div className="app-body">
          {children}
        </div>
      </body>
    </html>
  )
}