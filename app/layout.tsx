import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import { LoadingSpinner } from "@/components/loading-spinner"
import "./globals.css"

export const metadata: Metadata = {
  title: "AIG MSU - Alternative Investments Group",
  description: "Michigan State University Alternative Investments Group - Learn more about AIG today",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" text="Loading..." />}>
            {children}
          </Suspense>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
