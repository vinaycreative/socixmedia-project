import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Header"
import { AOSInit } from "@/app/components/Aos"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SocixMedia",
  description:
    "Yo listen up! Boost your brand, stack the profits! Our expert digital marketing, social media, and web/app services gotchu covered. Reach the right peoples, close those deals - we make it happen!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <AOSInit />
      </body>
    </html>
  )
}
