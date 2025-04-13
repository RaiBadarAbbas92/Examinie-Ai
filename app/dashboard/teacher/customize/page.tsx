"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Download, Eye, FileText, Loader2, Save } from "lucide-react"

export default function CustomizeExamPage() {
  const [saving, setSaving] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [examTitle, setExamTitle] = useState("Advanced Calculus Final Exam")
  const [examFormat, setExamFormat] = useState("standard")

  const handleSave = () => {
    setSaving(true)
    // Simulate saving process
    setTimeout(() => {
      setSaving(false)
    }, 1500)
  }

  const handleDownload = () => {
    setDownloading(true)
    // Simulate download process
    setTimeout(() => {
      setDownloading(false)
    }, 1500)
  }

  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Customize Exam Format</h1>
            <p className="text-muted-foreground">Customize the appearance and structure of your exam</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {saving ? "Saving..." : "Save"}
            </Button>
            <Button variant="outline" className="gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button className="gap-2" onClick={handleDownload} disabled={downloading}>
              {downloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
              {downloading ? "Downloading..." : "Download"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Exam Information</CardTitle>
                <CardDescription>Basic information about your exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="exam-title">Exam Title</Label>
                  <Input
                    id="exam-title"
                    value={examTitle}
                    onChange={(e) => setExamTitle(e.target.value)}
                    placeholder="e.g. Advanced Calculus Final Exam"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="course-name">Course Name</Label>
                    <Input id="course-name" defaultValue="MATH 401" placeholder="e.g. MATH 401" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instructor">Instructor Name</Label>
                    <Input id="instructor" defaultValue="Dr. Jane Smith" placeholder="e.g. Dr. Jane Smith" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Exam Date</Label>
                    <Input id="date" type="date" defaultValue="2025-05-15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time Limit</Label>
                    <Input id="time" type="number" defaultValue="120" placeholder="Minutes" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="total-points">Total Points</Label>
                    <Input id="total-points" type="number" defaultValue="100" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instructions">Instructions</Label>
                  <Textarea
                    id="instructions"
                    defaultValue="Answer all questions. Show all work for partial credit. No calculators allowed."
                    placeholder="Enter exam instructions"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Format & Layout</CardTitle>
                <CardDescription>Customize the appearance of your exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue={examFormat} onValueChange={setExamFormat}>
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="standard">Standard</TabsTrigger>
                    <TabsTrigger value="sections">Sections</TabsTrigger>
                    <TabsTrigger value="custom">Custom</TabsTrigger>
                  </TabsList>

                  <TabsContent value="standard" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="paper-size">Paper Size</Label>
                        <Select defaultValue="letter">
                          <SelectTrigger id="paper-size">
                            <SelectValue placeholder="Select paper size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="letter">Letter (8.5" x 11")</SelectItem>
                            <SelectItem value="a4">A4 (210mm x 297mm)</SelectItem>
                            <SelectItem value="legal">Legal (8.5" x 14")</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="orientation">Orientation</Label>
                        <Select defaultValue="portrait">
                          <SelectTrigger id="orientation">
                            <SelectValue placeholder="Select orientation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="portrait">Portrait</SelectItem>
                            <SelectItem value="landscape">Landscape</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="font">Font</Label>
                        <Select defaultValue="times">
                          <SelectTrigger id="font">
                            <SelectValue placeholder="Select font" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="times">Times New Roman</SelectItem>
                            <SelectItem value="arial">Arial</SelectItem>
                            <SelectItem value="calibri">Calibri</SelectItem>
                            <SelectItem value="georgia">Georgia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="font-size">Font Size</Label>
                        <Select defaultValue="12">
                          <SelectTrigger id="font-size">
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">10pt</SelectItem>
                            <SelectItem value="11">11pt</SelectItem>
                            <SelectItem value="12">12pt</SelectItem>
                            <SelectItem value="14">14pt</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="spacing">Line Spacing</Label>
                      <Select defaultValue="1.5">
                        <SelectTrigger id="spacing">
                          <SelectValue placeholder="Select line spacing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Single</SelectItem>
                          <SelectItem value="1.5">1.5 lines</SelectItem>
                          <SelectItem value="2">Double</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="page-numbers">Include Page Numbers</Label>
                      <Switch id="page-numbers" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="header-footer">Include Header/Footer</Label>
                      <Switch id="header-footer" defaultChecked />
                    </div>
                  </TabsContent>

                  <TabsContent value="sections" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Section Organization</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                          <span className="font-medium">Section 1: Multiple Choice (25 points)</span>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              Move
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                          <span className="font-medium">Section 2: Short Answer (25 points)</span>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              Move
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                          <span className="font-medium">Section 3: Problem Solving (50 points)</span>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              Move
                            </Button>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          + Add Section
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="section-numbering">Continuous Question Numbering</Label>
                      <Switch id="section-numbering" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="section-pages">Start Sections on New Page</Label>
                      <Switch id="section-pages" defaultChecked />
                    </div>
                  </TabsContent>

                  <TabsContent value="custom" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="custom-css">Custom CSS</Label>
                      <Textarea
                        id="custom-css"
                        placeholder="Enter custom CSS"
                        className="min-h-[200px] font-mono"
                        defaultValue={`/* Custom exam styling */
.exam-header {
  text-align: center;
  margin-bottom: 2em;
}

.question {
  margin-bottom: 1.5em;
}

.section-title {
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;
}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="custom-template">Custom HTML Template</Label>
                      <div className="text-sm text-muted-foreground mb-2">
                        Use variables like {"{title}"}, {"{date}"}, {"{questions}"} in your template
                      </div>
                      <Textarea
                        id="custom-template"
                        placeholder="Enter custom HTML template"
                        className="min-h-[200px] font-mono"
                        defaultValue={`<!DOCTYPE html>
<html>
<head>
  <title>{title}</title>
  <style>
    /* Custom styles will be inserted here */
  </style>
</head>
<body>
  <div class="exam-header">
    <h1>{title}</h1>
    <p>Date: {date} | Time: {time} | Total Points: {points}</p>
    <p>{instructions}</p>
  </div>
  
  <div class="exam-content">
    {questions}
  </div>
  
  <footer>
    <p>End of Exam</p>
  </footer>
</body>
</html>`}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Options</CardTitle>
                <CardDescription>Configure additional exam settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="answer-key" className="block mb-1">
                      Generate Answer Key
                    </Label>
                    <p className="text-sm text-muted-foreground">Include a separate answer key document</p>
                  </div>
                  <Switch id="answer-key" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="multiple-versions" className="block mb-1">
                      Create Multiple Versions
                    </Label>
                    <p className="text-sm text-muted-foreground">Generate different versions with shuffled questions</p>
                  </div>
                  <Switch id="multiple-versions" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="qr-code" className="block mb-1">
                      Include QR Code
                    </Label>
                    <p className="text-sm text-muted-foreground">Add QR code for online version access</p>
                  </div>
                  <Switch id="qr-code" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="watermark" className="block mb-1">
                      Add Watermark
                    </Label>
                    <p className="text-sm text-muted-foreground">Apply a watermark to prevent unauthorized copying</p>
                  </div>
                  <Switch id="watermark" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>Exam document preview</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="border rounded-md p-4 w-full max-w-[250px] min-h-[350px] bg-white text-black">
                  <div className="text-center mb-6">
                    <h3 className="font-bold text-sm">{examTitle}</h3>
                    <p className="text-xs">MATH 401 | Dr. Jane Smith</p>
                    <p className="text-xs">May 15, 2025 | 120 minutes | 100 points</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs font-bold">1. What is the derivative of f(x) = x²?</p>
                      <div className="text-xs pl-4">
                        <p>a) f'(x) = x</p>
                        <p>b) f'(x) = 2x</p>
                        <p>c) f'(x) = 2</p>
                        <p>d) f'(x) = x²</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold">2. Evaluate the integral ∫x²dx.</p>
                      <div className="text-xs pl-4">
                        <p>a) x³/3 + C</p>
                        <p>b) x³ + C</p>
                        <p>c) 2x + C</p>
                        <p>d) x² + C</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-[8px] text-center absolute bottom-2 left-0 right-0">Page 1 of 5</div>
                </div>
                <Button variant="link" className="mt-4">
                  View Full Preview
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>Choose your preferred format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="export-format">Format</Label>
                  <Select defaultValue="pdf">
                    <SelectTrigger id="export-format">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="docx">Word Document (.docx)</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                      <SelectItem value="latex">LaTeX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quality">Image Quality</Label>
                  <Select defaultValue="high">
                    <SelectTrigger id="quality">
                      <SelectValue placeholder="Select quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (smaller file size)</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High (print quality)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="include-images">Include Images</Label>
                  <Switch id="include-images" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="include-solutions">Include Solutions</Label>
                  <Switch id="include-solutions" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" onClick={handleDownload} disabled={downloading}>
                  {downloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                  {downloading ? "Downloading..." : "Download Exam"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Templates</CardTitle>
                <CardDescription>Save or load exam templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template-name">Save Current as Template</Label>
                  <div className="flex gap-2">
                    <Input id="template-name" placeholder="Template name" />
                    <Button variant="outline">Save</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Load Template</Label>
                  <div className="space-y-2">
                    {["Standard Final Exam", "Midterm Format", "Quiz Template"].map((template, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-muted rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{template}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Load
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
