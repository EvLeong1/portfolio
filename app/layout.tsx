import Header from '@/components/headers'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Evan Leong | Portfolio",
  description: 'Evan Leong\'s portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className
        }bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 font dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#e2c5ff] dark:bg-white -z-10 absolute top-[-6rem] right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]">
        </div>
        <div className="bg-[#cbfcfd] dark:bg-white -z-10 absolute top-[-1rem] left-[-35rem] 
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left[-15rem] 2xl:left-[-5rem]">
        </div>
        {/* e9c5ff */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  )
}
