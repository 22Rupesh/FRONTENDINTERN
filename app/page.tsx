import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Palette, Layout, Navigation } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Enterprise Design System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A comprehensive, accessible, and scalable design system for enterprise applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Palette className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Color System</CardTitle>
            <CardDescription>A token-based color system supporting B2B enterprise UI needs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Includes primary, secondary, tertiary, neutral, and semantic colors with WCAG-compliant contrast ratios.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/colors">
                Explore Colors <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Layout className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Data Display</CardTitle>
            <CardDescription>Reusable components for displaying data in various formats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Includes accordion, tags/badges, tooltips, and more with full accessibility support.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/components/accordion">
                Explore Components <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Navigation className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Navigation</CardTitle>
            <CardDescription>Components for helping users navigate through applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Includes sidebar navigation, tabs, breadcrumbs, and more with responsive behavior.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/components/sidebar">
                Explore Navigation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="border rounded-lg p-6 bg-muted/50">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p className="mb-4">
          This design system is built with React, TypeScript, and Tailwind CSS. It's designed to be scalable,
          accessible, and easy to use.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>For Designers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore our color system, component guidelines, and design principles to ensure consistency across your
                designs.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/colors">View Design Guidelines</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Developers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Find component documentation, props, and usage examples to implement the design system in your
                applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/components/accordion">View Component API</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
