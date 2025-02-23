import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InvestmentsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Investment Opportunities</h1>
      <p className="mb-6">
        Explore our curated selection of fixed-income and Islamic-compliant investment opportunities.
      </p>
      {/* Add your investment listings or components here */}
      <div className="space-y-4">
        <p>Investment listings will be displayed here.</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

