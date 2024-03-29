import Header from '../components/Header';
import './globals.css';
import ScrollToTop from '../components/ScrollToTop';
// import localFont from 'next/font/local';

// const myFont = localFont({ src: "./gotham-book-webfont.woff2", variable: "--font" })

export const metadata = {
  title: 'chijoke.eth',
  description: 'Building Dapps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`bg-gradient-to-r from-violet-900 lg:scrollbar lg:scrollbar-track-gray-400/20 lg:scrollbar-thumb-violet-900 to-black text-white h-screen snap-y overflow-x-hidden max-w-screen snap-mandatory overflow-y-scroll z-0`}>
          <Header />
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}
