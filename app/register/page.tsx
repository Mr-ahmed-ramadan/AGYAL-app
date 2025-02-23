"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Stepper } from "@/components/ui/stepper"

const countries = [
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "sg", label: "Singapore" },
]

export default function RegisterPage() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    country: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, country: value }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevious = () => {
    setStep((prev) => prev - 1)
  }

  const steps = [
    { title: "Select Country", description: "Choose your country of residence" },
    { title: "Basic Information", description: "Provide your personal details" },
    { title: "Identity Verification", description: "Upload your government-issued ID" },
    { title: "Additional Documents", description: "Provide proof of address and other required documents" },
    { title: "Verification", description: "Verify your email or phone number" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Register for AGYAL</CardTitle>
          <CardDescription>Create your account to start investing</CardDescription>
        </CardHeader>
        <CardContent>
          <Stepper steps={steps} currentStep={step} />
          <div className="mt-8">
            {step === 0 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Select your country</Label>
                  <Select onValueChange={handleCountryChange} value={formData.country}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="id-upload">Upload Government-issued ID</Label>
                  <Input id="id-upload" type="file" accept="image/*" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="selfie-upload">Take a Selfie</Label>
                  <Input id="selfie-upload" type="file" accept="image/*" capture="user" />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address-proof">Upload Proof of Address</Label>
                  <Input id="address-proof" type="file" accept="image/*,application/pdf" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additional-docs">Upload Additional Documents (if required)</Label>
                  <Input id="additional-docs" type="file" accept="image/*,application/pdf" multiple />
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <p>We've sent a verification code to your email and phone number. Please enter the code below:</p>
                <div className="space-y-2">
                  <Label htmlFor="verification-code">Verification Code</Label>
                  <Input id="verification-code" name="verificationCode" />
                </div>
              </div>
            )}
            <div className="flex justify-between mt-6">
              {step > 0 && (
                <Button onClick={handlePrevious} variant="outline">
                  Previous
                </Button>
              )}
              {step < steps.length - 1 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={() => alert("Account created successfully!")}>Create Account</Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

