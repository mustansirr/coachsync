"use client";
import Link from "next/link"
import Image from "next/image"
import coachDashboardImage from "@/images/coach-dashboard.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Activity } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error signing in:", error.message);
    } else {
      console.log("Signed in successfully:", data);
      router.push("/dashboard"); // Redirect to dashboard after successful sign-in
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
    {/* Header */}
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CoachSync</span>
        </Link>
      </div>
    </header>

    <main className="flex-1 flex items-center justify-center">
      <div className="container max-w-md mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Sign in to access your coaching dashboard.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="you@example.com" required />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-primary underline underline-offset-2">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" name="password" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-primary underline underline-offset-2">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>

    {/* Footer */}
    <footer className="w-full border-t bg-background py-4">
      <div className="container max-w-screen-xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold">CoachSync</span>
        </div>
        <div className="flex items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CoachSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
  )
}