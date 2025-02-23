import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function IssuerRegisterPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/issuer/login">
            Issuer Login
          </Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Issuer Registration</CardTitle>
            <CardDescription>Create an account to manage your listings</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="companyName">Company Name</label>
                  <Input id="companyName" placeholder="Enter your company name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password">Password</label>
                  <Input id="password" type="password" placeholder="Create a password" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register</Button>
          </CardFooter>
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

