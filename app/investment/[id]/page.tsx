"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { LoadingError } from "@/components/ui/loading-error"

// Mock data for investments
const mockInvestments = [
  {
    id: 1,
    name: "Apple Inc. 5-Year Corporate Bond",
    type: "Corporate Bond",
    issuer: "Apple Inc.",
    issuerId: "apple",
    yield: "3.5%",
    term: "5 years",
    minInvestment: 1000,
    rating: "AA+",
    prospectusLink: "/prospectus/apple-5y-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "U.S. Securities and Exchange Commission (SEC)",
    description:
      "A high-quality corporate bond issued by Apple Inc., offering a competitive yield with relatively low risk.",
    maturityDate: "2028-06-15",
    interestPaymentFrequency: "Semi-annually",
    totalIssueSize: "$2,000,000,000",
    secondaryMarketLiquidity: "High",
    callableDate: "2026-06-15",
    useOfProceeds: "General corporate purposes, including share repurchases and dividend payments.",
    availableUnits: 10000,
    historicalPrices: [
      { date: "2023-01-01", price: 100 },
      { date: "2023-02-01", price: 101 },
      { date: "2023-03-01", price: 102 },
      { date: "2023-04-01", price: 101.5 },
      { date: "2023-05-01", price: 102.5 },
      { date: "2023-06-01", price: 103 },
    ],
  },
  {
    id: 2,
    name: "U.S. Treasury 10-Year Note",
    type: "Treasury Bond",
    issuer: "U.S. Government",
    issuerId: "us-gov",
    yield: "2.8%",
    term: "10 years",
    minInvestment: 100,
    rating: "AAA",
    prospectusLink: "/prospectus/us-treasury-10y-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "U.S. Department of the Treasury",
    description: "A safe and stable investment backed by the full faith and credit of the United States government.",
    maturityDate: "2033-05-15",
    interestPaymentFrequency: "Semi-annually",
    totalIssueSize: "$24,000,000,000",
    secondaryMarketLiquidity: "Very High",
    callableDate: "N/A",
    useOfProceeds: "Financing U.S. government operations and refinancing existing debt.",
    availableUnits: 50000,
    historicalPrices: [
      { date: "2023-01-01", price: 98 },
      { date: "2023-02-01", price: 98.5 },
      { date: "2023-03-01", price: 99 },
      { date: "2023-04-01", price: 98.8 },
      { date: "2023-05-01", price: 99.2 },
      { date: "2023-06-01", price: 99.5 },
    ],
  },
  {
    id: 3,
    name: "Bank of America 1-Year CD",
    type: "Certificate of Deposit",
    issuer: "Bank of America",
    issuerId: "bofa",
    yield: "2.2%",
    term: "1 year",
    minInvestment: 500,
    rating: "N/A",
    prospectusLink: "/prospectus/bofa-1y-cd-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "Federal Deposit Insurance Corporation (FDIC)",
    description: "A low-risk savings product with a guaranteed return, ideal for short-term savings goals.",
    maturityDate: "2024-06-30",
    interestPaymentFrequency: "At maturity",
    totalIssueSize: "N/A (Varies by branch)",
    secondaryMarketLiquidity: "Low",
    callableDate: "N/A",
    useOfProceeds: "Funding Bank of America's lending activities.",
    availableUnits: 20000,
    historicalPrices: [
      { date: "2023-01-01", price: 100 },
      { date: "2023-02-01", price: 100.1 },
      { date: "2023-03-01", price: 100.2 },
      { date: "2023-04-01", price: 100.3 },
      { date: "2023-05-01", price: 100.4 },
      { date: "2023-06-01", price: 100.5 },
    ],
  },
  {
    id: 4,
    name: "Dubai Islamic Bank 5-Year Sukuk",
    type: "Islamic Sukuk",
    issuer: "Dubai Islamic Bank",
    issuerId: "dib",
    yield: "3.2%",
    term: "5 years",
    minInvestment: 10000,
    rating: "A",
    prospectusLink: "/prospectus/dib-5y-sukuk-2023.pdf",
    countryOfIssuance: "United Arab Emirates",
    regulator: "Dubai Financial Services Authority (DFSA)",
    description: "A Sharia-compliant investment certificate, offering ethical returns based on tangible assets.",
    maturityDate: "2028-09-30",
    interestPaymentFrequency: "Quarterly",
    totalIssueSize: "$1,000,000,000",
    secondaryMarketLiquidity: "Moderate",
    callableDate: "2026-09-30",
    useOfProceeds: "Financing Islamic banking operations and Sharia-compliant projects.",
    availableUnits: 5000,
    historicalPrices: [
      { date: "2023-01-01", price: 95 },
      { date: "2023-02-01", price: 95.5 },
      { date: "2023-03-01", price: 96 },
      { date: "2023-04-01", price: 96.5 },
      { date: "2023-05-01", price: 97 },
      { date: "2023-06-01", price: 97.5 },
    ],
  },
  {
    id: 5,
    name: "EIB Climate Awareness Bond",
    type: "Green Bond",
    issuer: "European Investment Bank",
    issuerId: "eib",
    yield: "2.5%",
    term: "7 years",
    minInvestment: 5000,
    rating: "AAA",
    prospectusLink: "/prospectus/eib-green-bond-2023.pdf",
    countryOfIssuance: "Luxembourg",
    regulator: "Luxembourg Financial Sector Supervisory Commission (CSSF)",
    description: "A bond specifically earmarked to raise money for climate and environmental projects.",
    maturityDate: "2030-03-15",
    interestPaymentFrequency: "Annually",
    totalIssueSize: "€3,000,000,000",
    secondaryMarketLiquidity: "High",
    callableDate: "N/A",
    useOfProceeds: "Financing renewable energy and energy efficiency projects across the European Union.",
    availableUnits: 10000,
    historicalPrices: [
      { date: "2023-01-01", price: 102 },
      { date: "2023-02-01", price: 102.3 },
      { date: "2023-03-01", price: 102.6 },
      { date: "2023-04-01", price: 102.9 },
      { date: "2023-05-01", price: 103.2 },
      { date: "2023-06-01", price: 103.5 },
    ],
  },
  {
    id: 6,
    name: "IFC Social Bond",
    type: "Social Impact Bond",
    issuer: "International Finance Corporation",
    issuerId: "ifc",
    yield: "3.0%",
    term: "6 years",
    minInvestment: 2000,
    rating: "AAA",
    prospectusLink: "/prospectus/ifc-social-bond-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "U.S. Securities and Exchange Commission (SEC)",
    description: "A bond that funds social projects aimed at improving social outcomes in developing countries.",
    maturityDate: "2029-12-31",
    interestPaymentFrequency: "Semi-annually",
    totalIssueSize: "$500,000,000",
    secondaryMarketLiquidity: "Moderate",
    callableDate: "2027-12-31",
    useOfProceeds:
      "Financing projects that address critical social issues such as healthcare, education, and affordable housing in emerging markets.",
    availableUnits: 7500,
    historicalPrices: [
      { date: "2023-01-01", price: 97 },
      { date: "2023-02-01", price: 97.2 },
      { date: "2023-03-01", price: 97.4 },
      { date: "2023-04-01", price: 97.6 },
      { date: "2023-05-01", price: 97.8 },
      { date: "2023-06-01", price: 98 },
    ],
  },
]

export default function InvestmentDetailsPage({ params }: { params: { id: string } }) {
  const [investment, setInvestment] = useState<(typeof mockInvestments)[0] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [units, setUnits] = useState(1)

  useEffect(() => {
    const fetchInvestment = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const foundInvestment = mockInvestments.find((inv) => inv.id === Number(params.id))
        if (foundInvestment) {
          setInvestment(foundInvestment)
        } else {
          notFound()
        }
      } catch (err) {
        setError("Failed to fetch investment details. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchInvestment()
  }, [params.id])

  if (isLoading || error || !investment) {
    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <LoadingError isLoading={isLoading} error={error} />
      </div>
    )
  }

  const handleUnitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setUnits(isNaN(value) ? 0 : Math.max(0, Math.min(value, investment.availableUnits)))
  }

  const totalInvestment = units * investment.minInvestment

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-3xl font-bold mb-6">{investment.name}</h1>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="font-semibold">Type</dt>
                      <dd>{investment.type}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Issuer</dt>
                      <dd>{investment.issuer}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Yield</dt>
                      <dd>{investment.yield}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Term</dt>
                      <dd>{investment.term}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Minimum Investment</dt>
                      <dd>${investment.minInvestment.toLocaleString()}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Rating</dt>
                      <dd>{investment.rating}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Maturity Date</dt>
                      <dd>{investment.maturityDate}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Country of Issuance</dt>
                      <dd>{investment.countryOfIssuance}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Buying Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="units">Number of Units</Label>
                      <Input
                        id="units"
                        type="number"
                        value={units}
                        onChange={handleUnitsChange}
                        min={1}
                        max={investment.availableUnits}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="total-investment">Total Investment</Label>
                      <Input
                        id="total-investment"
                        type="text"
                        value={`$${totalInvestment.toLocaleString()}`}
                        disabled
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Available Units: {investment.availableUnits.toLocaleString()}
                      </p>
                    </div>
                    <Button className="w-full">Buy Now</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Investment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-4">
                  <div>
                    <dt className="font-semibold">Description</dt>
                    <dd>{investment.description}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Interest Payment Frequency</dt>
                    <dd>{investment.interestPaymentFrequency}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Total Issue Size</dt>
                    <dd>{investment.totalIssueSize}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Secondary Market Liquidity</dt>
                    <dd>{investment.secondaryMarketLiquidity}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Callable Date</dt>
                    <dd>{investment.callableDate}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Use of Proceeds</dt>
                    <dd>{investment.useOfProceeds}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Regulator</dt>
                    <dd>{investment.regulator}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Prospectus</dt>
                    <dd>
                      <Link
                        href={investment.prospectusLink}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Prospectus
                      </Link>
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Historical Performance</CardTitle>
                <CardDescription>Price trends over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={investment.historicalPrices}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/results">Back to Search Results</Link>
          </Button>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AGYAL. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

