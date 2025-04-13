"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Brain,
  Sparkles,
  Loader2,
  AlertCircle,
  Code,
  ToggleLeft,
  BookOpen,
  PenSquare,
  Youtube,
  FileSpreadsheet,
  FileIcon as FilePresentation,
  MessageSquare,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function GenerateQuizPage() {
  const [generating, setGenerating] = useState(false)
  const [difficulty, setDifficulty] = useState(50)
  const [questionCount, setQuestionCount] = useState(10)
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["multiple-choice"])
  const [advancedOptions, setAdvancedOptions] = useState(false)
  const [aiModel, setAiModel] = useState("standard")
  const [codingEnabled, setCodingEnabled] = useState(false)
  const [codingLanguage, setCodingLanguage] = useState("javascript")
  const [previewQuestionType, setPreviewQuestionType] = useState("multiple-choice")
  const [selectedContent, setSelectedContent] = useState<string[]>([])

  // Simulate content being passed from upload page
  useEffect(() => {
    // Check if there's a content selection in localStorage or URL params
    // For demo purposes, we'll just set some default selections
    setSelectedContent(["1", "3"])
  }, [])

  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
      setPreviewQuestionType(type)
    }
  }

  const handleContentSelection = (id: string) => {
    if (selectedContent.includes(id)) {
      setSelectedContent(selectedContent.filter((item) => item !== id))
    } else {
      setSelectedContent([...selectedContent, id])
    }
  }

  const handleGenerate = () => {
    setGenerating(true)

    // Trigger the 3D loader
    if (typeof window !== "undefined" && window.triggerPageTransition) {
      window.triggerPageTransition()
    }

    // Simulate generation process
    setTimeout(() => {
      setGenerating(false)
      window.location.href = "/dashboard/student/take-quiz"
    }, 3000)
  }

  const questionTypes = [
    { id: "multiple-choice", label: "Multiple Choice", icon: <FileText className="h-4 w-4" /> },
    { id: "true-false", label: "True/False", icon: <ToggleLeft className="h-4 w-4" /> },
    { id: "short-answer", label: "Short Answer", icon: <PenSquare className="h-4 w-4" /> },
    { id: "long-answer", label: "Long Answer", icon: <BookOpen className="h-4 w-4" /> },
    { id: "matching", label: "Matching", icon: <FileText className="h-4 w-4" /> },
    { id: "case-study", label: "Case Study", icon: <BookOpen className="h-4 w-4" /> },
    { id: "code-assessment", label: "Code Assessment", icon: <Code className="h-4 w-4" /> },
    { id: "code-execution", label: "Code Execution", icon: <Code className="h-4 w-4" />, advanced: true },
    { id: "diagram", label: "Diagram/Drawing", icon: <PenSquare className="h-4 w-4" />, advanced: true },
  ]

  // Sample content library data
  const contentLibrary = [
    {
      id: "1",
      title: "Machine Learning Fundamentals.pdf",
      type: "pdf",
      date: "2 days ago",
      size: "24 pages",
      icon: <FileText className="h-6 w-6 text-red-500" />,
    },
    {
      id: "2",
      title: "Data Structures Notes.docx",
      type: "docx",
      date: "5 days ago",
      size: "18 pages",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
    },
    {
      id: "3",
      title: "Introduction to Calculus",
      type: "youtube",
      date: "3 days ago",
      size: "18:42",
      icon: <Youtube className="h-6 w-6 text-red-500" />,
    },
    {
      id: "4",
      title: "Biology Presentation.pptx",
      type: "pptx",
      date: "1 week ago",
      size: "32 slides",
      icon: <FilePresentation className="h-6 w-6 text-orange-500" />,
    },
    {
      id: "5",
      title: "Custom Notes on Web Development",
      type: "text",
      date: "1 week ago",
      size: "1,200 words",
      icon: <MessageSquare className="h-6 w-6 text-purple-500" />,
    },
    {
      id: "6",
      title: "Statistics Spreadsheet.xlsx",
      type: "xlsx",
      date: "2 weeks ago",
      size: "5 sheets",
      icon: <FileSpreadsheet className="h-6 w-6 text-green-500" />,
    },
  ]

  // Map preview question types to interfaces
  const renderQuestionPreview = () => {
    switch (previewQuestionType) {
      case "multiple-choice":
        return (
          <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <p className="font-medium mb-3">What is the derivative of f(x) = x²?</p>
            <div className="space-y-2">
              {["f'(x) = x", "f'(x) = 2x", "f'(x) = 2", "f'(x) = x²"].map((option, i) => (
                <div key={i} className="flex items-center space-x-2 p-2 rounded border bg-white dark:bg-slate-800">
                  <div className="w-4 h-4 rounded-full border border-slate-300 flex-shrink-0"></div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        )
      case "true-false":
        return (
          <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <p className="font-medium mb-3">The derivative of a constant function is always zero.</p>
            <div className="space-y-2">
              {["True", "False"].map((option, i) => (
                <div key={i} className="flex items-center space-x-2 p-2 rounded border bg-white dark:bg-slate-800">
                  <div className="w-4 h-4 rounded-full border border-slate-300 flex-shrink-0"></div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        )
      case "short-answer":
        return (
          <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <p className="font-medium mb-3">What is the derivative of f(x) = e^x?</p>
            <div className="border rounded bg-white dark:bg-slate-800 p-2 h-10"></div>
          </div>
        )
      case "long-answer":
        return (
          <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <p className="font-medium mb-3">Explain the chain rule and provide an example of its application.</p>
            <div className="border rounded bg-white dark:bg-slate-800 p-2 h-24"></div>
          </div>
        )
      case "case-study":
        return (
          <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <div className="flex justify-between mb-3">
              <p className="font-medium">Case Study: Motion Analysis</p>
              <div className="flex space-x-1">
                <Badge variant="outline" className="text-xs">
                  Question
                </Badge>
                <Badge variant="outline" className="text-xs bg-slate-200 dark:bg-slate-700">
                  Resources
                </Badge>
              </div>
            </div>
            <p className="text-sm mb-3">
              A ball is thrown vertically upward with an initial velocity of 20 m/s from a height of 2 meters...
            </p>
            <div className="border rounded bg-white dark:bg-slate-800 p-2 h-24"></div>
          </div>
        )
      case "code-assessment":
      case "code-execution":
        return (
          <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <div className="flex justify-between mb-3">
              <p className="font-medium">Write a function that calculates the derivative of a polynomial</p>
              <div className="flex space-x-1">
                <Badge variant="outline" className="text-xs">
                  Code
                </Badge>
                <Badge variant="outline" className="text-xs bg-slate-200 dark:bg-slate-700">
                  Output
                </Badge>
              </div>
            </div>
            <div className="bg-slate-800 text-slate-300 p-2 rounded font-mono text-xs h-32 overflow-hidden">
              <div className="text-purple-400">function</div>
              <div> derivative(coefficients) {"{"}</div>
              <div className="pl-4 text-green-400">// Your code here</div>
              <div>{"}"}</div>
            </div>
            <div className="mt-2 flex justify-end">
              <Button size="sm" variant="outline" className="text-xs">
                Run Code
              </Button>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <p className="text-center text-sm text-muted-foreground">Select a question type to see preview</p>
          </div>
        )
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Generate Quiz</h1>
          <p className="text-muted-foreground">Create a personalized quiz from your study materials</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Selection</CardTitle>
                <CardDescription>Choose which materials to use for your quiz</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-3">
                    {contentLibrary.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={`select-${item.id}`}
                            checked={selectedContent.includes(item.id)}
                            onCheckedChange={() => handleContentSelection(item.id)}
                          />
                          <div className="p-2 bg-muted/50 rounded-md">{item.icon}</div>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.date} • {item.size}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline">{item.type.toUpperCase()}</Badge>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                {selectedContent.length === 0 && (
                  <div className="mt-4 p-3 border rounded-md bg-amber-50 text-amber-700 border-amber-200">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      <p className="font-medium">No content selected</p>
                    </div>
                    <p className="text-sm mt-1">Please select at least one content item to generate a quiz.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quiz Configuration</CardTitle>
                <CardDescription>Customize your quiz settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label className="text-base">Question Types</Label>
                    <p className="text-sm text-muted-foreground">Select the types of questions to include</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {questionTypes.map((type) => (
                        <div
                          key={type.id}
                          className={`flex items-center space-x-3 p-3 rounded-lg border ${
                            type.advanced && !advancedOptions ? "opacity-50" : ""
                          } ${selectedTypes.includes(type.id) ? "border-secondary bg-secondary/5" : ""}`}
                        >
                          <Checkbox
                            id={type.id}
                            checked={selectedTypes.includes(type.id)}
                            onCheckedChange={() => handleTypeToggle(type.id)}
                            disabled={type.advanced && !advancedOptions}
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">{type.icon}</span>
                            <Label htmlFor={type.id}>{type.label}</Label>
                          </div>
                          {type.advanced && (
                            <span className="ml-auto text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                              Advanced
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
                    <h3 className="font-medium mb-2">Question Preview</h3>
                    {renderQuestionPreview()}
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
                      className="[&>span]:bg-secondary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
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
                      className="[&>span]:bg-secondary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5</span>
                      <span>50</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Subject Area</Label>
                    <Select defaultValue="auto">
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto-detect from materials</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedTypes.includes("code-assessment") || selectedTypes.includes("code-execution") ? (
                    <div className="mt-6 border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <Label className="text-base flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Code Question Settings
                          </Label>
                          <p className="text-sm text-muted-foreground">Configure your coding questions</p>
                        </div>
                      </div>

                      <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                        <div className="space-y-2">
                          <Label htmlFor="coding-language">Programming Language</Label>
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
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="coding-difficulty">Coding Difficulty</Label>
                          <Select defaultValue="medium">
                            <SelectTrigger id="coding-difficulty">
                              <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="easy">Easy (Fundamentals)</SelectItem>
                              <SelectItem value="medium">Medium (Intermediate)</SelectItem>
                              <SelectItem value="hard">Hard (Advanced)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="auto-test" defaultChecked />
                          <Label htmlFor="auto-test">Run test cases automatically</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="include-starter" defaultChecked />
                          <Label htmlFor="include-starter">Include starter code</Label>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Label htmlFor="advanced-options" className="text-base">
                          Advanced Options
                        </Label>
                        <p className="text-sm text-muted-foreground">Enable additional quiz configuration options</p>
                      </div>
                      <Switch id="advanced-options" checked={advancedOptions} onCheckedChange={setAdvancedOptions} />
                    </div>

                    {advancedOptions && (
                      <div className="space-y-4 mt-4 p-4 bg-muted/50 rounded-lg">
                        <div className="space-y-2">
                          <Label htmlFor="ai-model">AI Model</Label>
                          <Select value={aiModel} onValueChange={setAiModel}>
                            <SelectTrigger id="ai-model">
                              <SelectValue placeholder="Select AI model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard</SelectItem>
                              <SelectItem value="advanced">Advanced (Better reasoning)</SelectItem>
                              <SelectItem value="specialized">Specialized (Domain-specific)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                          <Select defaultValue="unlimited">
                            <SelectTrigger id="time-limit">
                              <SelectValue placeholder="Select time limit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="unlimited">Unlimited</SelectItem>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="60">60 minutes</SelectItem>
                              <SelectItem value="90">90 minutes</SelectItem>
                              <SelectItem value="120">120 minutes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="randomize" className="block">
                              Randomize Question Order
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Questions will appear in random order each time
                            </p>
                          </div>
                          <Switch id="randomize" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="explanations" className="block">
                              Include Explanations
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Show detailed explanations for correct answers
                            </p>
                          </div>
                          <Switch id="explanations" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="plagiarism" className="block">
                              Plagiarism Detection
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Check written answers against external sources
                            </p>
                          </div>
                          <Switch id="plagiarism" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button
                  onClick={handleGenerate}
                  disabled={generating || selectedTypes.length === 0 || selectedContent.length === 0}
                  className="ml-auto bg-secondary hover:bg-secondary/90 text-primary"
                >
                  {generating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Quiz
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Features</CardTitle>
                <CardDescription>How our AI enhances your quiz</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Smart Question Generation",
                      description: "Questions are tailored to your study materials and learning level",
                    },
                    {
                      title: "Adaptive Difficulty",
                      description: "Questions adjust based on your previous performance",
                    },
                    {
                      title: "Comprehensive Coverage",
                      description: "Ensures all important topics from your materials are covered",
                    },
                    {
                      title: "Detailed Explanations",
                      description: "Each answer includes thorough explanations to enhance learning",
                    },
                    {
                      title: "Code Analysis",
                      description: "Evaluates your coding solutions with test cases",
                      coding: true,
                    },
                    {
                      title: "Knowledge Gap Detection",
                      description: "Identifies areas where you need more practice",
                      advanced: true,
                    },
                    {
                      title: "Concept Mapping",
                      description: "Visualizes relationships between different concepts",
                      advanced: true,
                    },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 ${
                        (feature.advanced && !advancedOptions) ||
                        (feature.coding && !selectedTypes.some((type) => type.includes("code")))
                          ? "opacity-50"
                          : ""
                      }`}
                    >
                      <div className="p-1.5 rounded-full bg-secondary/10 h-fit">
                        <Brain className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm flex items-center gap-2">
                          {feature.title}
                          {feature.advanced && (
                            <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                              Advanced
                            </span>
                          )}
                          {feature.coding && (
                            <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded-full">
                              Coding
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {aiModel === "advanced" && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Advanced AI Model Selected</AlertTitle>
                <AlertDescription>
                  The advanced model provides more nuanced questions and better reasoning capabilities, but may take
                  slightly longer to generate.
                </AlertDescription>
              </Alert>
            )}

            {aiModel === "specialized" && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Specialized AI Model Selected</AlertTitle>
                <AlertDescription>
                  The specialized model is trained on domain-specific knowledge and provides highly accurate questions
                  for your selected subject area.
                </AlertDescription>
              </Alert>
            )}

            {selectedTypes.some((type) => type.includes("code")) && (
              <Alert className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                <Code className="h-4 w-4" />
                <AlertTitle>Coding Questions Enabled</AlertTitle>
                <AlertDescription className="text-blue-500/80">
                  Your quiz will include coding challenges in {codingLanguage}. Make sure you're comfortable with this
                  language before proceeding.
                </AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Selected Content</CardTitle>
                <CardDescription>Materials used for this quiz</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedContent.length > 0 ? (
                    contentLibrary
                      .filter((item) => selectedContent.includes(item.id))
                      .map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-full bg-muted">{item.icon}</div>
                            <div>
                              <p className="font-medium text-sm">{item.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {item.type.toUpperCase()} • {item.size}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleContentSelection(item.id)}
                            className="h-7 text-xs"
                          >
                            Remove
                          </Button>
                        </div>
                      ))
                  ) : (
                    <div className="text-center p-4 text-muted-foreground">
                      <p>No content selected</p>
                      <p className="text-xs mt-1">Please select at least one content item</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="tips">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tips">Tips</TabsTrigger>
                <TabsTrigger value="stats">Your Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="tips" className="p-4 bg-muted/30 rounded-lg mt-2">
                <h3 className="font-medium mb-2">Quiz Generation Tips</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Select multiple document sources for comprehensive coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Mix question types to test different aspects of knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Start with medium difficulty and adjust based on results</span>
                  </li>
                  {selectedTypes.some((type) => type.includes("code")) && (
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>For coding questions, start with simpler problems to build confidence</span>
                    </li>
                  )}
                </ul>
              </TabsContent>
              <TabsContent value="stats" className="p-4 bg-muted/30 rounded-lg mt-2">
                <h3 className="font-medium mb-2">Your Learning Stats</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Quizzes Taken:</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Score:</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Strongest Subject:</span>
                    <span className="font-medium">Computer Science</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Needs Improvement:</span>
                    <span className="font-medium">Physics</span>
                  </div>
                  {selectedTypes.some((type) => type.includes("code")) && (
                    <div className="flex justify-between">
                      <span>Coding Proficiency:</span>
                      <span className="font-medium">Intermediate</span>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
