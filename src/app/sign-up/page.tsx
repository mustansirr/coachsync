import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Activity } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CoachSync</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto flex items-center justify-center md:py-10">
          <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-12">
            {/* Left side - Form */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Create Your Account</h1>
                <p className="text-muted-foreground md:text-lg">
                    Join thousands of sports professionals optimizing performance with data-driven insights.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="coach">Coach</SelectItem>
                        <SelectItem value="athlete">Athlete</SelectItem>
                        <SelectItem value="physiotherapist">Physiotherapist</SelectItem>
                        <SelectItem value="nutritionist">Nutritionist</SelectItem>
                        <SelectItem value="other">Other Sports Professional</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    This helps us customize your experience on the platform.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <span className="text-xs text-muted-foreground">Min. 8 characters</span>
                  </div>
                  <Input id="password" type="password" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-primary underline underline-offset-2">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-primary underline underline-offset-2">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Create Account
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-primary underline underline-offset-2">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:flex items-center justify-center rounded-lg bg-muted p-8">
              <div className="space-y-4 text-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Sports professionals collaborating"
                  className="mx-auto rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Tailored for Your Role</h3>
                  <p className="text-muted-foreground">
                  Whether you're a coach, athlete, physiotherapist, or nutritionist, CoachSync provides specialized
                  tools for your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">CoachSync</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CoachSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}