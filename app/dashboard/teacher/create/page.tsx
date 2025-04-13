"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Loader2, Upload, FileText, Code, Eye } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CreateExamPage() {
  const [generating, setGenerating] = useState(false)
  const [difficulty, setDifficulty] = useState(50)
  const [questionCount, setQuestionCount] = useState(20)
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["multiple-choice", "true-false"])
  const [showPreview, setShowPreview] = useState(false)
  const [activeTab, setActiveTab] = useState("ai-generated")
  const [codingLanguage, setCodingLanguage] = useState("javascript")
  const [codingEnabled, setCodingEnabled] = useState(false)

  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  const handleGenerate = () => {
    setGenerating(true)

    // Simulate generation process
    setTimeout(() => {
      setGenerating(false)
      window.location.href = "/dashboard/teacher/customize"
    }, 3000)
  }

  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Create Exam Paper</h1>
            <p className="text-slate-600 dark:text-slate-300">Design a new exam with AI assistance</p>
          </div>
          <Dialog open={showPreview} onOpenChange={setShowPreview}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Exam Preview</DialogTitle>
                <DialogDescription>Preview how your exam will appear to students</DialogDescription>
              </DialogHeader>
              <div className="mt-4 border rounded-md p-6 bg-white text-black">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold">Advanced Calculus Final Exam</h2>
                  <p className="text-sm mt-1">MATH 401 | Dr. Jane Smith</p>
                  <p className="text-sm">Time: 60 minutes | Total Points: 100</p>
                  <div className="mt-4 mx-auto max-w-2xl text-sm text-left">
                    <p>
                      <strong>Instructions:</strong> Answer all questions. Show all work for partial credit. No
                      calculators allowed.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold border-b pb-1 mb-4">Section 1: Multiple Choice (25 points)</h3>
                    <div className="space-y-6">
                      <div>
                        <p className="font-medium">1. What is the derivative of f(x) = x²?</p>
                        <div className="ml-6 mt-2 space-y-1">
                          <p>a) f'(x) = x</p>
                          <p>b) f'(x) = 2x</p>
                          <p>c) f'(x) = 2</p>
                          <p>d) f'(x) = x²</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">2. Which of the following is the integral of f(x) = 2x?</p>
                        <div className="ml-6 mt-2 space-y-1">
                          <p>a) F(x) = x²</p>
                          <p>b) F(x) = x² + C</p>
                          <p>c) F(x) = x + C</p>
                          <p>d) F(x) = 2x² + C</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold border-b pb-1 mb-4">Section 2: True/False (15 points)</h3>
                    <div className="space-y-6">
                      <div>
                        <p className="font-medium">3. The derivative of a constant function is always zero.</p>
                        <div className="ml-6 mt-2 space-y-1">
                          <p>True / False</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {codingEnabled && (
                    <div>
                      <h3 className="font-bold border-b pb-1 mb-4">Section 3: Coding Problems (30 points)</h3>
                      <div className="space-y-6">
                        <div>
                          <p className="font-medium">
                            4. Write a function that calculates the derivative of a polynomial function.
                          </p>
                          <div className="ml-6 mt-2">
                            <div className="bg-slate-100 p-4 rounded-md font-mono text-sm">
                              <p>// Write your code here</p>
                              <p>function calculateDerivative(coefficients) {"{"}</p>
                              <p>&nbsp;&nbsp;// coefficients is an array representing a polynomial</p>
                              <p>&nbsp;&nbsp;// Return the coefficients of the derivative</p>
                              <p>{"}"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold border-b pb-1 mb-4">
                      Section {codingEnabled ? "4" : "3"}: Short Answer (30 points)
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <p className="font-medium">
                          {codingEnabled ? "5" : "4"}. What is the derivative of f(x) = e^x?
                        </p>
                        <div className="ml-6 mt-2">
                          <div className="border-b border-dashed border-slate-300 h-8"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Exam Details</CardTitle>
                <CardDescription>Enter basic information about your exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="exam-title">Exam Title</Label>
                      <Input id="exam-title" placeholder="e.g. Advanced Calculus Final Exam" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select defaultValue="mathematics">
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of the exam content and objectives"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="grade-level">Grade Level</Label>
                      <Select defaultValue="university">
                        <SelectTrigger id="grade-level">
                          <SelectValue placeholder="Select grade level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elementary">Elementary School</SelectItem>
                          <SelectItem value="middle">Middle School</SelectItem>
                          <SelectItem value="high">High School</SelectItem>
                          <SelectItem value="university">University</SelectItem>
                          <SelectItem value="graduate">Graduate Level</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                      <Input id="time-limit" type="number" defaultValue="60" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Content Configuration</CardTitle>
                <CardDescription>Define the content and structure of your exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="ai-generated" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="ai-generated">AI-Generated</TabsTrigger>
                    <TabsTrigger value="upload">Upload Content</TabsTrigger>
                    <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                  </TabsList>

                  <TabsContent value="ai-generated" className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="topics">Key Topics</Label>
                        <Textarea
                          id="topics"
                          placeholder="Enter key topics to be covered in the exam, separated by commas"
                          className="min-h-[100px]"
                          defaultValue="Limits, Derivatives, Integrals, Applications of derivatives, Fundamental theorem of calculus"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <Label className="text-base">Difficulty Level</Label>
                          <span className="text-sm font-medium">
                            {difficulty < 33 ? "Easy" : difficulty < 66 ? "Medium" : "Hard"}
                          </span>
                        </div>
                        <Slider
                          value={[difficulty]}
                          onValueChange={(value) => setDifficulty(value[0])}
                          max={100}
                          step={1}
                          className="[&>span]:bg-[#0F172A]"
                        />
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                          <span>Easier</span>
                          <span>Harder</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <Label className="text-base">Number of Questions</Label>
                          <span className="text-sm font-medium">{questionCount}</span>
                        </div>
                        <Slider
                          value={[questionCount]}
                          onValueChange={(value) => setQuestionCount(value[0])}
                          min={5}
                          max={50}
                          step={5}
                          className="[&>span]:bg-[#0F172A]"
                        />
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                          <span>5</span>
                          <span>50</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-base">Question Types</Label>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Select the types of questions to include
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { id: "multiple-choice", label: "Multiple Choice" },
                            { id: "true-false", label: "True/False" },
                            { id: "short-answer", label: "Short Answer" },
                            { id: "long-answer", label: "Long Answer/Essay" },
                            { id: "matching", label: "Matching" },
                            { id: "fill-in-blank", label: "Fill in the Blank" },
                            { id: "case-study", label: "Case Study" },
                          ].map((type) => (
                            <div key={type.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                              <Checkbox
                                id={type.id}
                                checked={selectedTypes.includes(type.id)}
                                onCheckedChange={() => handleTypeToggle(type.id)}
                              />
                              <Label htmlFor={type.id}>{type.label}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 border-t pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <Label htmlFor="coding-toggle" className="text-base flex items-center gap-2">
                              <Code className="h-4 w-4" />
                              Include Coding Questions
                            </Label>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              Add programming exercises to your exam
                            </p>
                          </div>
                          <Checkbox
                            id="coding-toggle"
                            checked={codingEnabled}
                            onCheckedChange={(checked) => setCodingEnabled(checked === true)}
                          />
                        </div>

                        {codingEnabled && (
                          <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                            <div className="space-y-2">
                              <Label htmlFor="coding-language">Primary Programming Language</Label>
                              <Select value={codingLanguage} onValueChange={setCodingLanguage}>
                                <SelectTrigger id="coding-language">
                                  <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="javascript">JavaScript</SelectItem>
                                  <SelectItem value="python">Python</SelectItem>
                                  <SelectItem value="java">Java</SelectItem>
                                  <SelectItem value="cpp">C++</SelectItem>
                                  <SelectItem value="csharp">C#</SelectItem>
                                  <SelectItem value="ruby">Ruby</SelectItem>
                                  <SelectItem value="go">Go</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="coding-topics">Coding Topics</Label>
                              <Textarea
                                id="coding-topics"
                                placeholder="Enter coding topics to be covered, separated by commas"
                                className="min-h-[80px]"
                                defaultValue="Algorithms, Data structures, Functions, Object-oriented programming"
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="coding-questions">Number of Coding Questions</Label>
                                <Select defaultValue="2">
                                  <SelectTrigger id="coding-questions">
                                    <SelectValue placeholder="Select number" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1">1 Question</SelectItem>
                                    <SelectItem value="2">2 Questions</SelectItem>
                                    <SelectItem value="3">3 Questions</SelectItem>
                                    <SelectItem value="4">4 Questions</SelectItem>
                                    <SelectItem value="5">5 Questions</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="test-cases">Test Cases Per Question</Label>
                                <Select defaultValue="3">
                                  <SelectTrigger id="test-cases">
                                    <SelectValue placeholder="Select number" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="2">2 Test Cases</SelectItem>
                                    <SelectItem value="3">3 Test Cases</SelectItem>
                                    <SelectItem value="4">4 Test Cases</SelectItem>
                                    <SelectItem value="5">5 Test Cases</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox id="auto-grade" defaultChecked />
                              <Label htmlFor="auto-grade">Enable automatic grading for code submissions</Label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="upload" className="space-y-6">
                    <div className="border-2 border-dashed rounded-xl p-8 text-center">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="p-4 rounded-full bg-[#0F172A]/10">
                          <Upload className="w-8 h-8 text-[#0F172A]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Upload source materials</h3>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                            Upload textbooks, lecture notes, or other materials to generate exam questions
                          </p>
                          <div className="flex justify-center">
                            <Label htmlFor="source-upload" className="cursor-pointer">
                              <div className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-4 py-2 rounded-md font-medium">
                                Browse Files
                              </div>
                              <Input
                                id="source-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf,.docx,.txt"
                                multiple
                              />
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="manual" className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="manual-questions">Enter Questions Manually</Label>
                        <Textarea
                          id="manual-questions"
                          placeholder="Enter your questions here, one per line. Format: Question? [Answer1, Answer2, Answer3, Answer4] (Correct: 2)"
                          className="min-h-[200px]"
                        />
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        For multiple choice questions, list options in square brackets and indicate the correct answer
                        number in parentheses. For true/false questions, format as: Question? [True, False] (Correct: 1)
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="border-t pt-6 flex justify-end">
                <Button variant="outline" className="mr-2">
                  Save Draft
                </Button>
                <Button onClick={handleGenerate} disabled={generating} className="bg-[#0F172A] hover:bg-[#1E293B]">
                  {generating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Exam"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>AI Features</CardTitle>
                <CardDescription>How our AI enhances your exam creation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Smart Question Generation",
                      description: "AI creates questions based on your specified topics and difficulty level",
                    },
                    {
                      title: "Answer Validation",
                      description: "Ensures all questions have clear, accurate answers",
                    },
                    {
                      title: "Balanced Distribution",
                      description: "Creates a well-balanced exam covering all specified topics",
                    },
                    {
                      title: "Customizable Format",
                      description: "Easily adjust the format to match your institution's requirements",
                    },
                    {
                      title: "Code Analysis",
                      description: "Evaluates coding solutions with comprehensive test cases",
                      coding: true,
                    },
                  ].map((feature, i) => (
                    <div key={i} className={`flex gap-3 ${feature.coding && !codingEnabled ? "opacity-50" : ""}`}>
                      <div className="p-1.5 rounded-full bg-[#0F172A]/10 h-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#0F172A]"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{feature.title}</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Recent Exams</CardTitle>
                <CardDescription>Your recently created exams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Calculus Midterm", date: "2 days ago", questions: 25 },
                    { title: "Physics Final", date: "1 week ago", questions: 30 },
                    { title: "Computer Science Quiz", date: "2 weeks ago", questions: 15, coding: true },
                  ].map((exam, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-full bg-[#0F172A]/10">
                          {exam.coding ? (
                            <Code className="w-4 h-4 text-[#0F172A]" />
                          ) : (
                            <FileText className="w-4 h-4 text-[#0F172A]" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{exam.title}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            {exam.date} • {exam.questions} questions
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 text-xs">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Tips</CardTitle>
                <CardDescription>For creating effective exams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F172A] font-bold">•</span>
                    <span>Be specific about topics to ensure relevant questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F172A] font-bold">•</span>
                    <span>Mix question types for comprehensive assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F172A] font-bold">•</span>
                    <span>Consider time constraints when setting question count</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F172A] font-bold">•</span>
                    <span>Review generated questions for accuracy and clarity</span>
                  </li>
                  {codingEnabled && (
                    <li className="flex items-start gap-2">
                      <span className="text-[#0F172A] font-bold">•</span>
                      <span>For coding questions, provide clear requirements and test cases</span>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
