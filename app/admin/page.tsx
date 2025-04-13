import { AvatarFallback } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowUpRight, BarChart3, CreditCard, DollarSign, Download, FileText, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  // Sample data for the dashboard
  const stats = [
    {
      title: "Total Users",
      value: "12,345",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Active Subscriptions",
      value: "8,721",
      change: "+8%",
      trend: "up",
      icon: CreditCard,
      color: "bg-green-500",
    },
    {
      title: "Monthly Revenue",
      value: "$48,352",
      change: "+15%",
      trend: "up",
      icon: DollarSign,
      color: "bg-purple-500",
    },
    {
      title: "Exams Created",
      value: "32,891",
      change: "+24%",
      trend: "up",
      icon: FileText,
      color: "bg-amber-500",
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "Emma Thompson",
      email: "emma.t@example.com",
      role: "Student",
      status: "Active",
      date: "2 hours ago",
    },
    {
      id: 2,
      name: "James Wilson",
      email: "james.w@example.com",
      role: "Teacher",
      status: "Active",
      date: "5 hours ago",
    },
    { id: 3, name: "Sophia Chen", email: "sophia.c@example.com", role: "Student", status: "Active", date: "1 day ago" },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.b@example.com",
      role: "Teacher",
      status: "Inactive",
      date: "2 days ago",
    },
    {
      id: 5,
      name: "Olivia Davis",
      email: "olivia.d@example.com",
      role: "Student",
      status: "Active",
      date: "3 days ago",
    },
  ]

  const subscriptionPlans = [
    { id: 1, name: "Basic", users: 2451, revenue: "$12,255", growth: "+5%" },
    { id: 2, name: "Pro", users: 3842, revenue: "$28,970", growth: "+12%" },
    { id: 3, name: "Enterprise", users: 1428, revenue: "$57,127", growth: "+18%" },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome to Admin Dashboard</h1>
          <p className="text-slate-400 mt-1">Monitor and manage your Examinie AI platform</p>
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
            <BarChart3 className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className={`${stat.color} p-2 rounded-lg`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div
                  className={`text-xs font-medium ${stat.trend === "up" ? "text-green-400" : "text-red-400"} flex items-center`}
                >
                  {stat.change}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    {stat.trend === "up" ? (
                      <path
                        fillRule="evenodd"
                        d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-.916.369l-4.453-1.675a.75.75 0 01.526-1.406l3.094 1.161A19.422 19.422 0 007.596 7.47L3.29 11.77a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 010-1.06l.05-.05z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-sm text-slate-400">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <Card className="lg:col-span-2 bg-slate-800 border-slate-700 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-white">Recent Users</CardTitle>
              <Link
                href="/admin/users"
                className="text-secondary text-sm font-medium flex items-center hover:underline"
              >
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <CardDescription className="text-slate-400">Latest user registrations and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">Name</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">Role</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">Status</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 border border-slate-700">
                            <AvatarFallback className="bg-slate-600 text-slate-200">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-white">{user.name}</div>
                            <div className="text-xs text-slate-400">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-300">{user.role}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-400">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Overview */}
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-white">Subscription Plans</CardTitle>
              <Link
                href="/admin/subscriptions"
                className="text-secondary text-sm font-medium flex items-center hover:underline"
              >
                Details
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <CardDescription className="text-slate-400">Active subscription distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subscriptionPlans.map((plan) => (
                <div key={plan.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-white">{plan.name}</div>
                    <div className="text-sm text-green-400">{plan.growth}</div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-400">
                    <div>{plan.users} users</div>
                    <div>{plan.revenue}</div>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        plan.name === "Basic" ? "bg-blue-500" : plan.name === "Pro" ? "bg-purple-500" : "bg-amber-500"
                      }`}
                      style={{
                        width: plan.name === "Basic" ? "30%" : plan.name === "Pro" ? "50%" : "20%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-slate-700 pt-4">
            <Button variant="outline" className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
              Manage Subscription Plans
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="bg-slate-800 border-slate-700 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white">Revenue Overview</CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
              >
                Monthly
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white"
              >
                Quarterly
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white"
              >
                Yearly
              </Button>
            </div>
          </div>
          <CardDescription className="text-slate-400">Monthly revenue breakdown by subscription type</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="text-center text-slate-500">
            <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Revenue chart visualization would appear here</p>
            <p className="text-sm">Showing monthly data with subscription breakdowns</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
