import { TabsDemo } from "@/components/tabs-demo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import { User, Settings, Bell } from "lucide-react"

export default function TabsPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-6">Tabs</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        A set of layered sections of content that display one panel of content at a time.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className="max-w-md mx-auto">
              <TabsDemo />
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Anatomy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Tabs:</strong> The container component
              </li>
              <li>
                <strong>TabsList:</strong> The list of tab triggers
              </li>
              <li>
                <strong>TabsTrigger:</strong> The clickable tab button
              </li>
              <li>
                <strong>TabsContent:</strong> The content for each tab
              </li>
            </ul>
          </div>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Accessibility</AlertTitle>
            <AlertDescription>
              Uses ARIA roles and keyboard navigation following the WAI-ARIA Tabs Pattern.
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
              Tabs are used to organize content into separate views where only one view can be visible at a time.
            </p>
            <CodeBlock language="tsx">{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Account settings content
      </TabsContent>
      <TabsContent value="password">
        Password settings content
      </TabsContent>
    </Tabs>
  )
}`}</CodeBlock>
          </div>
        </TabsContent>
        <TabsContent value="props">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Props</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Tabs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>defaultValue</code>: string - The value of the tab that should be active when initially rendered
                </li>
                <li>
                  <code>value</code>: string - The controlled value of the tab to activate
                </li>
                <li>
                  <code>onValueChange</code>: function - Callback when the value changes
                </li>
                <li>
                  <code>orientation</code>: "horizontal" | "vertical" - The orientation of the tabs
                </li>
                <li>
                  <code>dir</code>: "ltr" | "rtl" - The reading direction
                </li>
                <li>
                  <code>activationMode</code>: "automatic" | "manual" - Whether tabs are activated automatically on
                  focus
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">TabsList</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>loop</code>: boolean - Whether keyboard navigation should loop
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">TabsTrigger</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>value</code>: string - A unique value for the tab
                </li>
                <li>
                  <code>disabled</code>: boolean - Whether the tab is disabled
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">TabsContent</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code>value</code>: string - A unique value that matches a trigger
                </li>
                <li>
                  <code>forceMount</code>: boolean - Force mounting when not active
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
                <h3 className="text-lg font-medium mb-2">Vertical Tabs</h3>
                <div className="max-w-md mx-auto">
                  <Tabs defaultValue="tab1" orientation="vertical" className="flex">
                    <TabsList className="flex flex-col h-full w-[200px] mr-4">
                      <TabsTrigger value="tab1" className="justify-start">
                        First Tab
                      </TabsTrigger>
                      <TabsTrigger value="tab2" className="justify-start">
                        Second Tab
                      </TabsTrigger>
                      <TabsTrigger value="tab3" className="justify-start">
                        Third Tab
                      </TabsTrigger>
                    </TabsList>
                    <div className="flex-1">
                      <TabsContent value="tab1" className="border rounded-md p-4">
                        Content for the first tab.
                      </TabsContent>
                      <TabsContent value="tab2" className="border rounded-md p-4">
                        Content for the second tab.
                      </TabsContent>
                      <TabsContent value="tab3" className="border rounded-md p-4">
                        Content for the third tab.
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">With Icons</h3>
                <div className="max-w-md mx-auto">
                  <Tabs defaultValue="profile">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="profile" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </TabsTrigger>
                      <TabsTrigger value="settings" className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </TabsTrigger>
                      <TabsTrigger value="notifications" className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        <span>Notifications</span>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile" className="border rounded-md p-4 mt-2">
                      Profile content
                    </TabsContent>
                    <TabsContent value="settings" className="border rounded-md p-4 mt-2">
                      Settings content
                    </TabsContent>
                    <TabsContent value="notifications" className="border rounded-md p-4 mt-2">
                      Notifications content
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Disabled Tab</h3>
                <div className="max-w-md mx-auto">
                  <Tabs defaultValue="tab1">
                    <TabsList>
                      <TabsTrigger value="tab1">Available</TabsTrigger>
                      <TabsTrigger value="tab2" disabled>
                        Disabled
                      </TabsTrigger>
                      <TabsTrigger value="tab3">Available</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="border rounded-md p-4 mt-2">
                      Content for the first tab.
                    </TabsContent>
                    <TabsContent value="tab2" className="border rounded-md p-4 mt-2">
                      This content is not accessible because the tab is disabled.
                    </TabsContent>
                    <TabsContent value="tab3" className="border rounded-md p-4 mt-2">
                      Content for the third tab.
                    </TabsContent>
                  </Tabs>
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
              <li>Use tabs for switching between related content views</li>
              <li>Keep tab labels short and descriptive</li>
              <li>Use consistent content structure across tabs</li>
              <li>Ensure tab content is of similar importance</li>
              <li>Make the active tab visually distinct</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Don't use tabs for sequential steps (use a wizard instead)</li>
              <li>Avoid using too many tabs in a single view</li>
              <li>Don't hide critical information behind tabs</li>
              <li>Avoid using tabs for unrelated content</li>
              <li>Don't use tabs for primary navigation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
