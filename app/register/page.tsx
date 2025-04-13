"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, CheckCircle, LockKeyhole, Mail, User } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultRole = searchParams.get("role") || "student";
  const [activeTab, setActiveTab] = useState(defaultRole);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard based on role
      router.push(`/dashboard/${activeTab}`);
    }, 1500);
  };

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
            <CardTitle className="text-2xl font-bold text-center text-navy">Create an account</CardTitle>
            <CardDescription className="text-center text-slate">
              Choose your role and enter your details to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={defaultRole} value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="student" className="data-[state=active]:bg-navy data-[state=active]:text-light">
                  Student
                </TabsTrigger>
                <TabsTrigger value="teacher" className="data-[state=active]:bg-navy data-[state=active]:text-light">
                  Teacher
                </TabsTrigger>
              </TabsList>
              <TabsContent value="student">
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gold mr-2" />
                    <span className="text-sm text-slate">Access AI-generated quizzes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gold mr-2" />
                    <span className="text-sm text-slate">Get instant feedback on your performance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gold mr-2" />
                    <span className="text-sm text-slate">Track your learning progress</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="teacher">
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gold mr-2" />
                    <span className="text-sm text-slate">Create custom exam papers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gold mr-2" />
                    <span className="text-sm text-slate">Monitor student performance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gold mr-2" />
                    <span className="text-sm text-slate">Access a library of saved papers</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate" />
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      className="pl-9 border-slate/20 focus-visible:ring-gold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate" />
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      required 
                      className="pl-9 border-slate/20 focus-visible:ring-gold"
                    />
                  </div>
                </div>
              </div>
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
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <LockKeyhole className="absolute left-3\
