import type { Metadata } from 'next'
import './globals.css'
import { GlobalContextProvider } from './assets/store/store'


export const metadata: Metadata = {
  title: 'Chew Plush Store',
  description: 'Plushie store for all your plushie needs.',
  viewport:{
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}

