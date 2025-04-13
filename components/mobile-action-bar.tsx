"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/hooks/use-mobile"
import { BarChart2, FileText, Home, PenTool, Settings, Sparkles, Upload } from "lucide-react"

export function MobileActionBar() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const role = pathname.includes("/dashboard/student") ? "student" : "teacher"

  // Only show on mobile
  if (!isMobile) return null

  const studentActions = [
    { name: "Home", href: "/dashboard/student", icon: Home },
    { name: "Upload", href: "/dashboard/student/upload", icon: Upload },
    { name: "Generate", href: "/dashboard/student/generate", icon: Sparkles },
    { name: "Results", href: "/dashboard/student/results", icon: BarChart2 },
  ]

  const teacherActions = [
    { name: "Home", href: "/dashboard/teacher", icon: Home },
    { name: "Create", href: "/dashboard/teacher/create", icon: PenTool },
    { name: "Exams", href: "/dashboard/teacher/saved", icon: FileText },
    { name: "Settings", href: "/dashboard/teacher/settings", icon: Settings },
  ]

  const actions = role === "student" ? studentActions : teacherActions

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
      <div className="flex justify-around items-center h-16">
        {actions.map((action) => {
          const isActive = pathname === action.href
          return (
            <Link
              key={action.name}
              href={action.href}
              className={`flex flex-col items-center justify-center w-full h-full ${
                isActive ? "text-secondary" : "text-muted-foreground"
              }`}
            >
              <action.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{action.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
