import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import AdminSidebar from "@/components/admin-sidebar"
import { ModeToggle } from "@/components/mode-toggle"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col min-h-screen">
              <header className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-700">
                <div className="h-16 flex items-center gap-4 px-6">
                  <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                  <div className="ml-auto flex items-center gap-4">
                    <div className="relative">
                      <button className="p-2 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bell"
                        >
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                      </button>
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                        3
                      </span>
                    </div>
                    <ModeToggle />
                  </div>
                </div>
              </header>
              <main className="flex-1 container py-8 px-6">{children}</main>
              <footer className="border-t border-slate-700 py-6 px-6">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-400">
                  <p>© 2025 Examinie AI. All rights reserved.</p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
