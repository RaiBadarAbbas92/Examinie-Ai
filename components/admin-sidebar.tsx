"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Brain,
  ChevronDown,
  CreditCard,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  Shield,
  Users,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const adminNavItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
    { name: "Invoices", href: "/admin/invoices", icon: FileText },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Customization", href: "/admin/customization", icon: Settings },
    { name: "Security", href: "/admin/security", icon: Shield },
    { name: "Support", href: "/admin/support", icon: HelpCircle },
  ]

  const handleLogout = () => {
    // Simulate logout
    router.push("/")
  }

  return (
    <>
      <div className="md:hidden fixed top-2 left-2 z-50">
        <SidebarTrigger className="bg-slate-800 shadow-md rounded-md text-white" />
      </div>

      <Sidebar variant="sidebar" collapsible="icon" className="border-r border-slate-700 bg-slate-900">
        <SidebarHeader className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-secondary-foreground">
              <Brain className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold text-white">Examinie AI</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="p-2">
          {/* Navigation Menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 text-xs text-slate-400">Administration</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNavItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.name}
                      size="sm"
                      className="py-1.5 text-slate-200 hover:text-white"
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator className="my-2 bg-slate-700" />

          {/* System Status */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 text-xs text-slate-400">System Status</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="p-3 rounded-lg bg-slate-800 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Server Load</span>
                    <span className="text-green-400">Optimal</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[15%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Storage</span>
                    <span className="text-yellow-400">68%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[68%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Memory</span>
                    <span className="text-blue-400">42%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[42%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 h-10 text-xs text-slate-200 hover:text-white hover:bg-slate-800"
              >
                <Avatar className="h-6 w-6 border border-slate-700">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-secondary text-secondary-foreground">AD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="font-medium">Admin User</span>
                  <span className="text-slate-400 text-xs">Super Admin</span>
                </div>
                <ChevronDown className="ml-auto h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700 text-slate-200">
              <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem className="hover:bg-slate-700 hover:text-white focus:bg-slate-700">
                <Shield className="mr-2 h-4 w-4" />
                <span>Admin Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-700 hover:text-white focus:bg-slate-700">
                <Settings className="mr-2 h-4 w-4" />
                <span>Preferences</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="hover:bg-slate-700 hover:text-white focus:bg-slate-700"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
