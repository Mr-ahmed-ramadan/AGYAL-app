"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

// Mock data for users pending onboarding
const pendingUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Pending AML Check" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending Document Verification" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Pending Approval" },
]

// Mock data for fixed income listings pending approval
const pendingListings = [
  { id: 1, name: "Corporate Bond A", issuer: "Company X", yield: "3.5%", term: "5 years" },
  { id: 2, name: "Municipal Bond B", issuer: "City Y", yield: "2.8%", term: "10 years" },
  { id: 3, name: "Green Bond C", issuer: "Eco Corp", yield: "3.2%", term: "7 years" },
]

// Mock data for user feedback
const userFeedback = [
  { id: 1, user: "Alice", message: "Great platform! Easy to use and find investments.", rating: 5 },
  { id: 2, user: "Charlie", message: "Could use more filter options for searches.", rating: 4 },
  { id: 3, user: "David", message: "Experienced a glitch while trying to invest. Please fix.", rating: 2 },
]

// Mock data for profitability
const profitabilityData = {
  totalUsers: 1000,
  activeInvestments: 750,
  totalYieldGenerated: 5000000, // $5,000,000
  recurringFee: 50000, // $50,000 (1% of yield)
}

export default function AdminDashboardPage() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null)
  const [selectedListing, setSelectedListing] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <Tabs defaultValue="onboarding" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="onboarding">User Onboarding</TabsTrigger>
            <TabsTrigger value="listings">Approve Listings</TabsTrigger>
            <TabsTrigger value="feedback">User Feedback</TabsTrigger>
            <TabsTrigger value="profitability">Profitability</TabsTrigger>
          </TabsList>
          <TabsContent value="onboarding">
            <Card>
              <CardHeader>
                <CardTitle>User Onboarding</CardTitle>
                <CardDescription>Manage user onboarding and AML checks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pending Users</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>
                              <Button onClick={() => setSelectedUser(user.id)} variant="outline" size="sm">
                                Review
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {selectedUser && (
                    <Card>
                      <CardHeader>
                        <CardTitle>User Review</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="amlStatus">AML Check Status</Label>
                            <Input id="amlStatus" placeholder="Enter AML check result" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="documentVerification">Document Verification</Label>
                            <Input id="documentVerification" placeholder="Enter verification status" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="notes">Admin Notes</Label>
                            <Textarea id="notes" placeholder="Enter any additional notes" />
                          </div>
                          <div className="flex justify-between">
                            <Button variant="outline">Reject</Button>
                            <Button>Approve</Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>Approve Fixed Income Listings</CardTitle>
                <CardDescription>Review and approve new fixed income investment listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pending Listings</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Issuer</TableHead>
                          <TableHead>Yield</TableHead>
                          <TableHead>Term</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingListings.map((listing) => (
                          <TableRow key={listing.id}>
                            <TableCell>{listing.name}</TableCell>
                            <TableCell>{listing.issuer}</TableCell>
                            <TableCell>{listing.yield}</TableCell>
                            <TableCell>{listing.term}</TableCell>
                            <TableCell>
                              <Button onClick={() => setSelectedListing(listing.id)} variant="outline" size="sm">
                                Review
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {selectedListing && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Listing Review</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="complianceCheck">Compliance Check</Label>
                            <Input id="complianceCheck" placeholder="Enter compliance check result" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="riskAssessment">Risk Assessment</Label>
                            <Input id="riskAssessment" placeholder="Enter risk assessment" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="adminNotes">Admin Notes</Label>
                            <Textarea id="adminNotes" placeholder="Enter any additional notes" />
                          </div>
                          <div className="flex justify-between">
                            <Button variant="outline">Reject</Button>
                            <Button>Approve</Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>User Feedback</CardTitle>
                <CardDescription>Review and manage user feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Feedback</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userFeedback.map((feedback) => (
                      <TableRow key={feedback.id}>
                        <TableCell>{feedback.user}</TableCell>
                        <TableCell>{feedback.message}</TableCell>
                        <TableCell>{feedback.rating} / 5</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Respond
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profitability">
            <Card>
              <CardHeader>
                <CardTitle>Profitability Report</CardTitle>
                <CardDescription>Overview of app profitability based on user yields</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="font-medium">Total Users</dt>
                        <dd className="text-2xl">{profitabilityData.totalUsers}</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Active Investments</dt>
                        <dd className="text-2xl">{profitabilityData.activeInvestments}</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Total Yield Generated</dt>
                        <dd className="text-2xl">${profitabilityData.totalYieldGenerated.toLocaleString()}</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Recurring Fee (1% of Yield)</dt>
                        <dd className="text-2xl">${profitabilityData.recurringFee.toLocaleString()}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Profitability Overview</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Revenue Goal Progress</span>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                        <Progress value={75} className="w-full" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">User Acquisition</span>
                          <span className="text-sm font-medium">60%</span>
                        </div>
                        <Progress value={60} className="w-full" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Investment Activity</span>
                          <span className="text-sm font-medium">80%</span>
                        </div>
                        <Progress value={80} className="w-full" />
                      </div>
                    </div>
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

