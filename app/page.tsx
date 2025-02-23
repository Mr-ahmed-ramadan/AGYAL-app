"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for yield comparisons
const yieldData = {
  USA: { traditional: { high: 2.5, average: 1.8 }, agyal: { high: 4.2, average: 3.5 } },
  UK: { traditional: { high: 2.2, average: 1.5 }, agyal: { high: 3.8, average: 3.2 } },
  UAE: { traditional: { high: 2.0, average: 1.3 }, agyal: { high: 4.0, average: 3.3 } },
  Singapore: { traditional: { high: 1.8, average: 1.2 }, agyal: { high: 3.5, average: 3.0 } },
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("USA")

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-accent">
      <main className="flex-1 flex flex-col">
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Your Gateway to <span className="text-primary">Fixed Income Investments</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg">
                Discover and invest in exclusive fixed-income securities and Sharia-compliant options with higher yields
                than traditional banks.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  asChild
                  className="w-full text-base sm:text-lg py-4 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                >
                  <Link href="/results" className="relative overflow-hidden group">
                    <span className="relative z-10">Explore Opportunities</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-full"></div>
                  </Link>
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                Access higher yields through our efficient, low-cost platform
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center bg-muted/50">
          <div className="container px-4 sm:px-6">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-center">Yield Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Country
                    </label>
                    <Select onValueChange={(value) => setSelectedCountry(value)} defaultValue={selectedCountry}>
                      <SelectTrigger id="country-select">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(yieldData).map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Traditional</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          High: {yieldData[selectedCountry as keyof typeof yieldData].traditional.high}%
                        </p>
                        <p className="text-sm">
                          Average: {yieldData[selectedCountry as keyof typeof yieldData].traditional.average}%
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">AGYAL</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-primary font-bold">
                          High: {yieldData[selectedCountry as keyof typeof yieldData].agyal.high}%
                        </p>
                        <p className="text-sm text-primary font-bold">
                          Average: {yieldData[selectedCountry as keyof typeof yieldData].agyal.average}%
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="w-full py-4 sm:py-6 px-4 sm:px-6 border-t border-border/40">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© 2023 AGYAL. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            <Link className="text-xs hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-primary transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

