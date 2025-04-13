import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BellRing, Lock, Moon, Sun, User } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold">
                    AS
                  </div>
                  <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0">
                    <User className="h-4 w-4" />
                    <span className="sr-only">Change Avatar</span>
                  </Button>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Alex Smith</h3>
                  <p className="text-sm text-muted-foreground">Student ID: ST12345</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Alex" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="alex.smith@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Computer Science student with interests in AI and machine learning." />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
              <CardDescription>Update your academic details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="major">Major</Label>
                  <Select defaultValue="cs">
                    <SelectTrigger>
                      <SelectValue placeholder="Select major" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="eng">Engineering</SelectItem>
                      <SelectItem value="bio">Biology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select defaultValue="3">
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Freshman</SelectItem>
                      <SelectItem value="2">Sophomore</SelectItem>
                      <SelectItem value="3">Junior</SelectItem>
                      <SelectItem value="4">Senior</SelectItem>
                      <SelectItem value="5">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gpa">GPA</Label>
                  <Input id="gpa" defaultValue="3.8" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="credits">Credits Completed</Label>
                  <Input id="credits" defaultValue="75" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how the application looks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-3 text-sm font-medium">Theme</h3>
                  <RadioGroup defaultValue="system" className="grid grid-cols-3 gap-4">
                    <div>
                      <RadioGroupItem value="light" id="light" className="sr-only" />
                      <Label
                        htmlFor="light"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                      >
                        <Sun className="mb-3 h-6 w-6" />
                        Light
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="dark" id="dark" className="sr-only" />
                      <Label
                        htmlFor="dark"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                      >
                        <Moon className="mb-3 h-6 w-6" />
                        Dark
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="system" id="system" className="sr-only" />
                      <Label
                        htmlFor="system"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2">
                          <div className="h-2.5 w-5 rounded-full bg-foreground" />
                        </div>
                        System
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-size">Font Size</Label>
                    <span className="text-sm text-muted-foreground">Medium</span>
                  </div>
                  <Input id="font-size" type="range" min="0" max="4" defaultValue="2" className="w-full" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="animations" className="flex items-center gap-2">
                      <span>Reduce Animations</span>
                    </Label>
                    <Switch id="animations" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="contrast" className="flex items-center gap-2">
                      <span>High Contrast</span>
                    </Label>
                    <Switch id="contrast" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  {[
                    { id: "new-quiz", label: "New Quiz Available" },
                    { id: "quiz-reminder", label: "Quiz Deadline Reminders" },
                    { id: "quiz-results", label: "Quiz Results" },
                    { id: "feedback", label: "Teacher Feedback" },
                    { id: "system", label: "System Updates" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <Label htmlFor={`email-${item.id}`} className="flex items-center gap-2">
                        <BellRing className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Label>
                      <Switch id={`email-${item.id}`} defaultChecked={item.id !== "system"} />
                    </div>
                  ))}
                </div>

                <h3 className="text-sm font-medium pt-4">Push Notifications</h3>
                <div className="space-y-2">
                  {[
                    { id: "new-quiz", label: "New Quiz Available" },
                    { id: "quiz-reminder", label: "Quiz Deadline Reminders" },
                    { id: "quiz-results", label: "Quiz Results" },
                    { id: "feedback", label: "Teacher Feedback" },
                    { id: "system", label: "System Updates" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <Label htmlFor={`push-${item.id}`} className="flex items-center gap-2">
                        <BellRing className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Label>
                      <Switch id={`push-${item.id}`} defaultChecked={item.id !== "system"} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control your privacy and security preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Account Privacy</h3>
                <div className="space-y-2">
                  {[
                    { id: "profile-visibility", label: "Make profile visible to other students" },
                    { id: "show-progress", label: "Show my progress to teachers" },
                    { id: "show-activity", label: "Show my activity status" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <Label htmlFor={item.id} className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Label>
                      <Switch id={item.id} defaultChecked />
                    </div>
                  ))}
                </div>

                <h3 className="text-sm font-medium pt-4">Data Usage</h3>
                <div className="space-y-2">
                  {[
                    { id: "analytics", label: "Allow anonymous usage analytics" },
                    { id: "personalization", label: "Personalize content based on my activity" },
                    { id: "third-party", label: "Share data with third-party services" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <Label htmlFor={item.id} className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Label>
                      <Switch id={item.id} defaultChecked={item.id !== "third-party"} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <h3 className="text-sm font-medium">Security</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Lock className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Lock className="mr-2 h-4 w-4" />
                    Enable Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Lock className="mr-2 h-4 w-4" />
                    Manage Connected Devices
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
