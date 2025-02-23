"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for issuer profile
const issuerProfile = {
  name: "Global Investments Ltd.",
  description: "A leading provider of innovative financial solutions",
  website: "https://www.globalinvestments.com",
  foundedYear: 2005,
  headquarters: "New York, USA",
  regulatoryCompliance: "SEC Registered",
  totalRaised: 500000000, // $500 million
}

// Mock data for issuer listings
const mockListings = [
  {
    id: 1,
    type: "Corporate Bond",
    yield: "3.5%",
    term: "5 years",
    amount: "$10,000,000",
    status: "Active",
    interestPayments: [
      { date: "2023-12-31", amount: 175000 },
      { date: "2024-06-30", amount: 175000 },
      { date: "2024-12-31", amount: 175000 },
    ],
  },
  {
    id: 2,
    type: "Islamic Sukuk",
    yield: "3.2%",
    term: "7 years",
    amount: "$20,000,000",
    status: "Active",
    interestPayments: [
      { date: "2023-12-31", amount: 320000 },
      { date: "2024-06-30", amount: 320000 },
      { date: "2024-12-31", amount: 320000 },
    ],
  },
  {
    id: 3,
    type: "Green Bond",
    yield: "2.8%",
    term: "10 years",
    amount: "$15,000,000",
    status: "Draft",
    interestPayments: [],
  },
]

export default function IssuerDashboardPage() {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Issuer Dashboard</h1>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="listings">Current Listings</TabsTrigger>
            <TabsTrigger value="new-listing">New Listing</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Issuer Profile</CardTitle>
                <CardDescription>Manage your company information</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Company Name</Label>
                    <Input id="name" defaultValue={issuerProfile.name} disabled={!editMode} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" defaultValue={issuerProfile.description} disabled={!editMode} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue={issuerProfile.website} disabled={!editMode} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="foundedYear">Founded Year</Label>
                    <Input id="foundedYear" defaultValue={issuerProfile.foundedYear} disabled={!editMode} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="headquarters">Headquarters</Label>
                    <Input id="headquarters" defaultValue={issuerProfile.headquarters} disabled={!editMode} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="regulatoryCompliance">Regulatory Compliance</Label>
                    <Input
                      id="regulatoryCompliance"
                      defaultValue={issuerProfile.regulatoryCompliance}
                      disabled={!editMode}
                    />
                  </div>
                  <Button type="button" onClick={() => setEditMode(!editMode)}>
                    {editMode ? "Save Changes" : "Edit Profile"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>Your Listings</CardTitle>
                <CardDescription>Manage your current bond listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Yield</TableHead>
                        <TableHead>Term</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockListings.map((listing) => (
                        <TableRow key={listing.id}>
                          <TableCell>{listing.type}</TableCell>
                          <TableCell>{listing.yield}</TableCell>
                          <TableCell>{listing.term}</TableCell>
                          <TableCell>{listing.amount}</TableCell>
                          <TableCell>{listing.status}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="new-listing">
            <Card>
              <CardHeader>
                <CardTitle>Create New Listing</CardTitle>
                <CardDescription>Add a new bond or fixed income investment to your offerings</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="type">Type of Investment</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select investment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate-bond">Corporate Bond</SelectItem>
                        <SelectItem value="sukuk">Islamic Sukuk</SelectItem>
                        <SelectItem value="green-bond">Green Bond</SelectItem>
                        <SelectItem value="social-impact-bond">Social Impact Bond</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="yield">Yield (%)</Label>
                    <Input id="yield" type="number" step="0.01" placeholder="Enter yield percentage" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="term">Term (years)</Label>
                    <Input id="term" type="number" placeholder="Enter term in years" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Total Amount ($)</Label>
                    <Input id="amount" type="number" placeholder="Enter total amount" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="minInvestment">Minimum Investment ($)</Label>
                    <Input id="minInvestment" type="number" placeholder="Enter minimum investment amount" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter a description of the investment" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="useOfProceeds">Use of Proceeds</Label>
                    <Textarea id="useOfProceeds" placeholder="Explain how the funds will be used" />
                  </div>
                  <Button type="submit">Create Listing</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="financials">
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Track your raised funds and manage depreciation schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Total Funds Raised</h3>
                    <p className="text-3xl font-bold">${issuerProfile.totalRaised.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Depreciation and Interest Payment Schedule</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Listing</TableHead>
                          <TableHead>Payment Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Type</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockListings.flatMap((listing) =>
                          listing.interestPayments.map((payment, index) => (
                            <TableRow key={`${listing.id}-${index}`}>
                              <TableCell>{listing.type}</TableCell>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>${payment.amount.toLocaleString()}</TableCell>
                              <TableCell>Interest Payment</TableCell>
                            </TableRow>
                          )),
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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

