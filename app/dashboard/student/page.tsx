"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Calendar, Clock, FileText, Upload, TrendingUp, BarChart3, PieChart } from "lucide-react"
import Link from "next/link"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart as RPieChart,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for charts
const performanceData = [
  { month: "Jan", score: 65 },
  { month: "Feb", score: 72 },
  { month: "Mar", score: 68 },
  { month: "Apr", score: 87 },
  { month: "May", score: 82 },
  { month: "Jun", score: 91 },
]

const subjectPerformanceData = [
  { subject: "Math", score: 85 },
  { subject: "Physics", score: 72 },
  { subject: "CS", score: 90 },
  { subject: "English", score: 78 },
  { subject: "History", score: 65 },
]

const studyTimeData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 2.7 },
  { day: "Sat", hours: 5.1 },
  { day: "Sun", hours: 3.5 },
]

const quizTypeData = [
  { name: "Multiple Choice", value: 45 },
  { name: "Short Answer", value: 25 },
  { name: "Essay", value: 15 },
  { name: "Coding", value: 15 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export default function StudentDashboardPage() {
  const [chartView, setChartView] = useState<"weekly" | "monthly" | "yearly">("monthly")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Alex! Here's an overview of your learning progress.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm" className="md:hidden">
            <Link href="/dashboard/student/generate">Generate Quiz</Link>
          </Button>
          <Button asChild className="hidden md:flex">
            <Link href="/dashboard/student/generate">Generate Quiz</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Quick Actions */}
      <div className="grid grid-cols-4 gap-2 md:hidden">
        {[
          { name: "Upload", href: "/dashboard/student/upload", icon: Upload, color: "bg-blue-500" },
          { name: "Generate", href: "/dashboard/student/generate", icon: FileText, color: "bg-purple-500" },
          { name: "Take Quiz", href: "/dashboard/student/take-quiz", icon: BookOpen, color: "bg-green-500" },
          { name: "History", href: "/dashboard/student/history", icon: Clock, color: "bg-amber-500" },
        ].map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className={`${action.color} text-white rounded-lg p-2 flex flex-col items-center justify-center text-center`}
          >
            <action.icon className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-medium">{action.name}</span>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Quizzes</div>
            <p className="text-xs text-muted-foreground">Completed this month</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-full bg-primary" style={{ width: "75%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-full bg-green-500" style={{ width: "87%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 hrs</div>
            <p className="text-xs text-muted-foreground">This week</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-full bg-blue-500" style={{ width: "65%" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Performance Trends
              </CardTitle>
              <CardDescription>Your quiz performance over time</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Tabs
                defaultValue="monthly"
                value={chartView}
                onValueChange={(value) => setChartView(value as "weekly" | "monthly" | "yearly")}
              >
                <TabsList className="h-8">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                score: {
                  label: "Score",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="var(--color-score)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Quizzes</CardTitle>
            <CardDescription>Your recently completed quizzes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Advanced Calculus", score: 92, date: "Apr 10, 2025", questions: 25 },
                { title: "Physics Mechanics", score: 85, date: "Apr 5, 2025", questions: 20 },
                { title: "Computer Science Basics", score: 78, date: "Mar 28, 2025", questions: 15 },
                { title: "English Literature", score: 90, date: "Mar 20, 2025", questions: 18 },
              ].map((quiz, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-md">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{quiz.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {quiz.date} • {quiz.questions} questions
                      </p>
                    </div>
                  </div>
                  <Badge variant={quiz.score >= 90 ? "success" : quiz.score >= 80 ? "default" : "secondary"}>
                    {quiz.score}%
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/dashboard/student/history">
                  View All Quizzes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Subject Performance
            </CardTitle>
            <CardDescription>Your performance across different subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ChartContainer
                config={{
                  score: {
                    label: "Score",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectPerformanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="score" fill="var(--color-score)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Weekly Study Time
            </CardTitle>
            <CardDescription>Hours spent studying each day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ChartContainer
                config={{
                  hours: {
                    label: "Hours",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={studyTimeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="hours" fill="var(--color-hours)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Quiz Types
            </CardTitle>
            <CardDescription>Distribution of quiz types taken</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RPieChart>
                  <Pie
                    data={quizTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {quizTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks you might want to perform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
              <Link href="/dashboard/student/upload">
                <Upload className="h-6 w-6 mb-1" />
                <span>Upload Content</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
              <Link href="/dashboard/student/generate">
                <FileText className="h-6 w-6 mb-1" />
                <span>Generate Quiz</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
              <Link href="/dashboard/student/history">
                <Clock className="h-6 w-6 mb-1" />
                <span>View History</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
              <Link href="/dashboard/student/settings">
                <Calendar className="h-6 w-6 mb-1" />
                <span>Schedule Study</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
