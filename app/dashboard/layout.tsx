import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { MobileActionBar } from "@/components/mobile-action-bar"
import { ModeToggle } from "@/components/mode-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col min-h-screen">
              <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                <div className="h-12 flex items-center gap-4 px-4 sm:px-6">
                  <div className="ml-auto flex items-center gap-2">
                    <ModeToggle />
                  </div>
                </div>
              </header>
              <main className="flex-1 container py-6 px-4 md:px-6 pb-20 md:pb-6">{children}</main>
              <footer className="border-t py-4 px-4 md:px-6">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-muted-foreground">
                  <p>© 2025 Examinie AI. All rights reserved.</p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                    <a href="#" className="hover:underline">
                      Terms of Service
                    </a>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <MobileActionBar />
      </div>
    </SidebarProvider>
  )
}
