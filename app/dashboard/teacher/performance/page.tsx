"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, Download, FileText, LineChart, PieChart, Search, Users } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function PerformancePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExam, setSelectedExam] = useState("all")
  const [selectedClass, setSelectedClass] = useState("all")
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  // Mock student performance data
  const studentPerformance = [
    {
      id: "student-001",
      name: "Emma Johnson",
      email: "emma.j@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      averageScore: 92,
      examsTaken: 8,
      lastExam: "Advanced Calculus Final",
      lastExam_score: 88,
      lastExam_date: "April 10, 2025",
      improvement: 5,
      class: "Mathematics 401",
    },
    {
      id: "student-002",
      name: "Michael Chen",
      email: "michael.c@example.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      averageScore: 85,
      examsTaken: 7,
      lastExam: "Physics Mechanics Midterm",
      lastExam_score: 90,
      lastExam_date: "April 8, 2025",
      improvement: 8,
      class: "Physics 301",
    },
    {
      id: "student-003",
      name: "Sophia Rodriguez",
      email: "sophia.r@example.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      averageScore: 78,
      examsTaken: 6,
      lastExam: "Data Structures Quiz",
      lastExam_score: 82,
      lastExam_date: "April 5, 2025",
      improvement: 10,
      class: "Computer Science 202",
    },
    {
      id: "student-004",
      name: "James Wilson",
      email: "james.w@example.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      averageScore: 88,
      examsTaken: 8,
      lastExam: "English Literature Essay",
      lastExam_score: 92,
      lastExam_date: "April 3, 2025",
      improvement: 4,
      class: "English 305",
    },
    {
      id: "student-005",
      name: "Olivia Kim",
      email: "olivia.k@example.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
      averageScore: 95,
      examsTaken: 9,
      lastExam: "World History Test",
      lastExam_score: 98,
      lastExam_date: "April 1, 2025",
      improvement: 3,
      class: "History 201",
    },
    {
      id: "student-006",
      name: "Ethan Brown",
      email: "ethan.b@example.com",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop",
      averageScore: 72,
      examsTaken: 7,
      lastExam: "Chemistry Lab Assessment",
      lastExam_score: 78,
      lastExam_date: "March 30, 2025",
      improvement: 12,
      class: "Chemistry 301",
    },
    {
      id: "student-007",
      name: "Ava Martinez",
      email: "ava.m@example.com",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop",
      averageScore: 83,
      examsTaken: 8,
      lastExam: "Biology Concepts Quiz",
      lastExam_score: 85,
      lastExam_date: "March 28, 2025",
      improvement: 6,
      class: "Biology 202",
    },
  ]

  // Filter students based on search query
  const filteredStudents = studentPerformance.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Mock exam data for charts
  const examData = [
    { name: "Advanced Calculus Final", avgScore: 82, passRate: 88, submissions: 45 },
    { name: "Physics Mechanics Midterm", avgScore: 78, passRate: 82, submissions: 38 },
    { name: "Data Structures Quiz", avgScore: 85, passRate: 90, submissions: 42 },
    { name: "English Literature Essay", avgScore: 80, passRate: 85, submissions: 36 },
    { name: "World History Test", avgScore: 75, passRate: 80, submissions: 40 },
  ]

  // Mock class data
  const classData = [
    { name: "Mathematics 401", avgScore: 84, students: 28, exams: 5 },
    { name: "Physics 301", avgScore: 78, students: 32, exams: 4 },
    { name: "Computer Science 202", avgScore: 82, students: 35, exams: 6 },
    { name: "English 305", avgScore: 80, students: 30, exams: 3 },
    { name: "History 201", avgScore: 76, students: 33, exams: 4 },
    { name: "Chemistry 301", avgScore: 75, students: 29, exams: 5 },
    { name: "Biology 202", avgScore: 79, students: 31, exams: 4 },
  ]

  return (
    <DashboardSidebar role="teacher">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Student Performance</h1>
            <p className="text-muted-foreground">Monitor and analyze student exam performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84%</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
              <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: "84%" }}></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">+4% from last month</p>
              <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: "92%" }}></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">Across 7 classes</p>
              <div className="mt-3 grid grid-cols-7 gap-1">
                {[85, 92, 78, 88, 72, 80, 75].map((score, i) => (
                  <div key={i} className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${score >= 80 ? "bg-green-500" : score >= 70 ? "bg-yellow-500" : "bg-red-500"}`}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Exams Completed</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">31</div>
              <p className="text-xs text-muted-foreground">+8 from last month</p>
              <div className="mt-3 flex items-center gap-1">
                <LineChart className="h-4 w-4 text-muted-foreground" />
                <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search students..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select value={selectedExam} onValueChange={setSelectedExam}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Exams</SelectItem>
                {examData.map((exam, i) => (
                  <SelectItem key={i} value={exam.name.toLowerCase().replace(/\s+/g, "-")}>
                    {exam.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {classData.map((cls, i) => (
                  <SelectItem key={i} value={cls.name.toLowerCase().replace(/\s+/g, "-")}>
                    {cls.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="students" className="space-y-6">
          <TabsList>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            <div className="bg-muted/50 p-3 rounded-lg border grid grid-cols-12 gap-4 text-sm font-medium hidden md:grid">
              <div className="col-span-4">Student</div>
              <div className="col-span-2">Average Score</div>
              <div className="col-span-2">Exams Taken</div>
              <div className="col-span-2">Last Exam</div>
              <div className="col-span-2">Improvement</div>
            </div>

            {filteredStudents.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                  <Users className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No students found</h3>
                  <p className="text-muted-foreground max-w-md">
                    {searchQuery
                      ? `No students match your search for "${searchQuery}". Try a different search term.`
                      : "There are no students in the selected filters."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="bg-card p-4 rounded-lg border grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                >
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.email}</div>
                        <div className="text-xs text-muted-foreground md:hidden mt-1">Class: {student.class}</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="md:hidden text-sm font-medium">Average Score</div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          student.averageScore >= 80
                            ? "success"
                            : student.averageScore >= 70
                              ? "warning"
                              : "destructive"
                        }
                      >
                        {student.averageScore}%
                      </Badge>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="md:hidden text-sm font-medium">Exams Taken</div>
                    <div>{student.examsTaken}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="md:hidden text-sm font-medium">Last Exam</div>
                    <div className="space-y-1">
                      <div className="text-sm line-clamp-1">{student.lastExam}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{student.lastExam_score}%</Badge>
                        <span className="text-xs text-muted-foreground">{student.lastExam_date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="md:hidden text-sm font-medium">Improvement</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-green-500">
                        +{student.improvement}%
                      </Badge>
                      <div className="h-1.5 w-full max-w-24 bg-muted rounded-full overflow-hidden">
                        <div
                          className="bg-green-500 h-full"
                          style={{ width: `${Math.min(student.improvement * 5, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="exams" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examData.map((exam, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{exam.name}</CardTitle>
                    <CardDescription>Performance overview</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{exam.avgScore}%</div>
                        <div className="text-xs text-muted-foreground">Average Score</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{exam.passRate}%</div>
                        <div className="text-xs text-muted-foreground">Pass Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{exam.submissions}</div>
                        <div className="text-xs text-muted-foreground">Submissions</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score Distribution</span>
                        <span>Count</span>
                      </div>
                      {[
                        { range: "90-100%", count: Math.floor(exam.submissions * 0.2), color: "bg-green-500" },
                        { range: "80-89%", count: Math.floor(exam.submissions * 0.3), color: "bg-green-400" },
                        { range: "70-79%", count: Math.floor(exam.submissions * 0.25), color: "bg-yellow-500" },
                        { range: "60-69%", count: Math.floor(exam.submissions * 0.15), color: "bg-orange-500" },
                        { range: "0-59%", count: Math.floor(exam.submissions * 0.1), color: "bg-red-500" },
                      ].map((item, j) => (
                        <div key={j} className="flex items-center justify-between">
                          <div className="flex items-center gap-2 flex-1">
                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                            <span className="text-sm">{item.range}</span>
                            <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                              <div
                                className={item.color}
                                style={{ width: `${(item.count / exam.submissions) * 100}%`, height: "100%" }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm">{item.count}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      View Detailed Report
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="classes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {classData.map((cls, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{cls.name}</CardTitle>
                    <CardDescription>
                      {cls.students} students • {cls.exams} exams
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Average Score</div>
                        <div className="text-2xl font-bold">{cls.avgScore}%</div>
                      </div>
                      <div className="h-16 w-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                        <span className="text-lg font-bold">{cls.avgScore}%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Performance Trend</div>
                      <div className="flex items-end gap-1 h-12">
                        {[...Array(8)].map((_, j) => {
                          const height = 40 + Math.random() * 60
                          return (
                            <div key={j} className="flex-1 bg-muted rounded-t-sm overflow-hidden">
                              <div
                                className={`${cls.avgScore >= 80 ? "bg-green-500" : cls.avgScore >= 70 ? "bg-yellow-500" : "bg-red-500"}`}
                                style={{ height: `${height}%` }}
                              ></div>
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Jan</span>
                        <span>Apr</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Class Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Over Time</CardTitle>
                  <CardDescription>Average scores across all classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end gap-2 mb-4">
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">Last Week</SelectItem>
                        <SelectItem value="month">Last Month</SelectItem>
                        <SelectItem value="quarter">Last Quarter</SelectItem>
                        <SelectItem value="year">Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="h-[300px] flex flex-col">
                    <div className="flex-1 flex items-end gap-2">
                      {[78, 82, 75, 80, 84, 79, 83, 85, 81, 86, 84, 88].map((score, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div className="text-xs">{score}%</div>
                          <div
                            className={`w-full rounded-t-sm ${score >= 80 ? "bg-green-500" : score >= 70 ? "bg-yellow-500" : "bg-red-500"}`}
                            style={{ height: `${score}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="h-6 flex items-center">
                      <div className="w-full border-t border-muted flex justify-between px-2">
                        {selectedPeriod === "month" && (
                          <>
                            <div className="text-xs text-muted-foreground">Week 1</div>
                            <div className="text-xs text-muted-foreground">Week 2</div>
                            <div className="text-xs text-muted-foreground">Week 3</div>
                            <div className="text-xs text-muted-foreground">Week 4</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Question Type Analysis</CardTitle>
                  <CardDescription>Performance by question type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Multiple Choice</div>
                        <div className="text-xs text-muted-foreground">Average score: 86%</div>
                      </div>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "86%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">True/False</div>
                        <div className="text-xs text-muted-foreground">Average score: 92%</div>
                      </div>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Short Answer</div>
                        <div className="text-xs text-muted-foreground">Average score: 78%</div>
                      </div>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Long Answer</div>
                        <div className="text-xs text-muted-foreground">Average score: 72%</div>
                      </div>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Matching</div>
                        <div className="text-xs text-muted-foreground">Average score: 80%</div>
                      </div>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Fill in the Blank</div>
                        <div className="text-xs text-muted-foreground">Average score: 68%</div>
                      </div>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Topic Mastery</CardTitle>
                  <CardDescription>Performance by subject topic</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { topic: "Calculus - Derivatives", score: 85 },
                      { topic: "Calculus - Integrals", score: 78 },
                      { topic: "Physics - Mechanics", score: 82 },
                      { topic: "Physics - Thermodynamics", score: 68 },
                      { topic: "CS - Data Structures", score: 90 },
                      { topic: "CS - Algorithms", score: 85 },
                      { topic: "English - Literature", score: 88 },
                      { topic: "English - Grammar", score: 92 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="text-sm font-medium line-clamp-1">{item.topic}</div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full ${item.score >= 80 ? "bg-green-500" : item.score >= 70 ? "bg-yellow-500" : "bg-orange-500"}`}
                              style={{ width: `${item.score}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium">{item.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Improvement Areas</CardTitle>
                  <CardDescription>Topics that need attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { topic: "Physics - Thermodynamics", score: 68, students: 15 },
                      { topic: "Calculus - Integrals", score: 72, students: 12 },
                      { topic: "Chemistry - Organic Compounds", score: 70, students: 10 },
                      { topic: "History - World War II", score: 73, students: 8 },
                      { topic: "Biology - Cell Structure", score: 74, students: 7 },
                    ].map((item, i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">{item.topic}</div>
                          <Badge variant="outline" className="text-orange-500">
                            {item.score}%
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {item.students} students struggling with this topic
                        </div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.score >= 80 ? "bg-green-500" : item.score >= 70 ? "bg-yellow-500" : "bg-orange-500"}`}
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardSidebar>
  )
}
