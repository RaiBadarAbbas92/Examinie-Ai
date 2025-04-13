import { ArrowUpRight, HelpCircle, Save, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

export default function AllFeaturesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Platform Control Center</h1>
        <p className="text-slate-400 mt-1">
          Comprehensive management of all platform features and configurations
        </p>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input
            placeholder="Search features..."
            className="pl-10 bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-500"
          />
        </div>
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Save className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      {/* Feature Controls */}
      <Tabs defaultValue="subscriptions" className="w-full">
        <TabsList className="bg-slate-800 border border-slate-700 p-1">
          <TabsTrigger
            value="subscriptions"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Subscriptions
          </TabsTrigger>
          <TabsTrigger
            value="user-management"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            User Management
          </TabsTrigger>
          <TabsTrigger
            value="content"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Content
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="integrations"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Integrations
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        {/* Subscriptions Tab */}
        <TabsContent value="subscriptions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Subscription Plans</CardTitle>
                <CardDescription className="text-slate-400">
                  Manage available subscription plans
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Basic Plan */}
                <div className="p-4 rounded-lg border border-slate-700 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-white flex items-center">
                      Basic Plan
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    <Switch id="basic-active" defaultChecked />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm text-slate-400">Monthly Price</Label>
                      <Input defaultValue="9.99" className="bg-slate-900 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm text-slate-400">Annual Price</Label>
                      <Input defaultValue="99.99" className="bg-slate-900 border-slate-700 text-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Features</Label>
                    <Input 
                      defaultValue="Generate up to 10 quizzes per month, Basic analytics, Email support, 1 user account" 
                      className="bg-slate-900 border-slate-700 text-slate-200" 
                    />
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="p-4 rounded-lg border border-slate-700 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-white flex items-center">
                      Pro Plan
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    <Switch id="pro-active" defaultChecked />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm text-slate-400">Monthly Price</Label>
                      <Input defaultValue="19.99" className="bg-slate-900 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm text-slate-400">Annual Price</Label>
                      <Input defaultValue="199.99" className="bg-slate-900 border-slate-700 text-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Features</Label>
                    <Input 
                      defaultValue="Generate unlimited quizzes, Advanced analytics, Priority support, 5 user accounts, Custom branding" 
                      className="bg-slate-900 border-slate-700 text-slate-200" 
                    />
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="p-4 rounded-lg border border-slate-700 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-white flex items-center">
                      Enterprise Plan
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    <Switch id="enterprise-active" defaultChecked />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm text-slate-400">Monthly Price</Label>
                      <Input defaultValue="49.99" className="bg-slate-900 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm text-slate-400">Annual Price</Label>
                      <Input defaultValue="499.99" className="bg-slate-900 border-slate-700 text-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Features</Label>
                    <Input 
                      defaultValue="All Pro features, Dedicated account manager, API access, SSO integration, Unlimited user accounts" 
                      className="bg-slate-900 border-slate-700 text-slate-200" 
                    />
                  </div>
                </div>

                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                  Add New Subscription Plan
                </Button>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="ml-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Save Subscription Settings
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Payment & Billing</CardTitle>
                <CardDescription className="text-slate-400">
                  Configure payment providers and billing settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Processors */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">Payment Processors</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <Label className="text-slate-300">Stripe</Label>
                    </div>
                    <Switch id="stripe-active" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <Label className="text-slate-300">PayPal</Label>
                    </div>
                    <Switch id="paypal-active" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-400">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <Label className="text-slate-300">Apple Pay</Label>
                    </div>
                    <Switch id="apple-pay-active" />
                  </div>
                </div>

                {/* Invoice Settings */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">Invoice Settings</h3>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Invoice Prefix</Label>
                    <Input defaultValue="INV-" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Payment Terms (days)</Label>
                    <Input type="number" defaultValue="30" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Send Invoice Reminders</Label>
                    <Switch id="invoice-reminders" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Auto-generate Receipts</Label>
                    <Switch id="auto-receipts" defaultChecked />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <Link 
                    href="/admin/invoice-template" 
                    className="flex items-center text-secondary hover:underline text-sm"
                  >
                    Customize Invoice Template
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="ml-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Save Payment Settings
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="mt-6 bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Subscription Automation</CardTitle>
              <CardDescription className="text-slate-400">
                Configure automatic subscription processes and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">Renewal Settings</h3>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Renewal Reminder (days before)</Label>
                    <Select defaultValue="7">
                      <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="5">5 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Auto-renew by Default</Label>
                    <Switch id="auto-renew" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Retry Failed Payments</Label>
                    <Switch id="retry-payments" defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Failed Payment Retries</Label>
                    <Select defaultValue="3">
                      <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectValue placeholder="Select retry count" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectItem value="1">1 attempt</SelectItem>
                        <SelectItem value="2">2 attempts</SelectItem>
                        <SelectItem value="3">3 attempts</SelectItem>
                        <SelectItem value="5">5 attempts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">Cancellation & Grace Period</h3>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Grace Period After Expiration (days)</Label>
                    <Select defaultValue="7">
                      <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectItem value="0">No grace period</SelectItem>
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Allow Self-cancellation</Label>
                    <Switch id="self-cancellation" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Send Cancellation Survey</Label>
                    <Switch id="cancellation-survey" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Offer Discounts on Cancellation</Label>
                    <Switch id="cancellation-discounts" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-700">
                <h3 className="text-sm font-medium text-white">Promo Codes & Discounts</h3>
                
                <div className="flex items-center justify-between">
                  <Label className="text-slate-300">Enable Promo Codes</Label>
                  <Switch id="promo-codes" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-slate-400">Default Discount (% off)</Label>
                  <Slider defaultValue={[10]} max={100} step={5} />
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Label className="text-slate-300">Offer Trial Periods</Label>
                  <Switch id="trial-periods" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-slate-400">Default Trial Period (days)</Label>
                  <Input type="number" defaultValue="14" className="bg-slate-900 border-slate-700 text-slate-200" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4">
              <Button className="ml-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Save Automation Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="user-management" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">User Roles & Permissions</CardTitle>
                <CardDescription className="text-slate-400">
                  Manage roles and their access levels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Admin Role */}
                <div className="p-4 rounded-lg border border-slate-700 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-white">Admin Role</div>
                    <Switch id="admin-role-active" defaultChecked />
                  </div>
                  <p className="text-sm text-slate-400">Full system access with all permissions</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">User Management</span>
                      <span className="text-green-400">Full Access</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Content Management</span>
                      <span className="text-green-400">Full Access</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Subscription Management</span>
                      <span className="text-green-400">Full Access</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">System Configuration</span>
                      <span className="text-green-400">Full Access</span>
                    </div>
                  </div>
                </div>

                {/* Teacher Role */}
                <div className="p-4 rounded-lg border border-slate-700 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-white">Teacher Role</div>
                    <Switch id="teacher-role-active" defaultChecked />
                  </div>
                  <p className="text-sm text-slate-400">Access to create and manage exams and student data</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Create Exams</span>
                      <Switch id="teacher-create-exams" defaultChecked size="sm" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">View Student Data</span>
                      <Switch id="teacher-view-students" defaultChecked size="sm" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Upload Content</span>
                      <Switch id="teacher-upload" defaultChecked size="sm" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Generate Reports</span>
                      <Switch id="teacher-reports" defaultChecked size="sm" />
                    </div>
                  </div>
                </div>

                {/* Student Role */}
                <div className="p-4 rounded-lg border border-slate-700 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-white">Student Role</div>
                    <Switch id="student-role-active" defaultChecked />
                  </div>
                  <p className="text-sm text-slate-400">Access to take exams and view personal results</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Take Exams</span>
                      <Switch id="student-take-exams" defaultChecked size="sm" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">View Own Results</span>
                      <Switch id="student-view-results" defaultChecked size="sm" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Generate Practice Tests</span>
                      <Switch id="student-practice" defaultChecked size="sm" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Access Analytics</span>
                      <Switch id="student-analytics" defaultChecked size="sm" />
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                  Create Custom Role
                </Button>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="ml-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Save Role Settings
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">User Registration & Authentication</CardTitle>
                <CardDescription className="text-slate-400">
                  Configure user authentication and registration options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Registration Settings */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">Registration Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Allow Public Registration</Label>
                    <Switch id="public-registration" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Email Verification Required</Label>
                    <Switch id="email-verification" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Allow Social Login</Label>
                    <Switch id="social-login" defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Default User Role</Label>
                    <Select defaultValue="student">
                      <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectValue placeholder="Select default role" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Authentication Settings */}
                <div className="space-y-4 pt-4 border-t border-slate-700">
                  <h3 className="text-sm font-medium text-white">Authentication Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Two-Factor Authentication</Label>
                    <Switch id="two-factor" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Single Sign-On (SSO)</Label>
                    <Switch id="sso" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Session Timeout (minutes)</Label>
                    <Input type="number" defaultValue="60" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-400">Password Policy</Label>
                    <Select defaultValue="strong">
                      <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectValue placeholder="Select password policy" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                        <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                        <SelectItem value="medium">Medium (8+ chars with numbers)</SelectItem>
                        <SelectItem value="strong">Strong (8+ chars with numbers & symbols)</SelectItem>
                        <SelectItem value="custom">Custom Policy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Privacy & Data */}
                <div className="space-y-4 pt-4 border-t border-slate-700">
                  <h3 className="text-sm font-medium text-white">Privacy & Data Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">GDPR Compliance Mode</Label>
                    <Switch id="gdpr-mode" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Data Anonymization</Label>
                    <Switch id="data-anonymization" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Cookie Consent Required</Label>
                    <Switch id="cookie-consent" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Allow User Data Export</Label>
                    <Switch id="data-export" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <Button className="ml-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Save Authentication Settings
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="mt-6 bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">User Limits & Quotas</CardTitle>
              <CardDescription className="text-slate-400">
                Configure resource limits for different user types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">Student Limits</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">Max Generated Quizzes</Label>
                      <span className="text-xs text-slate-400">Per month</span>
                    </div>
                    <Input type="number" defaultValue="50" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">Max File Storage</Label>
                      <span className="text-xs text-slate-400">MB</span>
                    </div>
                    <Input type="number" defaultValue="500" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">Max Upload Size</Label>
                      <span className="text-xs text-slate-400">MB per file</span>
                    </div>
                    <Input type="number" defaultValue="50" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">Teacher Limits</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">Max Exams</Label>
                      <span className="text-xs text-slate-400">Per month</span>
                    </div>
                    <Input type="number" defaultValue="100" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">Max File Storage</Label>
                      <span className="text-xs text-slate-400">MB</span>
                    </div>
                    <Input type="number" defaultValue="2000" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">Max Students</Label>
                      <span className="text-xs text-slate-400">Per account</span>
                    </div>
                    <Input type="number" defaultValue="200" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white">API Limits</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">API Rate Limit</Label>
                      <span className="text-xs text-slate-400">Requests per minute</span>
                    </div>
                    <Input type="number" defaultValue="60" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-sm text-slate-400">Daily API Calls</Label>
                      <span className="text-xs text-slate-400">Max per day</span>
                    </div>
                    <Input type="number" defaultValue="10000" className="bg-slate-900 border-slate-700 text-slate-200" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Rate Limiting Enabled</Label>
                    <Switch id="rate-limiting" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-slate-400" />
                <p className="text-sm text-slate-400">
                  These limits apply to default users. Individual limits can be adjusted in user settings.
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4">
              <Button className="ml-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Save Quota Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>\
