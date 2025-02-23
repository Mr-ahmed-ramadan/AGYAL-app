import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>You can also reach us using the following information:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>
                    123 Financial Street, Suite 456
                    <br />
                    New York, NY 10001
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>support@agyal.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </CardContent>
          </Card>
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

