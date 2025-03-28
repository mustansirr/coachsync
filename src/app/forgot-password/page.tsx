import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Activity } from "lucide-react"

export default function ForgotPasswordPage() {
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
        <div className="container mx-auto flex items-center justify-center py-10 md:py-20">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter">Reset Your Password</h1>
              <p className="text-muted-foreground">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="coach@example.com" required />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Reset Link
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link href="/sign-in" className="text-primary underline underline-offset-2">
                  Back to sign in
                </Link>
              </p>
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

