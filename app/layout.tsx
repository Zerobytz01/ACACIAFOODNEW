import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { HamburgerMenu } from "@/components/hamburger-menu"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: "Acacia Foods - Nature's Best Beverages",
  description: "Premium craft beverages made with the finest natural ingredients. Discover our range of sodas, juices, and concentrates.",
  keywords: "beverages, natural drinks, sodas, juices, organic, Acacia Foods",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Hamburger Menu */}
          <HamburgerMenu />

          {/* Main Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
