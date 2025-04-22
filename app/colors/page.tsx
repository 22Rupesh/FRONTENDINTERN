import { ColorPalette } from "@/components/color-palette"
import { ColorSwatch } from "@/components/color-swatch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function ColorsPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Color System</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Our token-based color system supports B2B enterprise UI needs with WCAG-compliant contrast ratios.
      </p>

      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertTitle>Accessibility Note</AlertTitle>
        <AlertDescription>
          All color combinations in this system meet WCAG 2.1 AA standards for contrast ratio (4.5:1 for normal text,
          3:1 for large text).
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="primary" className="mb-12">
        <TabsList className="mb-6">
          <TabsTrigger value="primary">Primary Colors</TabsTrigger>
          <TabsTrigger value="neutral">Neutral Colors</TabsTrigger>
          <TabsTrigger value="semantic">Semantic Colors</TabsTrigger>
          <TabsTrigger value="surface">Surface & Background</TabsTrigger>
        </TabsList>
        <TabsContent value="primary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColorPalette title="Primary" description="Main brand color used for primary actions and key UI elements">
              <ColorSwatch
                color="bg-primary"
                name="primary"
                value="hsl(222.2, 47.4%, 11.2%)"
                textColor="text-primary-foreground"
              />
              <ColorSwatch color="bg-primary-foreground" name="primary-foreground" value="hsl(210, 40%, 98%)" />
            </ColorPalette>

            <ColorPalette title="Secondary" description="Used for secondary actions and supporting UI elements">
              <ColorSwatch color="bg-secondary" name="secondary" value="hsl(210, 40%, 96.1%)" />
              <ColorSwatch
                color="bg-secondary-foreground"
                name="secondary-foreground"
                value="hsl(222.2, 47.4%, 11.2%)"
                textColor="text-secondary-foreground"
              />
            </ColorPalette>

            <ColorPalette title="Tertiary" description="Used for tertiary actions and subtle UI elements">
              <ColorSwatch color="bg-muted" name="muted" value="hsl(210, 40%, 96.1%)" />
              <ColorSwatch
                color="bg-muted-foreground"
                name="muted-foreground"
                value="hsl(215.4, 16.3%, 46.9%)"
                textColor="text-muted-foreground"
              />
            </ColorPalette>
          </div>
        </TabsContent>

        <TabsContent value="neutral">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColorPalette title="Background" description="Used for page backgrounds">
              <ColorSwatch color="bg-background" name="background" value="hsl(0, 0%, 100%)" />
              <ColorSwatch
                color="bg-foreground"
                name="foreground"
                value="hsl(222.2, 47.4%, 11.2%)"
                textColor="text-foreground"
              />
            </ColorPalette>

            <ColorPalette title="Border" description="Used for borders and dividers">
              <ColorSwatch color="bg-border" name="border" value="hsl(214.3, 31.8%, 91.4%)" />
              <ColorSwatch color="bg-input" name="input" value="hsl(214.3, 31.8%, 91.4%)" />
            </ColorPalette>

            <ColorPalette title="Ring" description="Used for focus rings">
              <ColorSwatch color="bg-ring" name="ring" value="hsl(215, 20.2%, 65.1%)" />
              <ColorSwatch color="bg-accent" name="accent" value="hsl(210, 40%, 96.1%)" />
              <ColorSwatch
                color="bg-accent-foreground"
                name="accent-foreground"
                value="hsl(222.2, 47.4%, 11.2%)"
                textColor="text-accent-foreground"
              />
            </ColorPalette>
          </div>
        </TabsContent>

        <TabsContent value="semantic">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorPalette title="Success" description="Used for success states and positive feedback">
              <ColorSwatch color="bg-success" name="success" value="hsl(142.1, 76.2%, 36.3%)" textColor="text-white" />
              <ColorSwatch
                color="bg-success-foreground"
                name="success-foreground"
                value="hsl(0, 0%, 100%)"
                textColor="text-black"
              />
            </ColorPalette>

            <ColorPalette title="Info" description="Used for informational states and neutral feedback">
              <ColorSwatch color="bg-info" name="info" value="hsl(221.2, 83.2%, 53.3%)" textColor="text-white" />
              <ColorSwatch
                color="bg-info-foreground"
                name="info-foreground"
                value="hsl(0, 0%, 100%)"
                textColor="text-black"
              />
            </ColorPalette>

            <ColorPalette title="Warning" description="Used for warning states and cautionary feedback">
              <ColorSwatch color="bg-warning" name="warning" value="hsl(47.9, 95.8%, 53.1%)" />
              <ColorSwatch
                color="bg-warning-foreground"
                name="warning-foreground"
                value="hsl(222.2, 47.4%, 11.2%)"
                textColor="text-warning-foreground"
              />
            </ColorPalette>

            <ColorPalette title="Error" description="Used for error states and negative feedback">
              <ColorSwatch
                color="bg-destructive"
                name="destructive"
                value="hsl(0, 84.2%, 60.2%)"
                textColor="text-white"
              />
              <ColorSwatch
                color="bg-destructive-foreground"
                name="destructive-foreground"
                value="hsl(0, 0%, 100%)"
                textColor="text-black"
              />
            </ColorPalette>
          </div>
        </TabsContent>

        <TabsContent value="surface">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ColorPalette title="Surface" description="Used for card surfaces and elevated UI elements">
              <ColorSwatch color="bg-card" name="card" value="hsl(0, 0%, 100%)" />
              <ColorSwatch
                color="bg-card-foreground"
                name="card-foreground"
                value="hsl(222.2, 47.4%, 11.2%)"
                textColor="text-card-foreground"
              />
            </ColorPalette>

            <ColorPalette title="Popover" description="Used for popovers, dropdowns, and floating UI elements">
              <ColorSwatch color="bg-popover" name="popover" value="hsl(0, 0%, 100%)" />
              <ColorSwatch
                color="bg-popover-foreground"
                name="popover-foreground"
                value="hsl(222.2, 47.4%, 11.2%)"
                textColor="text-popover-foreground"
              />
            </ColorPalette>
          </div>
        </TabsContent>
      </Tabs>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Theme Support</h2>
        <p className="mb-4">
          Our color system supports both light and dark themes. Toggle between themes using the theme switcher in the
          top navigation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 rounded-lg border bg-background">
            <h3 className="text-lg font-medium mb-2">Light Theme</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-8 rounded bg-primary"></div>
              <div className="h-8 rounded bg-secondary"></div>
              <div className="h-8 rounded bg-muted"></div>
              <div className="h-8 rounded bg-accent"></div>
            </div>
          </div>
          <div className="p-6 rounded-lg border bg-black text-white">
            <h3 className="text-lg font-medium mb-2">Dark Theme</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-8 rounded bg-zinc-800"></div>
              <div className="h-8 rounded bg-zinc-700"></div>
              <div className="h-8 rounded bg-zinc-600"></div>
              <div className="h-8 rounded bg-zinc-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Do's</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use primary colors for main actions and key UI elements</li>
              <li>Use semantic colors consistently for their intended purpose</li>
              <li>Maintain sufficient contrast for text readability</li>
              <li>Use neutral colors for backgrounds and supporting elements</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Don't use too many colors in a single interface</li>
              <li>Avoid using semantic colors for non-semantic purposes</li>
              <li>Don't use colors that don't meet accessibility standards</li>
              <li>Avoid using colors that clash with the brand identity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
