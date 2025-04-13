import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Copy, Palette, Save } from "lucide-react"

export default function CustomizationPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Platform Customization</h1>
        <p className="text-slate-400 mt-1">Customize the appearance and behavior of your Examinie AI platform</p>
      </div>

      {/* Customization Tabs */}
      <Tabs defaultValue="branding" className="w-full">
        <TabsList className="bg-slate-800 border border-slate-700 p-1">
          <TabsTrigger
            value="branding"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Branding
          </TabsTrigger>
          <TabsTrigger
            value="appearance"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Appearance
          </TabsTrigger>
          <TabsTrigger
            value="emails"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Email Templates
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Features
          </TabsTrigger>
        </TabsList>

        {/* Branding Tab */}
        <TabsContent value="branding" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Logo & Brand Identity</CardTitle>
                <CardDescription className="text-slate-400">
                  Customize your platform's logo and brand identity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logo" className="text-white">
                    Logo
                  </Label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md bg-slate-700 flex items-center justify-center">
                      <Palette className="h-8 w-8 text-slate-400" />
                    </div>
                    <Button
                      variant="outline"
                      className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
                    >
                      Upload Logo
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="favicon" className="text-white">
                    Favicon
                  </Label>
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-md bg-slate-700 flex items-center justify-center">
                      <Palette className="h-4 w-4 text-slate-400" />
                    </div>
                    <Button
                      variant="outline"
                      className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
                    >
                      Upload Favicon
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-name" className="text-white">
                    Company Name
                  </Label>
                  <Input
                    id="company-name"
                    defaultValue="Examinie AI"
                    className="bg-slate-900 border-slate-700 text-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tagline" className="text-white">
                    Tagline
                  </Label>
                  <Input
                    id="tagline"
                    defaultValue="AI-Powered Exam Creation and Management"
                    className="bg-slate-900 border-slate-700 text-slate-200"
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Brand Colors</CardTitle>
                <CardDescription className="text-slate-400">Customize your platform's color scheme</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-color" className="text-white">
                    Primary Color
                  </Label>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-secondary" />
                    <Input
                      id="primary-color"
                      defaultValue="#7C3AED"
                      className="bg-slate-900 border-slate-700 text-slate-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondary-color" className="text-white">
                    Secondary Color
                  </Label>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-blue-500" />
                    <Input
                      id="secondary-color"
                      defaultValue="#3B82F6"
                      className="bg-slate-900 border-slate-700 text-slate-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accent-color" className="text-white">
                    Accent Color
                  </Label>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-green-500" />
                    <Input
                      id="accent-color"
                      defaultValue="#10B981"
                      className="bg-slate-900 border-slate-700 text-slate-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background-color" className="text-white">
                    Background Color
                  </Label>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-slate-900" />
                    <Input
                      id="background-color"
                      defaultValue="#0F172A"
                      className="bg-slate-900 border-slate-700 text-slate-200"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Custom CSS</CardTitle>
              <CardDescription className="text-slate-400">
                Add custom CSS to further customize your platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="custom-css" className="text-white">
                    Custom CSS
                  </Label>
                  <Button variant="ghost" size="sm" className="h-8 text-slate-400 hover:text-white hover:bg-slate-700">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
                <Textarea
                  id="custom-css"
                  className="min-h-[200px] font-mono text-sm bg-slate-900 border-slate-700 text-slate-200"
                  placeholder=":root { --custom-color: #7C3AED; }"
                  defaultValue={`:root {
  --custom-color: #7C3AED;
  --custom-color-hover: #6D28D9;
}

.custom-button {
  background-color: var(--custom-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.custom-button:hover {
  background-color: var(--custom-color-hover);
}`}
                />
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <Switch id="enable-custom-css" />
                <Label htmlFor="enable-custom-css" className="text-slate-200">
                  Enable Custom CSS
                </Label>
              </div>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Theme Settings</CardTitle>
                <CardDescription className="text-slate-400">Customize the appearance of your platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="default-theme" className="text-white">
                    Default Theme
                  </Label>
                  <Select defaultValue="dark">
                    <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="font-family" className="text-white">
                    Font Family
                  </Label>
                  <Select defaultValue="inter">
                    <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="poppins">Poppins</SelectItem>
                      <SelectItem value="opensans">Open Sans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Border Radius</Label>
                  <div className="pt-2">
                    <Slider defaultValue={[8]} max={16} step={1} />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>0px</span>
                    <span>8px</span>
                    <span>16px</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Animation Speed</Label>
                  <div className="pt-2">
                    <Slider defaultValue={[200]} max={500} step={50} />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Fast</span>
                    <span>Medium</span>
                    <span>Slow</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Layout Settings</CardTitle>
                <CardDescription className="text-slate-400">Customize the layout of your platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sidebar-collapsed" className="text-white">
                    Default Sidebar Collapsed
                  </Label>
                  <Switch id="sidebar-collapsed" />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="show-breadcrumbs" className="text-white">
                    Show Breadcrumbs
                  </Label>
                  <Switch id="show-breadcrumbs" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="compact-mode" className="text-white">
                    Compact Mode
                  </Label>
                  <Switch id="compact-mode" />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="show-footer" className="text-white">
                    Show Footer
                  </Label>
                  <Switch id="show-footer" defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="container-width" className="text-white">
                    Container Width
                  </Label>
                  <Select defaultValue="lg">
                    <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectValue placeholder="Select width" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectItem value="sm">Small</SelectItem>
                      <SelectItem value="md">Medium</SelectItem>
                      <SelectItem value="lg">Large</SelectItem>
                      <SelectItem value="xl">Extra Large</SelectItem>
                      <SelectItem value="full">Full Width</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Email Templates Tab */}
        <TabsContent value="emails" className="mt-6 space-y-6">
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Email Templates</CardTitle>
              <CardDescription className="text-slate-400">Customize the email templates sent to users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="email-template" className="text-white">
                    Select Template
                  </Label>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
                  >
                    Preview
                  </Button>
                </div>
                <Select defaultValue="welcome">
                  <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                    <SelectItem value="welcome">Welcome Email</SelectItem>
                    <SelectItem value="password-reset">Password Reset</SelectItem>
                    <SelectItem value="invoice">Invoice</SelectItem>
                    <SelectItem value="subscription-renewal">Subscription Renewal</SelectItem>
                    <SelectItem value="exam-reminder">Exam Reminder</SelectItem>
                  </SelectContent>
                </Select>

                <div className="space-y-2">
                  <Label htmlFor="email-subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="email-subject"
                    defaultValue="Welcome to Examinie AI!"
                    className="bg-slate-900 border-slate-700 text-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-content" className="text-white">
                    Email Content
                  </Label>
                  <Textarea
                    id="email-content"
                    className="min-h-[300px] bg-slate-900 border-slate-700 text-slate-200"
                    defaultValue={`<h1>Welcome to Examinie AI!</h1>
<p>Dear {{user.name}},</p>
<p>Thank you for signing up for Examinie AI. We're excited to have you on board!</p>
<p>With your {{user.plan}} plan, you can now:</p>
<ul>
  <li>Create custom exams with AI assistance</li>
  <li>Generate quizzes from your study materials</li>
  <li>Track your progress and performance</li>
</ul>
<p>If you have any questions, please don't hesitate to contact our support team.</p>
<p>Best regards,<br>The Examinie AI Team</p>`}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Available Variables</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-900 p-2 rounded-md text-sm text-slate-300">
                      <code>{"{{user.name}}"}</code>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-md text-sm text-slate-300">
                      <code>{"{{user.email}}"}</code>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-md text-sm text-slate-300">
                      <code>{"{{user.plan}}"}</code>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-md text-sm text-slate-300">
                      <code>{"{{invoice.number}}"}</code>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-md text-sm text-slate-300">
                      <code>{"{{invoice.amount}}"}</code>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-md text-sm text-slate-300">
                      <code>{"{{invoice.date}}"}</code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <Switch id="enable-html-emails" defaultChecked />
                <Label htmlFor="enable-html-emails" className="text-slate-200">
                  Enable HTML Emails
                </Label>
              </div>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="mr-2 h-4 w-4" />
                Save Template
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Features Tab */}
        <TabsContent value="features" className="mt-6 space-y-6">
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Feature Management</CardTitle>
              <CardDescription className="text-slate-400">Enable or disable features for your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">AI Quiz Generation</div>
                      <Switch id="feature-ai-quiz" defaultChecked />
                    </div>
                    <p className="text-sm text-slate-400">
                      Allow users to generate quizzes using AI from their study materials
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">Auto Grading</div>
                      <Switch id="feature-auto-grading" defaultChecked />
                    </div>
                    <p className="text-sm text-slate-400">
                      Automatically grade quizzes and provide feedback to students
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">Analytics Dashboard</div>
                      <Switch id="feature-analytics" defaultChecked />
                    </div>
                    <p className="text-sm text-slate-400">
                      Provide detailed analytics and insights on student performance
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">Collaboration Tools</div>
                      <Switch id="feature-collaboration" />
                    </div>
                    <p className="text-sm text-slate-400">
                      Allow teachers to collaborate on creating and managing exams
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">Remote Proctoring</div>
                      <Switch id="feature-proctoring" />
                    </div>
                    <p className="text-sm text-slate-400">
                      Enable remote proctoring for online exams to prevent cheating
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">Custom Branding</div>
                      <Switch id="feature-branding" defaultChecked />
                    </div>
                    <p className="text-sm text-slate-400">
                      Allow institutions to customize the platform with their branding
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">API Access</div>
                      <Switch id="feature-api" />
                    </div>
                    <p className="text-sm text-slate-400">Provide API access for integration with other systems</p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">SSO Integration</div>
                      <Switch id="feature-sso" />
                    </div>
                    <p className="text-sm text-slate-400">
                      Enable Single Sign-On integration with institutional systems
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="mr-2 h-4 w-4" />
                Save Feature Settings
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Feature Limits</CardTitle>
              <CardDescription className="text-slate-400">
                Set limits for features based on subscription plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-white">Quiz Generation Limits</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="basic-quiz-limit" className="text-sm text-slate-400">
                        Basic Plan
                      </Label>
                      <Input
                        id="basic-quiz-limit"
                        type="number"
                        defaultValue="10"
                        className="bg-slate-900 border-slate-700 text-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pro-quiz-limit" className="text-sm text-slate-400">
                        Pro Plan
                      </Label>
                      <Input
                        id="pro-quiz-limit"
                        type="number"
                        defaultValue="50"
                        className="bg-slate-900 border-slate-700 text-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="enterprise-quiz-limit" className="text-sm text-slate-400">
                        Enterprise Plan
                      </Label>
                      <Input
                        id="enterprise-quiz-limit"
                        type="number"
                        defaultValue="Unlimited"
                        className="bg-slate-900 border-slate-700 text-slate-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Storage Limits (MB)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="basic-storage-limit" className="text-sm text-slate-400">
                        Basic Plan
                      </Label>
                      <Input
                        id="basic-storage-limit"
                        type="number"
                        defaultValue="100"
                        className="bg-slate-900 border-slate-700 text-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pro-storage-limit" className="text-sm text-slate-400">
                        Pro Plan
                      </Label>
                      <Input
                        id="pro-storage-limit"
                        type="number"
                        defaultValue="1000"
                        className="bg-slate-900 border-slate-700 text-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="enterprise-storage-limit" className="text-sm text-slate-400">
                        Enterprise Plan
                      </Label>
                      <Input
                        id="enterprise-storage-limit"
                        type="number"
                        defaultValue="10000"
                        className="bg-slate-900 border-slate-700 text-slate-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="mr-2 h-4 w-4" />
                Save Limits
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
