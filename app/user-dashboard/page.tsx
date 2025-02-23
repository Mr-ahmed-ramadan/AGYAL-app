"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard } from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Mock user data
const userData = {
  name: "John Doe",
  totalBalance: 150000,
  totalYield: 3.5,
  holdings: [
    { id: 1, type: "Corporate Bond", issuer: "Apple Inc.", amount: 50000, yield: 3.5, maturityDate: "2025-06-15" },
    { id: 2, type: "Treasury Bond", issuer: "U.S. Government", amount: 75000, yield: 2.8, maturityDate: "2030-12-31" },
    {
      id: 3,
      type: "Certificate of Deposit",
      issuer: "Bank of America",
      amount: 25000,
      yield: 2.2,
      maturityDate: "2024-03-01",
    },
  ],
  upcomingActions: [
    { id: 1, action: "Bond Maturity", description: "Apple Inc. Corporate Bond", date: "2025-06-15", amount: 50000 },
    { id: 2, action: "Interest Payment", description: "U.S. Treasury Bond", date: "2023-06-30", amount: 1050 },
    { id: 3, action: "CD Renewal", description: "Bank of America CD", date: "2024-03-01", amount: 25000 },
  ],
  walletBalance: {
    usd: 10000,
    fixedIncome: 140000,
  },
  virtualCard: {
    lastFourDigits: "1234",
    expiryDate: "12/25",
    availableBalance: 2500,
  },
  recentTransactions: [
    { id: 1, description: "Interest Payment - Apple Inc. Bond", amount: 875, date: "2023-05-15" },
    { id: 2, description: "Grocery Store Purchase", amount: -120, date: "2023-05-18" },
    { id: 3, description: "Interest Payment - U.S. Treasury Bond", amount: 1050, date: "2023-05-31" },
    { id: 4, description: "Online Shopping", amount: -250, date: "2023-06-02" },
  ],
}

export default function UserDashboardPage() {
  const [showCardDetails, setShowCardDetails] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Welcome back, {userData.name}</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>USD (Stable Currency):</dt>
                  <dd className="font-semibold">${userData.walletBalance.usd.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Fixed Income Assets:</dt>
                  <dd className="font-semibold">${userData.walletBalance.fixedIncome.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t">
                  <dt>Total Balance:</dt>
                  <dd>${userData.totalBalance.toLocaleString()}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Virtual Card</CardTitle>
              <CardDescription>Use your interest payments for everyday purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg text-white mb-4">
                <div className="flex justify-between items-center mb-4">
                  <CreditCard className="h-8 w-8" />
                  <p className="text-lg font-semibold">AGYAL Virtual Card</p>
                </div>
                <p className="text-xl mb-4">
                  **** **** **** {showCardDetails ? userData.virtualCard.lastFourDigits : "****"}
                </p>
                <div className="flex justify-between items-center">
                  <p>Expiry: {showCardDetails ? userData.virtualCard.expiryDate : "**/**"}</p>
                  <Button variant="secondary" size="sm" onClick={() => setShowCardDetails(!showCardDetails)}>
                    {showCardDetails ? "Hide Details" : "Show Details"}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Available Balance</h3>
                <p className="text-2xl font-bold">${userData.virtualCard.availableBalance.toLocaleString()}</p>
                <Progress
                  value={(userData.virtualCard.availableBalance / userData.totalBalance) * 100}
                  className="h-2"
                />
                <p className="text-sm text-muted-foreground">
                  {((userData.virtualCard.availableBalance / userData.totalBalance) * 100).toFixed(1)}% of total balance
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest proceeds and virtual card transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                        ${Math.abs(transaction.amount).toLocaleString()}
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Current Holdings</CardTitle>
              <CardDescription>Your investment portfolio</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Issuer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Yield</TableHead>
                    <TableHead>Maturity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.holdings.map((holding) => (
                    <TableRow key={holding.id}>
                      <TableCell>{holding.type}</TableCell>
                      <TableCell>{holding.issuer}</TableCell>
                      <TableCell>${holding.amount.toLocaleString()}</TableCell>
                      <TableCell>{holding.yield}%</TableCell>
                      <TableCell>{holding.maturityDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Actions</CardTitle>
              <CardDescription>Actions required in the next 12 months</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.upcomingActions.map((action) => (
                    <TableRow key={action.id}>
                      <TableCell>{action.action}</TableCell>
                      <TableCell>{action.description}</TableCell>
                      <TableCell>{action.date}</TableCell>
                      <TableCell>${action.amount.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/results">Find New Investments</Link>
          </Button>
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

