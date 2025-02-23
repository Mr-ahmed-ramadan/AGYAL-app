import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, BarChart2, Shield, ArrowRight, Building, User } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">How AGYAL Works</h1>
        <p className="mb-8 text-lg">
          AGYAL revolutionizes fixed income investments by leveraging Distributed Ledger Technology (DLT) to provide a
          secure, transparent, and efficient platform for both investors and issuers.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-6 w-6" />
                <span>1. Discover</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Explore a wide range of fixed income opportunities. Our advanced search algorithm helps you find
                investments that match your criteria.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-6 w-6" />
                <span>2. Analyze</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Compare and analyze investments with our comprehensive tools. View projected returns, risk assessments,
                and detailed issuer information.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6" />
                <span>3. Secure</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Invest with confidence using our DLT-powered self-custody solution. Your assets are secured by
                cutting-edge blockchain technology, giving you full control.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6" />
                <span>For Investors</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access a diverse range of fixed income investments</li>
                <li>Self-custody your assets using secure DLT technology</li>
                <li>Enjoy enhanced transparency and real-time settlement</li>
                <li>Benefit from lower fees and improved liquidity</li>
                <li>Manage your portfolio with advanced tracking tools</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-6 w-6" />
                <span>For Issuers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reach a global investor base efficiently</li>
                <li>Streamline issuance process with DLT technology</li>
                <li>Reduce administrative costs and complexity</li>
                <li>Offer innovative, fractional investment opportunities</li>
                <li>Access real-time data on your issuances</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Security and Self-Custody with DLT</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              AGYAL leverages the power of Distributed Ledger Technology (DLT) to provide unparalleled security and
              control over your investments:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Self-custody: You have full control over your digital assets, eliminating counterparty risks.</li>
              <li>
                Immutable records: All transactions are recorded on a tamper-proof blockchain, ensuring transparency and
                auditability.
              </li>
              <li>
                Smart contracts: Automated, self-executing contracts reduce the risk of human error and ensure timely
                execution of investment terms.
              </li>
              <li>
                Enhanced privacy: Your personal information is protected through advanced cryptographic techniques.
              </li>
              <li>
                Fractional ownership: DLT enables the division of assets into smaller units, allowing for more flexible
                investment options.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/register">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t mt-12">
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

