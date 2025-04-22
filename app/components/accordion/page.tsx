import { AccordionContent } from "@/components/ui/accordion"
import { AccordionTrigger } from "@/components/ui/accordion"
import { AccordionItem } from "@/components/ui/accordion"
import { Accordion } from "@/components/ui/accordion"
import { AccordionDemo } from "@/components/accordion-demo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function AccordionPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Accordion</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        A vertically stacked set of interactive headings that each reveal a section of content.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className="max-w-md mx-auto">
              <AccordionDemo />
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Anatomy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Accordion:</strong> The container component
              </li>
              <li>
                <strong>AccordionItem:</strong> Individual collapsible section
              </li>
              <li>
                <strong>AccordionTrigger:</strong> The clickable header
              </li>
              <li>
                <strong>AccordionContent:</strong> The expandable content
              </li>
            </ul>
          </div>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Accessibility</AlertTitle>
            <AlertDescription>
              Uses ARIA attributes for screen readers and supports keyboard navigation.
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
              The Accordion component is used to organize content into collapsible sections, allowing users to show and
              hide related information.
            </p>
            <CodeBlock language="tsx">{`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}</CodeBlock>
          </div>
        </TabsContent>
        <TabsContent value="props">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Props</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Accordion</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>type</code>: "single" | "multiple" - Determines if one or multiple items can be open
                </li>
                <li>
                  <code>collapsible</code>: boolean - If true, allows all items to be closed
                </li>
                <li>
                  <code>defaultValue</code>: string | string[] - Default open item(s)
                </li>
                <li>
                  <code>value</code>: string | string[] - Controlled open item(s)
                </li>
                <li>
                  <code>onValueChange</code>: function - Called when value changes
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">AccordionItem</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>value</code>: string - Unique identifier for the item
                </li>
                <li>
                  <code>disabled</code>: boolean - If true, disables the item
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">AccordionTrigger & AccordionContent</h3>
              <p>Accept all standard HTML attributes for their respective elements.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="examples">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Examples</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Multiple Items Open</h3>
                <div className="max-w-md mx-auto">
                  <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>First Section</AccordionTrigger>
                      <AccordionContent>
                        This is the first section content. Multiple sections can be open at once.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Second Section</AccordionTrigger>
                      <AccordionContent>
                        This is the second section content. It can be open at the same time as other sections.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Third Section</AccordionTrigger>
                      <AccordionContent>
                        This is the third section content. Click to expand or collapse.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Disabled Item</h3>
                <div className="max-w-md mx-auto">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Available Section</AccordionTrigger>
                      <AccordionContent>This section can be expanded and collapsed.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" disabled>
                      <AccordionTrigger>Disabled Section</AccordionTrigger>
                      <AccordionContent>This content cannot be accessed because the item is disabled.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
              <li>Use for organizing related content into sections</li>
              <li>Keep accordion headers clear and concise</li>
              <li>Use when space is limited and content can be segmented</li>
              <li>Ensure keyboard navigation works properly</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Don't use for primary navigation</li>
              <li>Avoid nesting accordions too deeply</li>
              <li>Don't hide critical information in accordions</li>
              <li>Avoid using when all content should be visible at once</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
