import { SidebarDemo } from "@/components/sidebar-demo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function SidebarPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Sidebar Navigation</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        A vertical navigation component that can be collapsed and expanded, providing access to different sections of an
        application.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className="h-[400px] border rounded-lg overflow-hidden">
              <SidebarDemo />
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Anatomy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Container:</strong> The sidebar wrapper
              </li>
              <li>
                <strong>Header:</strong> Optional top section (logo, title)
              </li>
              <li>
                <strong>Content:</strong> Main navigation items
              </li>
              <li>
                <strong>Footer:</strong> Optional bottom section
              </li>
              <li>
                <strong>Trigger:</strong> Toggle for collapse/expand
              </li>
            </ul>
          </div>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Accessibility</AlertTitle>
            <AlertDescription>
              Supports keyboard navigation and includes proper ARIA attributes for screen readers.
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
              The Sidebar component is used for primary navigation in applications, providing access to different
              sections and features.
            </p>
            <CodeBlock language="tsx">{`import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarTrigger
} from "@/components/ui/sidebar"

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          {/* Logo and title */}
        </SidebarHeader>
        <SidebarContent>
          {/* Navigation items */}
        </SidebarContent>
        <SidebarFooter>
          {/* Footer content */}
        </SidebarFooter>
      </Sidebar>
      <main>
        <SidebarTrigger />
        {/* Main content */}
      </main>
    </SidebarProvider>
  )
}`}</CodeBlock>
          </div>
        </TabsContent>
        <TabsContent value="props">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Props</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">SidebarProvider</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>defaultOpen</code>: boolean - Default open state
                </li>
                <li>
                  <code>open</code>: boolean - Controlled open state
                </li>
                <li>
                  <code>onOpenChange</code>: function - Called when open state changes
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Sidebar</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>side</code>: "left" | "right" - The side of the sidebar
                </li>
                <li>
                  <code>variant</code>: "sidebar" | "floating" | "inset" - The variant of the sidebar
                </li>
                <li>
                  <code>collapsible</code>: "offcanvas" | "icon" | "none" - Collapsible behavior
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">SidebarMenu Components</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>SidebarMenuButton</code>: <code>variant</code>, <code>size</code>, <code>isActive</code>,{" "}
                  <code>tooltip</code>
                </li>
                <li>
                  <code>SidebarMenuItem</code>: Container for menu items
                </li>
                <li>
                  <code>SidebarMenuAction</code>: <code>showOnHover</code> - Optional action button
                </li>
                <li>
                  <code>SidebarMenuBadge</code>: For displaying counts or status
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
                <h3 className="text-lg font-medium mb-2">Collapsible Variants</h3>
                <p className="mb-2">The sidebar supports different collapsible behaviors:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>offcanvas</strong>: Slides completely off-screen when collapsed
                  </li>
                  <li>
                    <strong>icon</strong>: Collapses to show only icons
                  </li>
                  <li>
                    <strong>none</strong>: Always visible, not collapsible
                  </li>
                </ul>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <p className="text-sm text-muted-foreground">
                    Example: <code>{'<Sidebar collapsible="icon" />'}</code>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">With Nested Navigation</h3>
                <p className="mb-4">Sidebar can contain nested navigation items using SidebarMenuSub components.</p>
                <CodeBlock language="tsx">{`<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <FolderIcon />
      <span>Projects</span>
    </SidebarMenuButton>
    <SidebarMenuSub>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton>Project A</SidebarMenuSubButton>
      </SidebarMenuSubItem>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton>Project B</SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </SidebarMenuSub>
  </SidebarMenuItem>
</SidebarMenu>`}</CodeBlock>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">With Badges</h3>
                <p className="mb-4">Menu items can include badges to show counts or status indicators.</p>
                <CodeBlock language="tsx">{`<SidebarMenuItem>
  <SidebarMenuButton>
    <InboxIcon />
    <span>Inbox</span>
  </SidebarMenuButton>
  <SidebarMenuBadge>24</SidebarMenuBadge>
</SidebarMenuItem>`}</CodeBlock>
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
              <li>Organize navigation items in a logical hierarchy</li>
              <li>Use icons to enhance recognition</li>
              <li>Clearly indicate the active/current section</li>
              <li>Ensure the sidebar is responsive on all devices</li>
              <li>Use consistent styling for navigation items</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Don't include too many items in the sidebar</li>
              <li>Avoid deep nesting of navigation items</li>
              <li>Don't use the sidebar for content that isn't navigation</li>
              <li>Avoid using too many different styles for items</li>
              <li>Don't hide critical navigation in collapsed sections</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
