import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from '@/components/Providers'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-100 w-100'>
        <Providers children={children}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
