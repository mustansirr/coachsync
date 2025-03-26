import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Activity, BarChart3, Clock, Database, LineChart, MessageSquare, Shield, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CoachSync</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Benefits
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Ultimate Hub for Coaching Excellence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Integrate data from wearables, physiotherapists, and nutritionists to make informed decisions,
                    optimize training, and prevent injuries.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Book a Demo
                  </Button>
                </div>
              </div>
              <Image
                src="/hero-image.png"
                width={600}
                height={600}
                alt="CoachSync Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-[110%] lg:w-[120%] lg:-ml-10"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need in One Platform
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  CoachSync brings together all the tools and data you need to take your coaching to the next level.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Database className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Data Integration</h3>
                <p className="text-center text-muted-foreground">
                  Seamlessly connect data from wearables, health records, and specialist reports.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Gain insights with powerful analytics and customizable dashboards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Team Collaboration</h3>
                <p className="text-center text-muted-foreground">
                  Collaborate with physiotherapists, nutritionists, and other specialists.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <LineChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Performance Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Track progress over time with comprehensive performance metrics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <MessageSquare className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Communication Tools</h3>
                <p className="text-center text-muted-foreground">
                  Keep everyone on the same page with integrated messaging and notifications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Secure & Compliant</h3>
                <p className="text-center text-muted-foreground">
                  Rest easy knowing all data is securely stored and HIPAA compliant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transform Your Coaching Approach
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  CoachSync empowers coaches to make data-driven decisions that improve athlete performance and reduce
                  injury risk.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Save Time</h3>
                    <p className="text-muted-foreground">
                      Reduce administrative work by up to 70% with automated data collection and reporting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Improve Performance</h3>
                    <p className="text-muted-foreground">
                      Athletes coached with CoachSync show an average 15% improvement in key performance metrics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Reduce Injuries</h3>
                    <p className="text-muted-foreground">
                      Early warning indicators help reduce injury rates by up to 30% through preventative interventions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Enhance Collaboration</h3>
                    <p className="text-muted-foreground">
                      Break down silos between specialists and create a unified approach to athlete development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple to Set Up, Powerful to Use
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Get started in minutes and unlock the full potential of your coaching team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={310}
                alt="CoachSync Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Connect Your Devices</h3>
                      <p className="text-muted-foreground">
                        Integrate with popular wearables, health systems, and third-party apps.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Invite Your Team</h3>
                      <p className="text-muted-foreground">
                        Add physiotherapists, nutritionists, and other specialists to your coaching circle.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Customize Your Dashboard</h3>
                      <p className="text-muted-foreground">
                        Set up personalized views for different athletes and performance metrics.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Start Making Better Decisions</h3>
                      <p className="text-muted-foreground">
                        Use insights and recommendations to optimize training and prevent injuries.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Leading Coaches</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  See what coaches and sports professionals are saying about CoachSync.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={60}
                    height={60}
                    alt="Coach portrait"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Head Coach, Elite Athletics</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "CoachSync has revolutionized how our coaching team works together. Having all our athlete data in one
                  place has helped us identify patterns we were missing before and make more informed decisions."
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={60}
                    height={60}
                    alt="Coach portrait"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Michael Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Performance Director, Pro Soccer Team</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "The injury prevention insights alone have saved us countless hours of lost training time. Our
                  physiotherapists and coaches are finally on the same page, and our athletes are performing better than
                  ever."
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={60}
                    height={60}
                    alt="Coach portrait"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Emma Chen</h3>
                    <p className="text-sm text-muted-foreground">Sports Nutritionist, Olympic Team</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "As a nutritionist, I can now see how my dietary recommendations impact performance metrics in
                  real-time. The collaboration features make it easy to coordinate with coaches and other specialists."
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={60}
                    height={60}
                    alt="Coach portrait"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">David Thompson</h3>
                    <p className="text-sm text-muted-foreground">Athletic Director, University Sports</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "Implementing CoachSync across all our sports programs has streamlined our operations and improved
                  athlete outcomes. The ROI has been incredible, both in terms of performance and reduced injury rates."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Coaching?
              </h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed">
                Join thousands of coaches who are using data to achieve breakthrough results.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80">No credit card required. 14-day free trial.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
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

