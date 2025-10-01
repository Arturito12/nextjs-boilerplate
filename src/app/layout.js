import { Geist_Mono } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Next.js Boilerplate",
  description: "Boilerplate for projects on next.js + tailwind",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // eslint-disable-next-line tailwindcss/classnames-order
        className={` ${geistMono.variable} underline-from-font decoration-skip-none flex min-h-screen w-full flex-col scroll-smooth bg-center antialiased`}
      >
        {children}
      </body>
    </html>
  
}
