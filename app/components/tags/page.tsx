import { TagDemo } from "@/components/tag-demo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import { Badge } from "@/components/ui/badge"

const RemovableTag = ({
  text,
  variant,
}: { text: string; variant?: "default" | "secondary" | "outline" | "destructive" }) => {
  return (
    <Badge variant={variant} className="gap-1">
      {text}
    </Badge>
  )
}

export default function TagsPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Tags / Badges</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Compact elements used to represent attributes, properties, or statuses.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className="flex flex-wrap gap-4">
              <TagDemo />
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Anatomy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Container:</strong> The tag wrapper
              </li>
              <li>
                <strong>Label:</strong> The text content
              </li>
              <li>
                <strong>Icon:</strong> Optional icon (start or end)
              </li>
              <li>
                <strong>Close Button:</strong> Optional remove button
              </li>
            </ul>
          </div>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Accessibility</AlertTitle>
            <AlertDescription>
              Ensure sufficient color contrast and provide appropriate ARIA labels for interactive tags.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Tabs defaultValue="usage" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>
        <TabsContent value="usage">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Usage</h2>
            <p className="mb-4">
              Tags are used to categorize content, indicate status, or display metadata in a compact format.
            </p>
            <CodeBlock language="tsx">{`import { Badge } from "@/components/ui/badge"

export function TagDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`}</CodeBlock>
          </div>
        </TabsContent>
        <TabsContent value="props">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Props</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Badge</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>variant</code>: "default" | "secondary" | "outline" | "destructive"
                </li>
                <li>
                  <code>size</code>: "default" | "sm" | "lg" - Controls the size of the badge
                </li>
                <li>
                  <code>className</code>: string - Additional CSS classes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Tag (Custom Component)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>text</code>: string - The tag text
                </li>
                <li>
                  <code>variant</code>: "default" | "secondary" | "outline" | "destructive"
                </li>
                <li>
                  <code>onRemove</code>: function - Optional callback when remove button is clicked
                </li>
                <li>
                  <code>icon</code>: ReactNode - Optional icon to display
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="examples">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Examples</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Sizes</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge size="sm">Small</Badge>
                  <Badge>Default</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">With Icons</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="gap-1">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Completed
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    Pending
                  </Badge>
                  <Badge variant="destructive" className="gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Error
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Removable Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <RemovableTag text="React" />
                  <RemovableTag text="TypeScript" variant="secondary" />
                  <RemovableTag text="Tailwind" variant="outline" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Do's</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Keep tag text short and concise</li>
              <li>Use consistent styling for similar types of tags</li>
              <li>Use semantic colors for status indicators</li>
              <li>Ensure sufficient contrast between tag and background</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Don't use too many tags in a single view</li>
              <li>Avoid long text in tags</li>
              <li>Don't use tags for primary actions</li>
              <li>Avoid using too many different colors for tags</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
