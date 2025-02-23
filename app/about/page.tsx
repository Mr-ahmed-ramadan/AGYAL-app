import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About AGYAL</h1>
        <div className="space-y-4">
          <p>
            AGYAL is a pioneering platform designed to bridge the gap between investors and fixed-income markets, with a
            special focus on Islamic-compliant investment opportunities. Our mission is to democratize access to
            fixed-income securities while adhering to ethical and religious investment principles.
          </p>
          <p>
            Founded in 2023, AGYAL was born out of the recognition that many investors struggle to access fixed-income
            markets and find suitable Islamic-compliant investment options. Our team of financial experts, Sharia
            scholars, and technology innovators came together to create a solution that brings transparency,
            accessibility, and compliance to this crucial aspect of portfolio management.
          </p>
          <p>
            At AGYAL, we believe that every investor should have access to a diverse range of fixed-income opportunities
            that align with their financial goals and ethical values. Whether you're seeking bonds, sukuk, or other
            Sharia-compliant fixed-income investments, our platform is designed to meet your needs and help you achieve
            your financial objectives while adhering to Islamic finance principles.
          </p>
          <p>
            Our commitment to Islamic finance goes beyond just offering Sharia-compliant products. We work closely with
            renowned Sharia scholars to ensure that all our investment opportunities meet the highest standards of
            Islamic finance. This includes avoiding investments in prohibited industries, ensuring fair and transparent
            profit-sharing mechanisms, and promoting ethical business practices.
          </p>
          <p>
            By leveraging cutting-edge technology and our extensive network in the fixed-income markets, we're able to
            offer our users access to opportunities that were previously available only to institutional investors. From
            innovative sukuk structures to green bonds, AGYAL opens doors to a world of fixed-income investments that
            combine attractive returns with ethical and religious compliance.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
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

