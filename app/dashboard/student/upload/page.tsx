"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Link2,
  FileImage,
  Youtube,
  FileSpreadsheet,
  FileIcon as FilePresentation,
  File,
  BookOpen,
  MessageSquare,
  Lightbulb,
  ArrowLeft,
  AlertCircle,
  Sparkles,
} from "lucide-react"

type ContentType = "document" | "image" | "youtube" | "article" | "freetext" | "topic" | null

export default function UploadDocumentPage() {
  const [selectedType, setSelectedType] = useState<ContentType>(null)
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [freeText, setFreeText] = useState("")
  const [topic, setTopic] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [selectedContent, setSelectedContent] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setUploadSuccess(false)
    }
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
    setUploadSuccess(false)
  }

  const handleYoutubeUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(e.target.value)
    setUploadSuccess(false)
  }

  const handleFreeTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFreeText(e.target.value)
    setUploadSuccess(false)
  }

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value)
    setUploadSuccess(false)
  }

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)
      // Reset selection after successful upload
      setTimeout(() => {
        setSelectedType(null)
      }, 2000)
    }, 1500)
  }

  const handleContentSelection = (id: string) => {
    if (selectedContent.includes(id)) {
      setSelectedContent(selectedContent.filter((item) => item !== id))
    } else {
      setSelectedContent([...selectedContent, id])
    }
  }

  const handleGenerateExam = () => {
    setIsGenerating(true)
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false)
      window.location.href = "/dashboard/student/generate"
    }, 2000)
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return <FileText className="h-6 w-6 text-red-500" />
      case "docx":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "xlsx":
        return <FileSpreadsheet className="h-6 w-6 text-green-500" />
      case "pptx":
        return <FilePresentation className="h-6 w-6 text-orange-500" />
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <FileImage className="h-6 w-6 text-purple-500" />
      default:
        return <File className="h-6 w-6 text-gray-500" />
    }
  }

  const renderContentTypeCards = () => {
    const contentTypes = [
      {
        id: "document",
        title: "Document",
        description: "Upload PDF, DOCX, XLSX, or PPTX files",
        icon: <FileText className="h-12 w-12 mb-4 text-red-500" />,
      },
      {
        id: "image",
        title: "Image",
        description: "Upload JPG, PNG, or GIF images",
        icon: <FileImage className="h-12 w-12 mb-4 text-purple-500" />,
      },
      {
        id: "youtube",
        title: "YouTube Video",
        description: "Link to educational YouTube videos",
        icon: <Youtube className="h-12 w-12 mb-4 text-red-500" />,
      },
      {
        id: "article",
        title: "Article",
        description: "Link to online articles or web pages",
        icon: <BookOpen className="h-12 w-12 mb-4 text-blue-500" />,
      },
      {
        id: "freetext",
        title: "Free Text",
        description: "Type or paste your own content",
        icon: <MessageSquare className="h-12 w-12 mb-4 text-green-500" />,
      },
      {
        id: "topic",
        title: "Topic",
        description: "Generate content from a specific topic",
        icon: <Lightbulb className="h-12 w-12 mb-4 text-amber-500" />,
      },
    ]

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contentTypes.map((type) => (
          <Card
            key={type.id}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => setSelectedType(type.id as ContentType)}
          >
            <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
              {type.icon}
              <h3 className="font-medium text-lg mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const renderUploadInterface = () => {
    switch (selectedType) {
      case "document":
        return (
          <div className="space-y-4">
            <div
              className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <div className="flex justify-center gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <FileText className="h-10 w-10 text-red-500 mb-1" />
                  <span className="text-xs">PDF</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileText className="h-10 w-10 text-blue-500 mb-1" />
                  <span className="text-xs">DOCX</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileSpreadsheet className="h-10 w-10 text-green-500 mb-1" />
                  <span className="text-xs">XLSX</span>
                </div>
                <div className="flex flex-col items-center">
                  <FilePresentation className="h-10 w-10 text-orange-500 mb-1" />
                  <span className="text-xs">PPTX</span>
                </div>
              </div>
              <h3 className="font-medium text-lg mb-1">Drag and drop your file here</h3>
              <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
              <Input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".pdf,.docx,.txt,.xlsx,.pptx"
                onChange={handleFileChange}
              />
              <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                Select File
              </Button>
            </div>
            {file && (
              <div className="flex items-center gap-2 p-2 border rounded-md bg-muted/30">
                {getFileIcon(file.name.split(".").pop() || "")}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setFile(null)
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        )

      case "image":
        return (
          <div className="space-y-4">
            <div
              className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              <FileImage className="h-10 w-10 text-purple-500 mx-auto mb-4" />
              <h3 className="font-medium text-lg mb-1">Upload an image</h3>
              <p className="text-sm text-muted-foreground mb-4">JPG, PNG, GIF formats supported</p>
              <Input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              <Button variant="outline" onClick={() => document.getElementById("image-upload")?.click()}>
                Select Image
              </Button>
            </div>
            {file && file.type.includes("image") && (
              <div className="flex items-center gap-2 p-2 border rounded-md bg-muted/30">
                <FileImage className="h-5 w-5 text-purple-500" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setFile(null)
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        )

      case "youtube":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="youtube-url">YouTube Video URL</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Youtube className="absolute left-2 top-2.5 h-4 w-4 text-red-500" />
                  <Input
                    id="youtube-url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="pl-8"
                    value={youtubeUrl}
                    onChange={handleYoutubeUrlChange}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Enter the URL of a YouTube video to generate quizzes from its content.
              </p>
            </div>
            {youtubeUrl && (
              <div className="border rounded-md p-4 bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <Youtube className="h-5 w-5 text-red-500" />
                  <p className="font-medium">YouTube Video</p>
                </div>
                <p className="text-sm truncate">{youtubeUrl}</p>
              </div>
            )}
          </div>
        )

      case "article":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="article-url">Article URL</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Link2 className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="article-url" />
                  <Input
                    id="article-url"
                    placeholder="https://example.com/article"
                    className="pl-8"
                    value={url}
                    onChange={handleUrlChange}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Enter the URL of an online article to generate quizzes from its content.
              </p>
            </div>
          </div>
        )

      case "freetext":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="free-text">Enter Text Content</Label>
              <Textarea
                id="free-text"
                placeholder="Paste or type your content here..."
                className="min-h-[200px]"
                value={freeText}
                onChange={handleFreeTextChange}
              />
              <p className="text-sm text-muted-foreground">
                Enter or paste text content to generate quizzes and study materials.
              </p>
            </div>
          </div>
        )

      case "topic":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic or Subject</Label>
              <Input
                id="topic"
                placeholder="e.g., Quantum Physics, World War II, Machine Learning..."
                value={topic}
                onChange={handleTopicChange}
              />
              <p className="text-sm text-muted-foreground">
                Enter a topic or subject and our AI will generate quizzes based on that topic.
              </p>
            </div>
            <div className="p-4 border rounded-md bg-muted/30">
              <h4 className="font-medium mb-2">How Topic-Based Generation Works:</h4>
              <ol className="text-sm space-y-1 list-decimal pl-4">
                <li>Enter a specific topic or subject area</li>
                <li>Our AI researches and gathers information on the topic</li>
                <li>The system generates relevant questions and answers</li>
                <li>Review and customize the generated quiz</li>
              </ol>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const canUpload = () => {
    switch (selectedType) {
      case "document":
      case "image":
        return !!file
      case "youtube":
        return !!youtubeUrl
      case "article":
        return !!url
      case "freetext":
        return !!freeText
      case "topic":
        return !!topic
      default:
        return false
    }
  }

  // Sample content history data
  const contentHistory = [
    {
      id: "1",
      title: "Machine Learning Fundamentals.pdf",
      type: "pdf",
      date: "2 days ago",
      size: "24 pages",
      icon: <FileText className="h-8 w-8 text-red-500" />,
    },
    {
      id: "2",
      title: "Data Structures Notes.docx",
      type: "docx",
      date: "5 days ago",
      size: "18 pages",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
    },
    {
      id: "3",
      title: "Introduction to Calculus",
      type: "youtube",
      date: "3 days ago",
      size: "18:42",
      icon: <Youtube className="h-8 w-8 text-red-500" />,
    },
    {
      id: "4",
      title: "Biology Presentation.pptx",
      type: "pptx",
      date: "1 week ago",
      size: "32 slides",
      icon: <FilePresentation className="h-8 w-8 text-orange-500" />,
    },
    {
      id: "5",
      title: "Custom Notes on Web Development",
      type: "text",
      date: "1 week ago",
      size: "1,200 words",
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
    },
  ]

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Content</h1>
          <p className="text-muted-foreground">Upload or create content to generate quizzes and study materials.</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>
                  {selectedType
                    ? `Upload ${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}`
                    : "Choose Content Type"}
                </CardTitle>
                <CardDescription>
                  {selectedType
                    ? "Upload your content to generate AI-powered quizzes"
                    : "Select a content type to begin"}
                </CardDescription>
              </div>
              {selectedType && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedType(null)
                    setFile(null)
                  }}
                  className="flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>{selectedType ? renderUploadInterface() : renderContentTypeCards()}</CardContent>
          {selectedType && (
            <CardFooter className="flex flex-col items-start gap-4">
              {uploadSuccess && (
                <div className="w-full p-3 rounded-md bg-green-50 text-green-700 border border-green-200">
                  <p className="text-sm font-medium">Content uploaded successfully!</p>
                  <p className="text-xs">You can now generate quizzes from this content.</p>
                </div>
              )}
              <div className="flex justify-between w-full">
                <Button variant="outline" onClick={() => setSelectedType(null)}>
                  Cancel
                </Button>
                <Button onClick={handleUpload} disabled={!canUpload() || isUploading}>
                  {isUploading ? "Uploading..." : "Upload Content"}
                </Button>
              </div>
            </CardFooter>
          )}
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Content Library</CardTitle>
              <CardDescription>Your uploaded learning materials</CardDescription>
            </div>
            <Button
              onClick={handleGenerateExam}
              disabled={selectedContent.length === 0 || isGenerating}
              className="bg-secondary hover:bg-secondary/90 text-primary"
            >
              {isGenerating ? (
                <>
                  <AlertCircle className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Exam
                </>
              )}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentHistory.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`select-${item.id}`}
                      checked={selectedContent.includes(item.id)}
                      onCheckedChange={() => handleContentSelection(item.id)}
                      className="mr-1"
                    />
                    {item.icon}
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.type === "youtube" ? "YouTube • " : ""}
                        {item.date} • {item.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="mr-2">
                      {item.type.toUpperCase()}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Preview
                    </Button>
                    <Button size="sm">Generate Quiz</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <div className="text-sm text-muted-foreground">{selectedContent.length} items selected</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={selectedContent.length === 0}>
                Download Selected
              </Button>
              <Button variant="destructive" size="sm" disabled={selectedContent.length === 0}>
                Delete Selected
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent content uploads and quiz generations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Uploaded",
                  title: "Physics Formulas.pdf",
                  date: "Today, 10:23 AM",
                  icon: <FileText className="h-5 w-5 text-red-500" />,
                },
                {
                  action: "Generated Quiz",
                  title: "Machine Learning Fundamentals",
                  date: "Yesterday, 3:45 PM",
                  icon: <FileText className="h-5 w-5 text-green-500" />,
                },
                {
                  action: "Uploaded",
                  title: "Introduction to Calculus (YouTube)",
                  date: "3 days ago, 2:12 PM",
                  icon: <Youtube className="h-5 w-5 text-red-500" />,
                },
                {
                  action: "Generated Quiz",
                  title: "Data Structures",
                  date: "5 days ago, 11:30 AM",
                  icon: <FileText className="h-5 w-5 text-green-500" />,
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg border">
                  <div className="p-2 bg-muted rounded-full">{activity.icon}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant={activity.action === "Uploaded" ? "outline" : "secondary"} className="text-xs">
                        {activity.action}
                      </Badge>
                      <p className="font-medium">{activity.title}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
