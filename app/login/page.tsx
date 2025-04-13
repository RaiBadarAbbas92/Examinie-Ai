"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, EyeIcon, EyeOffIcon, LockKeyhole, Mail } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard based on role (hardcoded for demo)
      router.push("/dashboard/student")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center">
            <Brain className="h-8 w-8 text-gold mr-2" />
            <span className="text-2xl font-bold text-navy">AgenticExams</span>
          </Link>
        </div>

        <Card className="border-slate/10 shadow-soft">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-navy">Welcome back</CardTitle>
            <CardDescription className="text-center text-slate">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate" />
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    required
                    className="pl-10 border-slate/20 focus-visible:ring-gold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-sm text-gold hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-10 pr-10 border-slate/20 focus-visible:ring-gold"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate hover:text-navy"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-light" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t border-slate/10 pt-5">
            <div className="text-center text-sm text-slate">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-gold hover:underline">
                Sign up
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Button variant="outline" className="w-full border-slate/20 hover:bg-navy hover:text-light">
                Student Login
              </Button>
              <Button variant="outline" className="w-full border-slate/20 hover:bg-navy hover:text-light">
                Teacher Login
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
