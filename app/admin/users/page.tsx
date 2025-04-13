import { ArrowUpDown, Download, Filter, MoreHorizontal, Search, Trash, UserCog, UserPlus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample user data
const users = [
  {
    id: 1,
    name: "Emma Thompson",
    email: "emma.t@example.com",
    role: "Student",
    status: "Active",
    lastActive: "2 hours ago",
    subscription: "Pro",
    joined: "Jan 15, 2025",
  },
  {
    id: 2,
    name: "James Wilson",
    email: "james.w@example.com",
    role: "Teacher",
    status: "Active",
    lastActive: "5 hours ago",
    subscription: "Enterprise",
    joined: "Feb 3, 2025",
  },
  {
    id: 3,
    name: "Sophia Chen",
    email: "sophia.c@example.com",
    role: "Student",
    status: "Active",
    lastActive: "1 day ago",
    subscription: "Basic",
    joined: "Mar 12, 2025",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.b@example.com",
    role: "Teacher",
    status: "Inactive",
    lastActive: "2 days ago",
    subscription: "Pro",
    joined: "Dec 5, 2024",
  },
  {
    id: 5,
    name: "Olivia Davis",
    email: "olivia.d@example.com",
    role: "Student",
    status: "Active",
    lastActive: "3 days ago",
    subscription: "Basic",
    joined: "Feb 18, 2025",
  },
  {
    id: 6,
    name: "William Johnson",
    email: "william.j@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "Just now",
    subscription: "Enterprise",
    joined: "Nov 30, 2024",
  },
  {
    id: 7,
    name: "Ava Martinez",
    email: "ava.m@example.com",
    role: "Student",
    status: "Active",
    lastActive: "4 days ago",
    subscription: "Pro",
    joined: "Jan 22, 2025",
  },
  {
    id: 8,
    name: "Ethan Taylor",
    email: "ethan.t@example.com",
    role: "Teacher",
    status: "Inactive",
    lastActive: "1 week ago",
    subscription: "Basic",
    joined: "Mar 5, 2025",
  },
  {
    id: 9,
    name: "Isabella Anderson",
    email: "isabella.a@example.com",
    role: "Student",
    status: "Active",
    lastActive: "2 days ago",
    subscription: "Pro",
    joined: "Feb 10, 2025",
  },
  {
    id: 10,
    name: "Noah Garcia",
    email: "noah.g@example.com",
    role: "Teacher",
    status: "Active",
    lastActive: "6 hours ago",
    subscription: "Enterprise",
    joined: "Jan 8, 2025",
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <p className="text-slate-400 mt-1">Manage and monitor all users on the platform</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Search users..."
                className="pl-10 bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-500 focus-visible:ring-secondary"
              />
            </div>
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700 text-slate-200 focus:ring-secondary">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700 text-slate-200 focus:ring-secondary">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="bg-slate-800 border-slate-700 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-white">All Users</CardTitle>
          <CardDescription className="text-slate-400">Showing {users.length} users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                      Name
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                      Role
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
                      Subscription
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                      Joined
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">Last Active</th>
                  <th className="text-right py-3 px-4 text-xs font-medium text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
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
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.role === "Admin"
                            ? "bg-purple-100 text-purple-800"
                            : user.role === "Teacher"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-300">{user.subscription}</td>
                    <td className="py-3 px-4 text-sm text-slate-300">{user.joined}</td>
                    <td className="py-3 px-4 text-sm text-slate-400">{user.lastActive}</td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-slate-900 border-slate-700 text-slate-200">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-slate-700" />
                          <DropdownMenuItem className="hover:bg-slate-800 hover:text-white focus:bg-slate-800">
                            <UserCog className="mr-2 h-4 w-4" />
                            <span>Edit User</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-500 hover:bg-red-950 hover:text-red-400 focus:bg-red-950">
                            <Trash className="mr-2 h-4 w-4" />
                            <span>Delete User</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
