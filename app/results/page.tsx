"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for fixed income investments
const mockResults = [
  {
    id: 1,
    name: "Apple Inc. 5-Year Corporate Bond",
    type: "Corporate Bond",
    issuer: "Apple Inc.",
    issuerId: "apple",
    yield: "3.5%",
    term: "5 years",
    minInvestment: "$1,000",
    rating: "AA+",
    prospectusLink: "/prospectus/apple-5y-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "U.S. Securities and Exchange Commission (SEC)",
  },
  {
    id: 2,
    name: "U.S. Treasury 10-Year Note",
    type: "Treasury Bond",
    issuer: "U.S. Government",
    issuerId: "us-gov",
    yield: "2.8%",
    term: "10 years",
    minInvestment: "$100",
    rating: "AAA",
    prospectusLink: "/prospectus/us-treasury-10y-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "U.S. Department of the Treasury",
  },
  {
    id: 3,
    name: "Bank of America 1-Year CD",
    type: "Certificate of Deposit",
    issuer: "Bank of America",
    issuerId: "bofa",
    yield: "2.2%",
    term: "1 year",
    minInvestment: "$500",
    rating: "N/A",
    prospectusLink: "/prospectus/bofa-1y-cd-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "Federal Deposit Insurance Corporation (FDIC)",
  },
  {
    id: 4,
    name: "Dubai Islamic Bank 5-Year Sukuk",
    type: "Islamic Sukuk",
    issuer: "Dubai Islamic Bank",
    issuerId: "dib",
    yield: "3.2%",
    term: "5 years",
    minInvestment: "$10,000",
    rating: "A",
    prospectusLink: "/prospectus/dib-5y-sukuk-2023.pdf",
    countryOfIssuance: "United Arab Emirates",
    regulator: "Dubai Financial Services Authority (DFSA)",
  },
  {
    id: 5,
    name: "EIB Climate Awareness Bond",
    type: "Green Bond",
    issuer: "European Investment Bank",
    issuerId: "eib",
    yield: "2.5%",
    term: "7 years",
    minInvestment: "$5,000",
    rating: "AAA",
    prospectusLink: "/prospectus/eib-green-bond-2023.pdf",
    countryOfIssuance: "Luxembourg",
    regulator: "Luxembourg Financial Sector Supervisory Commission (CSSF)",
  },
  {
    id: 6,
    name: "IFC Social Bond",
    type: "Social Impact Bond",
    issuer: "International Finance Corporation",
    issuerId: "ifc",
    yield: "3.0%",
    term: "6 years",
    minInvestment: "$2,000",
    rating: "AAA",
    prospectusLink: "/prospectus/ifc-social-bond-2023.pdf",
    countryOfIssuance: "United States",
    regulator: "U.S. Securities and Exchange Commission (SEC)",
  },
]

export default function ResultsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")

  const filteredResults = mockResults.filter((result) => {
    const matchesSearch = Object.values(result).some(
      (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    const matchesType = filterType === "all" || result.type === filterType
    return matchesSearch && matchesType
  })

  const sortedResults = [...filteredResults].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1
    if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search and Filter</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search investments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Corporate Bond">Corporate Bond</SelectItem>
                <SelectItem value="Treasury Bond">Treasury Bond</SelectItem>
                <SelectItem value="Certificate of Deposit">Certificate of Deposit</SelectItem>
                <SelectItem value="Islamic Sukuk">Islamic Sukuk</SelectItem>
                <SelectItem value="Green Bond">Green Bond</SelectItem>
                <SelectItem value="Social Impact Bond">Social Impact Bond</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                  Name {sortBy === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("type")}>
                  Type {sortBy === "type" && (sortOrder === "asc" ? "▲" : "▼")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("issuer")}>
                  Issuer {sortBy === "issuer" && (sortOrder === "asc" ? "▲" : "▼")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("yield")}>
                  Yield {sortBy === "yield" && (sortOrder === "asc" ? "▲" : "▼")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("term")}>
                  Term {sortBy === "term" && (sortOrder === "asc" ? "▲" : "▼")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("minInvestment")}>
                  Minimum Investment {sortBy === "minInvestment" && (sortOrder === "asc" ? "▲" : "▼")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("rating")}>
                  Rating {sortBy === "rating" && (sortOrder === "asc" ? "▲" : "▼")}
                </TableHead>
                <TableHead>Country of Issuance</TableHead>
                <TableHead>Regulator</TableHead>
                <TableHead>Prospectus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedResults.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>
                    <Link href={`/investment/${result.id}`} className="text-blue-600 hover:underline">
                      {result.name}
                    </Link>
                  </TableCell>
                  <TableCell>{result.type}</TableCell>
                  <TableCell>
                    <Link href={`/issuer/${result.issuerId}`} className="text-blue-600 hover:underline">
                      {result.issuer}
                    </Link>
                  </TableCell>
                  <TableCell>{result.yield}</TableCell>
                  <TableCell>{result.term}</TableCell>
                  <TableCell>{result.minInvestment}</TableCell>
                  <TableCell>{result.rating}</TableCell>
                  <TableCell>{result.countryOfIssuance}</TableCell>
                  <TableCell>{result.regulator}</TableCell>
                  <TableCell>
                    <Link
                      href={result.prospectusLink}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Prospectus
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AGYAL. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

