import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, Search } from "lucide-react"

export default function HistoryPage() {
  // Mock data for quiz history
  const quizHistory = [
    {
      id: "quiz-001",
      title: "Advanced Mathematics Quiz",
      date: "2023-04-15",
      score: 85,
      totalQuestions: 20,
      timeSpent: "45 min",
      status: "Completed",
    },
    {
      id: "quiz-002",
      title: "Physics Fundamentals",
      date: "2023-04-10",
      score: 92,
      totalQuestions: 15,
      timeSpent: "32 min",
      status: "Completed",
    },
    {
      id: "quiz-003",
      title: "Chemistry Basics",
      date: "2023-04-05",
      score: 78,
      totalQuestions: 25,
      timeSpent: "50 min",
      status: "Completed",
    },
    {
      id: "quiz-004",
      title: "Biology Concepts",
      date: "2023-03-28",
      score: 88,
      totalQuestions: 18,
      timeSpent: "40 min",
      status: "Completed",
    },
    {
      id: "quiz-005",
      title: "Computer Science Principles",
      date: "2023-03-20",
      score: 95,
      totalQuestions: 22,
      timeSpent: "48 min",
      status: "Completed",
    },
  ]

  // Function to determine badge color based on score
  const getBadgeColor = (score: number) => {
    if (score >= 90) return "success"
    if (score >= 75) return "default"
    return "secondary"
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quiz History</h1>
        <div className="flex gap-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export History
          </Button>
          <Button>
            <Filter className="mr-2 h-4 w-4" />
            Filter Results
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search quizzes..." className="pl-8" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="biology">Biology</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last 3 Months</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Quiz Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quiz Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Time Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizHistory.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.title}</TableCell>
                  <TableCell>{quiz.date}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeColor(quiz.score)}>{quiz.score}%</Badge>
                  </TableCell>
                  <TableCell>{quiz.totalQuestions}</TableCell>
                  <TableCell>{quiz.timeSpent}</TableCell>
                  <TableCell>{quiz.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Retry
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Score</span>
                <span className="font-bold">87.6%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quizzes Taken</span>
                <span className="font-bold">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Time</span>
                <span className="font-bold">3h 35m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Highest Score</span>
                <span className="font-bold">95%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Improvement Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Chemistry</span>
                <span className="font-bold text-amber-500">Needs Work</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Physics</span>
                <span className="font-bold text-green-500">Strong</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mathematics</span>
                <span className="font-bold text-blue-500">Good</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Computer Science</span>
                <span className="font-bold text-green-500">Excellent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">Advanced Chemistry Concepts</div>
                <div className="text-sm text-muted-foreground">Based on your improvement areas</div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">Calculus Deep Dive</div>
                <div className="text-sm text-muted-foreground">Continue your math progress</div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">Biology Essentials</div>
                <div className="text-sm text-muted-foreground">New topic recommendation</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
