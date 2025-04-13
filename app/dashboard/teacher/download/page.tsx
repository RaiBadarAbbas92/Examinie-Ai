import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText, Search } from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Download Exams</h1>
        <p className="text-muted-foreground">Search and download exams for your classes.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Exams</CardTitle>
          <CardDescription>Find exams by subject, grade level, or keyword.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by keyword..." className="w-full bg-background pl-8" />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Grade Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="freshman">Freshman</SelectItem>
                  <SelectItem value="sophomore">Sophomore</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Final Exams
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Midterms
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Quizzes
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Multiple Choice
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Essay
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Problem Solving
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Advanced
            </Badge>
          </div>

          <div className="flex justify-end mt-4">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Exams</TabsTrigger>
          <TabsTrigger value="recent">Recently Added</TabsTrigger>
          <TabsTrigger value="popular">Most Downloaded</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced Calculus Final",
                subject: "Mathematics",
                level: "Senior",
                questions: 25,
                downloads: 342,
                date: "Apr 10, 2025",
              },
              {
                title: "Physics Mechanics Midterm",
                subject: "Physics",
                level: "Junior",
                questions: 20,
                downloads: 215,
                date: "Apr 5, 2025",
              },
              {
                title: "Data Structures Quiz",
                subject: "Computer Science",
                level: "Sophomore",
                questions: 15,
                downloads: 189,
                date: "Mar 28, 2025",
              },
              {
                title: "Literary Analysis Essay",
                subject: "English",
                level: "Junior",
                questions: 5,
                downloads: 156,
                date: "Mar 20, 2025",
              },
              {
                title: "World History Final",
                subject: "History",
                level: "Freshman",
                questions: 30,
                downloads: 203,
                date: "Mar 15, 2025",
              },
              {
                title: "Algorithms and Complexity",
                subject: "Computer Science",
                level: "Senior",
                questions: 18,
                downloads: 278,
                date: "Mar 10, 2025",
              },
            ].map((exam, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{exam.title}</CardTitle>
                    <Checkbox id={`save-${i}`} />
                  </div>
                  <CardDescription>
                    {exam.subject} • {exam.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <FileText className="h-3.5 w-3.5 mr-1" />
                      {exam.questions} questions
                    </div>
                    <div>{exam.downloads} downloads</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{exam.date}</span>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced Calculus Final",
                subject: "Mathematics",
                level: "Senior",
                questions: 25,
                downloads: 342,
                date: "Apr 10, 2025",
              },
              {
                title: "Physics Mechanics Midterm",
                subject: "Physics",
                level: "Junior",
                questions: 20,
                downloads: 215,
                date: "Apr 5, 2025",
              },
              {
                title: "Data Structures Quiz",
                subject: "Computer Science",
                level: "Sophomore",
                questions: 15,
                downloads: 189,
                date: "Mar 28, 2025",
              },
            ].map((exam, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{exam.title}</CardTitle>
                    <Checkbox id={`save-recent-${i}`} />
                  </div>
                  <CardDescription>
                    {exam.subject} • {exam.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <FileText className="h-3.5 w-3.5 mr-1" />
                      {exam.questions} questions
                    </div>
                    <div>{exam.downloads} downloads</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{exam.date}</span>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Algorithms and Complexity",
                subject: "Computer Science",
                level: "Senior",
                questions: 18,
                downloads: 278,
                date: "Mar 10, 2025",
              },
              {
                title: "Advanced Calculus Final",
                subject: "Mathematics",
                level: "Senior",
                questions: 25,
                downloads: 342,
                date: "Apr 10, 2025",
              },
              {
                title: "World History Final",
                subject: "History",
                level: "Freshman",
                questions: 30,
                downloads: 203,
                date: "Mar 15, 2025",
              },
            ].map((exam, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{exam.title}</CardTitle>
                    <Checkbox id={`save-popular-${i}`} />
                  </div>
                  <CardDescription>
                    {exam.subject} • {exam.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <FileText className="h-3.5 w-3.5 mr-1" />
                      {exam.questions} questions
                    </div>
                    <div>{exam.downloads} downloads</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{exam.date}</span>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Physics Mechanics Midterm",
                subject: "Physics",
                level: "Junior",
                questions: 20,
                downloads: 215,
                date: "Apr 5, 2025",
              },
              {
                title: "Literary Analysis Essay",
                subject: "English",
                level: "Junior",
                questions: 5,
                downloads: 156,
                date: "Mar 20, 2025",
              },
            ].map((exam, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{exam.title}</CardTitle>
                    <Checkbox id={`save-saved-${i}`} defaultChecked />
                  </div>
                  <CardDescription>
                    {exam.subject} • {exam.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <FileText className="h-3.5 w-3.5 mr-1" />
                      {exam.questions} questions
                    </div>
                    <div>{exam.downloads} downloads</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{exam.date}</span>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
