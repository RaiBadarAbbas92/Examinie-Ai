import { ArrowUpDown, BarChart3, Download, Edit, Plus, Settings, Trash } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample subscription data
const subscriptionPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$9.99",
    period: "monthly",
    features: ["Generate up to 10 quizzes per month", "Basic analytics", "Email support", "1 user account"],
    activeUsers: 2451,
    revenue: "$24,485.49",
    growth: "+5%",
  },
  {
    id: 2,
    name: "Pro",
    price: "$19.99",
    period: "monthly",
    features: [
      "Generate unlimited quizzes",
      "Advanced analytics",
      "Priority support",
      "5 user accounts",
      "Custom branding",
    ],
    activeUsers: 3842,
    revenue: "$76,801.58",
    growth: "+12%",
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$49.99",
    period: "monthly",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "API access",
      "SSO integration",
      "Unlimited user accounts",
      "Custom integrations",
    ],
    activeUsers: 1428,
    revenue: "$71,385.72",
    growth: "+18%",
  },
]

// Sample subscription history
const subscriptionHistory = [
  {
    id: 1,
    user: "Emma Thompson",
    plan: "Pro",
    status: "Active",
    startDate: "Jan 15, 2025",
    endDate: "Feb 15, 2025",
    amount: "$19.99",
  },
  {
    id: 2,
    user: "James Wilson",
    plan: "Enterprise",
    status: "Active",
    startDate: "Feb 3, 2025",
    endDate: "Mar 3, 2025",
    amount: "$49.99",
  },
  {
    id: 3,
    user: "Sophia Chen",
    plan: "Basic",
    status: "Active",
    startDate: "Mar 12, 2025",
    endDate: "Apr 12, 2025",
    amount: "$9.99",
  },
  {
    id: 4,
    user: "Michael Brown",
    plan: "Pro",
    status: "Cancelled",
    startDate: "Dec 5, 2024",
    endDate: "Jan 5, 2025",
    amount: "$19.99",
  },
  {
    id: 5,
    user: "Olivia Davis",
    plan: "Basic",
    status: "Active",
    startDate: "Feb 18, 2025",
    endDate: "Mar 18, 2025",
    amount: "$9.99",
  },
  {
    id: 6,
    user: "William Johnson",
    plan: "Enterprise",
    status: "Active",
    startDate: "Nov 30, 2024",
    endDate: "Dec 30, 2024",
    amount: "$49.99",
  },
  {
    id: 7,
    user: "Ava Martinez",
    plan: "Pro",
    status: "Active",
    startDate: "Jan 22, 2025",
    endDate: "Feb 22, 2025",
    amount: "$19.99",
  },
]

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Subscription Management</h1>
          <p className="text-slate-400 mt-1">Manage subscription plans and monitor revenue</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Plan
          </Button>
        </div>
      </div>

      {/* Subscription Tabs */}
      <Tabs defaultValue="plans" className="w-full">
        <TabsList className="bg-slate-800 border border-slate-700 p-1">
          <TabsTrigger
            value="plans"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Plans
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Subscription History
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        {/* Plans Tab */}
        <TabsContent value="plans" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan) => (
              <Card key={plan.id} className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{plan.name}</CardTitle>
                      <CardDescription className="text-slate-400">Subscription Plan</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                          <Settings className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-slate-900 border-slate-700 text-slate-200">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-slate-700" />
                        <DropdownMenuItem className="hover:bg-slate-800 hover:text-white focus:bg-slate-800">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Plan</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500 hover:bg-red-950 hover:text-red-400 focus:bg-red-950">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Delete Plan</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-white">{plan.price}</div>
                    <div className="text-sm text-slate-400">per user / {plan.period}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-white">Features</div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 flex-shrink-0 text-green-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-2 border-t border-slate-700">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-400">Active Users</span>
                      <span className="text-sm font-medium text-white">{plan.activeUsers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-400">Monthly Revenue</span>
                      <span className="text-sm font-medium text-white">{plan.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-400">Growth</span>
                      <span className="text-sm font-medium text-green-400">{plan.growth}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-700 pt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                  >
                    Edit Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="mt-6">
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Subscription History</CardTitle>
              <CardDescription className="text-slate-400">Recent subscription activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                          User
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                          Plan
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                          Status
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                          Start Date
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">End Date</th>
                      <th className="text-right py-3 px-4 text-xs font-medium text-slate-400">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionHistory.map((item) => (
                      <tr key={item.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                        <td className="py-3 px-4 text-sm text-white">{item.user}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.plan === "Enterprise"
                                ? "bg-purple-100 text-purple-800"
                                : item.plan === "Pro"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {item.plan}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-300">{item.startDate}</td>
                        <td className="py-3 px-4 text-sm text-slate-300">{item.endDate}</td>
                        <td className="py-3 px-4 text-sm text-slate-300 text-right">{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Monthly Revenue</CardTitle>
                <CardDescription className="text-slate-400">Total subscription revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">$172,672.79</div>
                <div className="text-sm text-green-400 flex items-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +12.5% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Active Subscriptions</CardTitle>
                <CardDescription className="text-slate-400">Total active subscribers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">7,721</div>
                <div className="text-sm text-green-400 flex items-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +8.3% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Churn Rate</CardTitle>
                <CardDescription className="text-slate-400">Monthly subscription cancellations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">2.4%</div>
                <div className="text-sm text-green-400 flex items-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                      clipRule="evenodd"
                    />
                  </svg>
                  -0.6% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Revenue Breakdown</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </div>
              <CardDescription className="text-slate-400">Monthly revenue by subscription plan</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Revenue chart visualization would appear here</p>
                <p className="text-sm">Showing monthly data with subscription plan breakdowns</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
