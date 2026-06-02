import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebasNeue = Bebas_Neue({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-bebas" 
})

export const metadata = {
  title: "Road To Glory",
  description: "UEFA Champions League Legacy Archive 2000–2026",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} bg-ucl-navy text-ucl-white`}>
        {children}
      </body>
    </html>
  )
}