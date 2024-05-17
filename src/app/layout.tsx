import type { Metadata } from 'next'

import { stdOrdinaryFont } from '@/app/globals.font'

import './globals.sass'

export const metadata: Metadata = {
  title: 'DaVinciCode',
  description: 'Leonardo Da Vinci ecosystem',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={
        'bg-stdBgColor text-stdOrdinaryFontColor font-stdOrdinaryFontSize'
      }
    >
      <body className={`${stdOrdinaryFont.className} mx-4`}>{children}</body>
    </html>
  )
}
