"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Activity } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { signUpSchema } from "@/lib/validations/auth";
import FormError from "@/components/FormError";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Zod validation
    const parsed = signUpSchema.safeParse(formData);
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      return;
    }

    const { email, password } = formData;
    try {
      // Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      console.log("User signed up:", data);
      alert("Sign-up successful! Please check your email for verification.");
      window.location.href = "/dashboard";
    } catch (err) {
      setError((err as Error).message || "An error occurred during sign-up.");
    }
  };

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
            <h1 className="text-2xl font-bold tracking-tight">Create Your Account</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and create a password to get started with CoachSync.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="you@example.com" required onChange={handleInputChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" required onChange={handleInputChange} />
              <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <FormError message={error} />
          </form>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-primary underline underline-offset-2">
                Sign in
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