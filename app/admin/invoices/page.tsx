import { ArrowUpDown, Download, Filter, MoreHorizontal, Plus, Printer, Search, Trash } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"

// Sample invoice data
const invoices = [
  {
    id: "INV-2025-001",
    user: "Emma Thompson",
    email: "emma.t@example.com",
    plan: "Pro",
    amount: "$19.99",
    status: "Paid",
    date: "Jan 15, 2025",
    dueDate: "Jan 15, 2025",
  },
  {
    id: "INV-2025-002",
    user: "James Wilson",
    email: "james.w@example.com",
    plan: "Enterprise",
    amount: "$49.99",
    status: "Paid",
    date: "Feb 3, 2025",
    dueDate: "Feb 3, 2025",
  },
  {
    id: "INV-2025-003",
    user: "Sophia Chen",
    email: "sophia.c@example.com",
    plan: "Basic",
    amount: "$9.99",
    status: "Pending",
    date: "Mar 12, 2025",
    dueDate: "Mar 19, 2025",
  },
  {
    id: "INV-2025-004",
    user: "Michael Brown",
    email: "michael.b@example.com",
    plan: "Pro",
    amount: "$19.99",
    status: "Overdue",
    date: "Dec 5, 2024",
    dueDate: "Dec 12, 2024",
  },
  {
    id: "INV-2025-005",
    user: "Olivia Davis",
    email: "olivia.d@example.com",
    plan: "Basic",
    amount: "$9.99",
    status: "Paid",
    date: "Feb 18, 2025",
    dueDate: "Feb 18, 2025",
  },
  {
    id: "INV-2025-006",
    user: "William Johnson",
    email: "william.j@example.com",
    plan: "Enterprise",
    amount: "$49.99",
    status: "Paid",
    date: "Nov 30, 2024",
    dueDate: "Nov 30, 2024",
  },
  {
    id: "INV-2025-007",
    user: "Ava Martinez",
    email: "ava.m@example.com",
    plan: "Pro",
    amount: "$19.99",
    status: "Pending",
    date: "Jan 22, 2025",
    dueDate: "Jan 29, 2025",
  },
  {
    id: "INV-2025-008",
    user: "Ethan Taylor",
    email: "ethan.t@example.com",
    plan: "Basic",
    amount: "$9.99",
    status: "Refunded",
    date: "Mar 5, 2025",
    dueDate: "Mar 5, 2025",
  },
  {
    id: "INV-2025-009",
    user: "Isabella Anderson",
    email: "isabella.a@example.com",
    plan: "Pro",
    amount: "$19.99",
    status: "Paid",
    date: "Feb 10, 2025",
    dueDate: "Feb 10, 2025",
  },
  {
    id: "INV-2025-010",
    user: "Noah Garcia",
    email: "noah.g@example.com",
    plan: "Enterprise",
    amount: "$49.99",
    status: "Paid",
    date: "Jan 8, 2025",
    dueDate: "Jan 8, 2025",
  },
]

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Invoice Management</h1>
          <p className="text-slate-400 mt-1">Generate, manage, and track all subscription invoices</p>
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
            <Plus className="mr-2 h-4 w-4" />
            Create Invoice
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
                placeholder="Search invoices..."
                className="pl-10 bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-500 focus-visible:ring-secondary"
              />
            </div>
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700 text-slate-200 focus:ring-secondary">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700 text-slate-200 focus:ring-secondary">
                  <SelectValue placeholder="Plan" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                  <SelectItem value="all">All Plans</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
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

      {/* Invoices Table */}
      <Card className="bg-slate-800 border-slate-700 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-white">All Invoices</CardTitle>
          <CardDescription className="text-slate-400">Showing {invoices.length} invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                      Invoice ID
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
                      Customer
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
                      Amount
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
                      Date
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-right py-3 px-4 text-xs font-medium text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-white">{invoice.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-white">{invoice.user}</div>
                        <div className="text-xs text-slate-400">{invoice.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        className={`${
                          invoice.plan === "Enterprise"
                            ? "bg-purple-500"
                            : invoice.plan === "Pro"
                              ? "bg-blue-500"
                              : "bg-green-500"
                        } hover:${
                          invoice.plan === "Enterprise"
                            ? "bg-purple-600"
                            : invoice.plan === "Pro"
                              ? "bg-blue-600"
                              : "bg-green-600"
                        }`}
                      >
                        {invoice.plan}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-white">{invoice.amount}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant="outline"
                        className={`${
                          invoice.status === "Paid"
                            ? "border-green-500 text-green-500"
                            : invoice.status === "Pending"
                              ? "border-yellow-500 text-yellow-500"
                              : invoice.status === "Overdue"
                                ? "border-red-500 text-red-500"
                                : "border-slate-500 text-slate-500"
                        }`}
                      >
                        {invoice.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-300">{invoice.date}</td>
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
                            <Printer className="mr-2 h-4 w-4" />
                            <span>Print Invoice</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-slate-800 hover:text-white focus:bg-slate-800">
                            <Download className="mr-2 h-4 w-4" />
                            <span>Download PDF</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-slate-700" />
                          <DropdownMenuItem className="text-red-500 hover:bg-red-950 hover:text-red-400 focus:bg-red-950">
                            <Trash className="mr-2 h-4 w-4" />
                            <span>Delete Invoice</span>
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
