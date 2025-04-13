"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Copy, Download, Edit, FileText, MoreHorizontal, Search, Share2, Star, Trash2 } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function SavedPapersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedExams, setSelectedExams] = useState<string[]>([])
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [examToDelete, setExamToDelete] = useState<string | null>(null)

  // Mock saved papers data
  const savedPapers = [
    {
      id: "paper-001",
      title: "Advanced Calculus Final Exam",
      subject: "Mathematics",
      created: "April 10, 2025",
      lastModified: "April 11, 2025",
      questions: 25,
      duration: "120 minutes",
      status: "published",
      starred: true,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "paper-002",
      title: "Physics Mechanics Midterm",
      subject: "Physics",
      created: "April 5, 2025",
      lastModified: "April 7, 2025",
      questions: 30,
      duration: "90 minutes",
      status: "draft",
      starred: false,
      thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "paper-003",
      title: "Data Structures Quiz",
      subject: "Computer Science",
      created: "March 28, 2025",
      lastModified: "April 2, 2025",
      questions: 20,
      duration: "60 minutes",
      status: "published",
      starred: true,
      thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "paper-004",
      title: "English Literature Essay Exam",
      subject: "English",
      created: "March 20, 2025",
      lastModified: "March 25, 2025",
      questions: 5,
      duration: "180 minutes",
      status: "published",
      starred: false,
      thumbnail: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "paper-005",
      title: "World History Test",
      subject: "History",
      created: "March 15, 2025",
      lastModified: "March 18, 2025",
      questions: 40,
      duration: "120 minutes",
      status: "draft",
      starred: false,
      thumbnail: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: "paper-006",
      title: "Chemistry Lab Assessment",
      subject: "Chemistry",
      created: "March 10, 2025",
      lastModified: "March 12, 2025",
      questions: 15,
      duration: "90 minutes",
      status: "published",
      starred: true,
      thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "paper-007",
      title: "Biology Concepts Quiz",
      subject: "Biology",
      created: "March 5, 2025",
      lastModified: "March 8, 2025",
      questions: 25,
      duration: "60 minutes",
      status: "published",
      starred: false,
      thumbnail: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "paper-008",
      title: "Algebra Practice Test",
      subject: "Mathematics",
      created: "March 1, 2025",
      lastModified: "March 3, 2025",
      questions: 30,
      duration: "90 minutes",
      status: "draft",
      starred: false,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  // Filter papers based on search query
  const filteredPapers = savedPapers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSelectExam = (examId: string) => {
    if (selectedExams.includes(examId)) {
      setSelectedExams(selectedExams.filter((id) => id !== examId))
    } else {
      setSelectedExams([...selectedExams, examId])
    }
  }

  const handleSelectAll = () => {
    if (selectedExams.length === filteredPapers.length) {
      setSelectedExams([])
    } else {
      setSelectedExams(filteredPapers.map((paper) => paper.id))
    }
  }

  const handleDeleteConfirm = () => {
    // In a real app, this would delete the exam
    console.log("Deleting exam:", examToDelete)
    setShowDeleteDialog(false)
    setExamToDelete(null)
  }

  const confirmDelete = (examId: string) => {
    setExamToDelete(examId)
    setShowDeleteDialog(true)
  }

  return (
    <DashboardSidebar role="teacher">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Saved Exam Papers</h1>
            <p className="text-muted-foreground">Manage your saved exam papers and templates</p>
          </div>
          <div className="flex gap-2">
            <Tabs value={viewMode} onValueChange={setViewMode} className="hidden md:block">
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button>Create New Exam</Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search papers..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedExams.length > 0 && (
          <div className="bg-muted/50 p-4 rounded-lg border flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <span className="font-medium">{selectedExams.length}</span> exam{selectedExams.length !== 1 ? "s" : ""}{" "}
              selected
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setSelectedExams([])}>
                Cancel
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Duplicate
              </Button>
              <Button variant="outline" size="sm" className="text-red-500">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        )}

        {filteredPapers.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-10 text-center">
              <FileText className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No exams found</h3>
              <p className="text-muted-foreground max-w-md">
                {searchQuery
                  ? `No exams match your search for "${searchQuery}". Try a different search term.`
                  : "You haven't created any exams yet."}
              </p>
              {!searchQuery && <Button className="mt-4">Create Your First Exam</Button>}
            </CardContent>
          </Card>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPapers.map((paper) => (
              <Card key={paper.id} className="overflow-hidden group">
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Checkbox
                      checked={selectedExams.includes(paper.id)}
                      onCheckedChange={() => handleSelectExam(paper.id)}
                      className="h-5 w-5 bg-white/90 border-white/50"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-8 w-8 ${paper.starred ? "text-yellow-500" : "text-white/70 hover:text-white"}`}
                    >
                      <Star className="h-5 w-5 fill-current" />
                    </Button>
                  </div>
                  <div className="h-40 bg-muted relative overflow-hidden">
                    <img
                      src={paper.thumbnail || "/placeholder.svg"}
                      alt={paper.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base line-clamp-1">{paper.title}</CardTitle>
                      <CardDescription className="line-clamp-1">{paper.subject}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="h-4 w-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500" onClick={() => confirmDelete(paper.id)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant={paper.status === "published" ? "success" : "outline"}>
                      {paper.status === "published" ? "Published" : "Draft"}
                    </Badge>
                    <Badge variant="outline">{paper.questions} questions</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Last modified: {paper.lastModified}</p>
                </CardContent>
                <CardFooter className="p-4 pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Open
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-muted/50 p-3 rounded-lg border grid grid-cols-12 gap-4 text-sm font-medium hidden md:grid">
              <div className="col-span-1">
                <Checkbox
                  checked={selectedExams.length === filteredPapers.length && filteredPapers.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </div>
              <div className="col-span-4">Title</div>
              <div className="col-span-2">Subject</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Last Modified</div>
              <div className="col-span-1">Actions</div>
            </div>

            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-card p-4 rounded-lg border grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-1 flex md:block items-center justify-between">
                  <Checkbox
                    checked={selectedExams.includes(paper.id)}
                    onCheckedChange={() => handleSelectExam(paper.id)}
                  />
                  <div className="md:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="h-4 w-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500" onClick={() => confirmDelete(paper.id)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded overflow-hidden hidden md:block">
                      <img
                        src={paper.thumbnail || "/placeholder.svg"}
                        alt={paper.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {paper.title}
                        {paper.starred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                      </div>
                      <div className="text-xs text-muted-foreground md:hidden">
                        {paper.subject} • {paper.questions} questions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 hidden md:block">{paper.subject}</div>
                <div className="md:col-span-2 hidden md:block">
                  <Badge variant={paper.status === "published" ? "success" : "outline"}>
                    {paper.status === "published" ? "Published" : "Draft"}
                  </Badge>
                </div>
                <div className="md:col-span-2 text-sm text-muted-foreground hidden md:block">{paper.lastModified}</div>
                <div className="md:col-span-1 hidden md:flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500" onClick={() => confirmDelete(paper.id)}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="md:hidden flex justify-between items-center col-span-1">
                  <Badge variant={paper.status === "published" ? "success" : "outline"}>
                    {paper.status === "published" ? "Published" : "Draft"}
                  </Badge>
                  <div className="text-xs text-muted-foreground">{paper.lastModified}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredPapers.length > 0 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{filteredPapers.length}</span> of{" "}
              <span className="font-medium">{savedPapers.length}</span> exams
            </div>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        )}
      </div>

      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this exam?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the exam and remove it from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardSidebar>
  )
}
