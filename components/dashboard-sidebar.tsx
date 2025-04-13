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
  BarChart2,
  Brain,
  Calendar,
  ChevronDown,
  Download,
  FileText,
  History,
  Home,
  LogOut,
  PenTool,
  Settings,
  Sparkles,
  Upload,
  User,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const role = pathname.includes("/dashboard/student") ? "student" : "teacher"

  const studentNavItems = [
    { name: "Dashboard", href: "/dashboard/student", icon: Home },
    { name: "Upload", href: "/dashboard/student/upload", icon: Upload },
    { name: "Generate", href: "/dashboard/student/generate", icon: Sparkles },
    { name: "Take Quiz", href: "/dashboard/student/take-quiz", icon: FileText },
    { name: "Results", href: "/dashboard/student/results", icon: BarChart2 },
    { name: "History", href: "/dashboard/student/history", icon: History },
    { name: "Settings", href: "/dashboard/student/settings", icon: Settings },
  ]

  const teacherNavItems = [
    { name: "Dashboard", href: "/dashboard/teacher", icon: Home },
    { name: "Create", href: "/dashboard/teacher/create", icon: PenTool },
    { name: "Customize", href: "/dashboard/teacher/customize", icon: Settings },
    { name: "Download", href: "/dashboard/teacher/download", icon: Download },
    { name: "Saved", href: "/dashboard/teacher/saved", icon: FileText },
    { name: "Performance", href: "/dashboard/teacher/performance", icon: BarChart2 },
    { name: "Settings", href: "/dashboard/teacher/settings", icon: Settings },
  ]

  const navItems = role === "student" ? studentNavItems : teacherNavItems

  // Quick action buttons based on role
  const studentActions = [
    { name: "Upload Document", href: "/dashboard/student/upload", icon: Upload, color: "bg-blue-500" },
    { name: "Generate Quiz", href: "/dashboard/student/generate", icon: Sparkles, color: "bg-purple-500" },
    { name: "Take Quiz", href: "/dashboard/student/take-quiz", icon: FileText, color: "bg-green-500" },
    { name: "View History", href: "/dashboard/student/history", icon: History, color: "bg-amber-500" },
  ]

  const teacherActions = [
    { name: "Create Exam", href: "/dashboard/teacher/create", icon: PenTool, color: "bg-blue-500" },
    { name: "Download", href: "/dashboard/teacher/download", icon: Download, color: "bg-purple-500" },
    { name: "Analytics", href: "/dashboard/teacher/performance", icon: BarChart2, color: "bg-green-500" },
    { name: "Schedule", href: "/dashboard/teacher/settings", icon: Calendar, color: "bg-amber-500" },
  ]

  const actionButtons = role === "student" ? studentActions : teacherActions

  const handleLogout = () => {
    // Simulate logout
    router.push("/")
  }

  return (
    <>
      <div className="md:hidden fixed top-2 left-2 z-50">
        <SidebarTrigger className="bg-background shadow-md rounded-md" />
      </div>

      <Sidebar variant="sidebar" collapsible="icon" className="border-r hidden md:block">
        <SidebarHeader className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold">Examinie AI</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="p-2">
          {/* Navigation Menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 text-xs text-muted-foreground">Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.name}
                      size="sm"
                      className="py-1.5"
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

          <SidebarSeparator className="my-2" />

          {/* Quick Actions */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 text-xs text-muted-foreground">Quick Actions</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="grid grid-cols-2 gap-2 p-2">
                {actionButtons.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`${action.color} text-white rounded-lg p-3 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 shadow-sm`}
                  >
                    <action.icon className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">{action.name}</span>
                  </Link>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-xs">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{role === "student" ? "S" : "T"}</AvatarFallback>
                </Avatar>
                <span className="capitalize">{role}</span>
                <ChevronDown className="ml-auto h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
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
