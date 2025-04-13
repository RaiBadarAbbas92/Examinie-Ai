import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, BarChart2, Download, FileText, PenTool, Users } from "lucide-react"
import Link from "next/link"

export default function TeacherDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Dr. Smith! Here's an overview of your exams and student performance.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm" className="md:hidden">
            <Link href="/dashboard/teacher/create">Create Exam</Link>
          </Button>
          <Button asChild className="hidden md:flex">
            <Link href="/dashboard/teacher/create">Create New Exam</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Quick Actions */}
      <div className="grid grid-cols-4 gap-2 md:hidden">
        {[
          { name: "Create", href: "/dashboard/teacher/create", icon: PenTool, color: "bg-blue-500" },
          { name: "Download", href: "/dashboard/teacher/download", icon: Download, color: "bg-purple-500" },
          { name: "Analytics", href: "/dashboard/teacher/performance", icon: BarChart2, color: "bg-green-500" },
          { name: "Classes", href: "/dashboard/teacher/saved", icon: Users, color: "bg-amber-500" },
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 this month</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-full bg-primary" style={{ width: "75%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">Across 5 classes</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-full bg-blue-500" style={{ width: "85%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-full bg-green-500" style={{ width: "82%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Of assigned exams</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-full bg-green-500" style={{ width: "94%" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Exams</CardTitle>
            <CardDescription>Your recently created exams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Advanced Calculus Final", date: "Apr 10, 2025", questions: 25, status: "Published" },
                { title: "Physics Mechanics Midterm", date: "Apr 5, 2025", questions: 20, status: "Draft" },
                { title: "Computer Science Quiz", date: "Mar 28, 2025", questions: 15, status: "Published" },
                { title: "English Literature Essay", date: "Mar 20, 2025", questions: 5, status: "Published" },
              ].map((exam, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-md">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{exam.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {exam.date} • {exam.questions} questions
                      </p>
                    </div>
                  </div>
                  <Badge variant={exam.status === "Published" ? "success" : "secondary"}>{exam.status}</Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/dashboard/teacher/saved">
                  View All Exams
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Class Performance</CardTitle>
            <CardDescription>Average scores by class</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Mathematics 401</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Physics 301</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Computer Science 202</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">English 305</span>
                  <span className="text-sm font-medium">88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">History 201</span>
                  <span className="text-sm font-medium">76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/dashboard/teacher/performance">
                  View Detailed Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Student Activity</CardTitle>
            <CardDescription>Recent student exam submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Emma Johnson", exam: "Advanced Calculus Final", score: 92, time: "Apr 10, 2025 • 2:45 PM" },
                { name: "Michael Chen", exam: "Physics Mechanics Midterm", score: 85, time: "Apr 9, 2025 • 10:30 AM" },
                { name: "Sophia Rodriguez", exam: "Computer Science Quiz", score: 78, time: "Apr 8, 2025 • 3:15 PM" },
                { name: "James Wilson", exam: "English Literature Essay", score: 90, time: "Apr 7, 2025 • 1:20 PM" },
                { name: "Olivia Kim", exam: "Advanced Calculus Final", score: 95, time: "Apr 6, 2025 • 11:45 AM" },
              ].map((submission, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs font-medium">
                      {submission.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{submission.name}</p>
                      <p className="text-xs text-muted-foreground">{submission.exam}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={submission.score >= 90 ? "success" : submission.score >= 80 ? "default" : "secondary"}
                    >
                      {submission.score}%
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{submission.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" asChild>
                <Link href="/dashboard/teacher/create">
                  <PenTool className="mr-2 h-4 w-4" />
                  Create New Exam
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/teacher/download">
                  <Download className="mr-2 h-4 w-4" />
                  Download Exams
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/teacher/performance">
                  <BarChart2 className="mr-2 h-4 w-4" />
                  View Analytics
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/teacher/customize">
                  <FileText className="mr-2 h-4 w-4" />
                  Customize Format
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/teacher/saved">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Classes
                </Link>
              </Button>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3">Upcoming Deadlines</h3>
              <div className="space-y-3">
                {[
                  { title: "Physics Final Exam", date: "Apr 20, 2025", status: "Preparation" },
                  { title: "Computer Science Project", date: "Apr 25, 2025", status: "Grading" },
                  { title: "Mathematics Midterm", date: "May 5, 2025", status: "Planning" },
                ].map((deadline, i) => (
                  <div key={i} className="flex justify-between items-center p-2 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground">{deadline.date}</p>
                    </div>
                    <Badge variant="outline">{deadline.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
