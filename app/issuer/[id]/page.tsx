import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for issuers
const mockIssuers = {
  apple: {
    name: "Apple Inc.",
    description: "American multinational technology company headquartered in Cupertino, California.",
    website: "https://www.apple.com",
    financials: {
      revenue: "$365.82 billion",
      netIncome: "$94.68 billion",
      totalAssets: "$351.02 billion",
      totalLiabilities: "$287.91 billion",
    },
    activeListings: [
      { type: "Corporate Bond", yield: "3.5%", term: "5 years", amount: "$2 billion" },
      { type: "Corporate Bond", yield: "4.0%", term: "10 years", amount: "$1.5 billion" },
    ],
  },
  dib: {
    name: "Dubai Islamic Bank",
    description: "Largest Islamic bank in the UAE and a pioneer in Islamic finance.",
    website: "https://www.dib.ae",
    financials: {
      revenue: "AED 13.69 billion",
      netIncome: "AED 4.39 billion",
      totalAssets: "AED 289.6 billion",
      totalLiabilities: "AED 249.3 billion",
    },
    activeListings: [
      { type: "Islamic Sukuk", yield: "3.2%", term: "5 years", amount: "$1 billion" },
      { type: "Islamic Sukuk", yield: "3.5%", term: "7 years", amount: "$750 million" },
    ],
  },
  eib: {
    name: "European Investment Bank",
    description: "The lending arm of the European Union and the world's largest multilateral lender.",
    website: "https://www.eib.org",
    financials: {
      loansDisbursed: "€65.9 billion",
      totalAssets: "€555.8 billion",
      ownFunds: "€71.8 billion",
      capitalSubscription: "€248.8 billion",
    },
    activeListings: [
      { type: "Green Bond", yield: "2.5%", term: "7 years", amount: "€1 billion" },
      { type: "Climate Awareness Bond", yield: "2.2%", term: "5 years", amount: "€500 million" },
    ],
  },
}

export default function IssuerPage({ params }: { params: { id: string } }) {
  const issuer = mockIssuers[params.id as keyof typeof mockIssuers]

  if (!issuer) {
    return <div>Issuer not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl sm:text-2xl">AGYAL</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/results">
            Search Results
          </Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{issuer.name}</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{issuer.description}</p>
              <Button asChild>
                <a href={issuer.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Financial Information</CardTitle>
              <CardDescription>Key financial metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {Object.entries(issuer.financials).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium">{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Active Listings</CardTitle>
            <CardDescription>Current fixed income offerings from this issuer</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Yield</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {issuer.activeListings.map((listing, index) => (
                  <TableRow key={index}>
                    <TableCell>{listing.type}</TableCell>
                    <TableCell>{listing.yield}</TableCell>
                    <TableCell>{listing.term}</TableCell>
                    <TableCell>{listing.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
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

