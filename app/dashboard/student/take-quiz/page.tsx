"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Flag,
  HelpCircle,
  Code,
  FileText,
  BookOpen,
  CheckCircle,
  Play,
  ToggleLeft,
  Loader2,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Mock quiz data
const quizData = {
  title: "Advanced Calculus Quiz",
  totalQuestions: 12,
  timeLimit: 30, // minutes
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the derivative of f(x) = x²?",
      options: ["f'(x) = x", "f'(x) = 2x", "f'(x) = 2", "f'(x) = x²"],
      correctAnswer: 1,
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following is the integral of f(x) = 2x?",
      options: ["F(x) = x²", "F(x) = x² + C", "F(x) = x + C", "F(x) = 2x² + C"],
      correctAnswer: 1,
    },
    {
      id: 3,
      type: "true-false",
      question: "The derivative of a constant function is always zero.",
      correctAnswer: true,
    },
    {
      id: 4,
      type: "short-answer",
      question: "What is the derivative of f(x) = e^x?",
      correctAnswer: "e^x",
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is the limit of (sin x)/x as x approaches 0?",
      options: ["0", "1", "∞", "Does not exist"],
      correctAnswer: 1,
    },
    {
      id: 6,
      type: "multiple-select",
      question: "Which of the following functions are differentiable at x = 0? (Select all that apply)",
      options: ["f(x) = |x|", "f(x) = x²", "f(x) = x^(1/3)", "f(x) = sin(x)"],
      correctAnswer: [1, 3],
    },
    {
      id: 7,
      type: "long-answer",
      question: "Explain the chain rule and provide an example of its application.",
      correctAnswer: "",
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "What is the second derivative of f(x) = sin(x)?",
      options: ["f''(x) = sin(x)", "f''(x) = cos(x)", "f''(x) = -sin(x)", "f''(x) = -cos(x)"],
      correctAnswer: 2,
    },
    {
      id: 9,
      type: "true-false",
      question: "If f'(x) = 0 for all x in an interval, then f(x) must be constant on that interval.",
      correctAnswer: true,
    },
    {
      id: 10,
      type: "short-answer",
      question: "What is the derivative of f(x) = ln(x)?",
      correctAnswer: "1/x",
    },
    {
      id: 11,
      type: "case-study",
      question:
        "A ball is thrown vertically upward with an initial velocity of 20 m/s from a height of 2 meters above the ground. Assuming the acceleration due to gravity is 9.8 m/s², analyze the motion of the ball and determine: (a) the maximum height reached, (b) the time taken to reach the maximum height, and (c) the total time the ball is in the air before hitting the ground.",
      resources: [
        {
          type: "text",
          content:
            "The position function for a vertically thrown object is s(t) = -4.9t² + v₀t + s₀, where v₀ is the initial velocity and s₀ is the initial height.",
        },
        { type: "text", content: "The velocity function is v(t) = -9.8t + v₀." },
        { type: "image", url: "/placeholder.svg?height=200&width=400", alt: "Trajectory diagram" },
      ],
      correctAnswer: "",
    },
    {
      id: 12,
      type: "code-assessment",
      question:
        "Write a function that calculates the derivative of a polynomial function represented as an array of coefficients.",
      language: "javascript",
      starterCode:
        "function derivative(coefficients) {\n  // coefficients is an array representing a polynomial\n  // e.g., [3, 2, 1] represents 3x² + 2x + 1\n  // Return the coefficients of the derivative\n\n  // Your code here\n}",
      testCases: [
        { input: "[3, 2, 1]", expectedOutput: "[6, 2]", description: "Derivative of 3x² + 2x + 1" },
        { input: "[5, 0, 0, 0]", expectedOutput: "[15, 0, 0]", description: "Derivative of 5x³" },
        { input: "[1, 1]", expectedOutput: "[1]", description: "Derivative of x + 1" },
      ],
      correctAnswer: "",
    },
  ],
}

export default function TakeQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<any[]>(Array(quizData.questions.length).fill(null))
  const [timeRemaining, setTimeRemaining] = useState(quizData.timeLimit * 60) // in seconds
  const [flagged, setFlagged] = useState<number[]>([])
  const [codeOutput, setCodeOutput] = useState<string | null>(null)
  const [codeRunning, setCodeRunning] = useState(false)
  const [activeTab, setActiveTab] = useState("question")
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[]>([])

  const question = quizData.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.totalQuestions) * 100

  // Simulate time countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleNext = () => {
    if (currentQuestion < quizData.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setActiveTab("question")
      // Trigger the 3D loader
      if (typeof window !== "undefined" && window.triggerPageTransition) {
        window.triggerPageTransition()
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setActiveTab("question")
      // Trigger the 3D loader
      if (typeof window !== "undefined" && window.triggerPageTransition) {
        window.triggerPageTransition()
      }
    }
  }

  const handleAnswer = (value: any) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleMultipleSelect = (optionIndex: number) => {
    const currentAnswer = answers[currentQuestion] || []
    const newAnswer = currentAnswer.includes(optionIndex)
      ? currentAnswer.filter((i: number) => i !== optionIndex)
      : [...currentAnswer, optionIndex]

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = newAnswer
    setAnswers(newAnswers)
  }

  const toggleFlag = () => {
    if (flagged.includes(currentQuestion)) {
      setFlagged(flagged.filter((q) => q !== currentQuestion))
    } else {
      setFlagged([...flagged, currentQuestion])
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleSubmit = () => {
    // Trigger the 3D loader
    if (typeof window !== "undefined" && window.triggerPageTransition) {
      window.triggerPageTransition()
    }

    // Navigate to results page
    setTimeout(() => {
      window.location.href = "/dashboard/student/results"
    }, 2000)
  }

  const runCode = () => {
    setCodeRunning(true)
    // Simulate code execution
    setTimeout(() => {
      setCodeRunning(false)
      if (question.type === "code-assessment") {
        setCodeOutput("Function executed successfully!")
        setTestResults([
          { passed: true, message: "Test 1: Derivative of 3x² + 2x + 1 → [6, 2] ✓" },
          { passed: true, message: "Test 2: Derivative of 5x³ → [15, 0, 0] ✓" },
          { passed: false, message: "Test 3: Derivative of x + 1 → Expected [1], got [0] ✗" },
        ])
        setActiveTab("output")
      }
    }, 2000)
  }

  const getQuestionIcon = (type: string) => {
    switch (type) {
      case "multiple-choice":
        return <FileText className="h-4 w-4" />
      case "multiple-select":
        return <CheckCircle className="h-4 w-4" />
      case "true-false":
        return <ToggleLeft className="h-4 w-4" />
      case "short-answer":
        return <BookOpen className="h-4 w-4" />
      case "long-answer":
        return <BookOpen className="h-4 w-4" />
      case "case-study":
        return <BookOpen className="h-4 w-4" />
      case "code-assessment":
        return <Code className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const renderQuestionContent = () => {
    if (question.type === "case-study") {
      return <div className="text-lg font-medium mb-4">{question.question}</div>
    }

    if (question.type === "code-assessment") {
      return <div className="text-lg font-medium mb-4">{question.question}</div>
    }

    // For all other question types
    return (
      <>
        <div className="text-lg font-medium mb-4">{question.question}</div>
        {question.type === "multiple-choice" && (
          <RadioGroup
            value={answers[currentQuestion]?.toString()}
            onValueChange={(value) => handleAnswer(Number.parseInt(value))}
          >
            <div className="space-y-3">
              {question.options?.map((option, i) => (
                <div key={i} className="flex items-center space-x-2 p-3 rounded-lg border">
                  <RadioGroupItem value={i.toString()} id={`option-${i}`} />
                  <Label htmlFor={`option-${i}`} className="flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}

        {question.type === "true-false" && (
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <RadioGroup
              value={answers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswer(value === "true")}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-12">
                  <div className="flex flex-col items-center space-y-3">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${
                        answers[currentQuestion] === true
                          ? "border-green-500 bg-green-100 dark:bg-green-900/30"
                          : "border-slate-200"
                      }`}
                    >
                      <RadioGroupItem value="true" id="true" className="sr-only" />
                      <Label htmlFor="true" className="text-2xl font-bold cursor-pointer">
                        TRUE
                      </Label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${
                        answers[currentQuestion] === false
                          ? "border-red-500 bg-red-100 dark:bg-red-900/30"
                          : "border-slate-200"
                      }`}
                    >
                      <RadioGroupItem value="false" id="false" className="sr-only" />
                      <Label htmlFor="false" className="text-2xl font-bold cursor-pointer">
                        FALSE
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        )}

        {question.type === "multiple-select" && (
          <div className="space-y-3">
            {question.options?.map((option, i) => (
              <div key={i} className="flex items-center space-x-2 p-3 rounded-lg border">
                <Checkbox
                  id={`option-${i}`}
                  checked={(answers[currentQuestion] || []).includes(i)}
                  onCheckedChange={() => handleMultipleSelect(i)}
                />
                <Label htmlFor={`option-${i}`} className="flex-1">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        )}

        {question.type === "short-answer" && (
          <Textarea
            placeholder="Type your answer here..."
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
            className="min-h-[100px]"
          />
        )}

        {question.type === "long-answer" && (
          <Textarea
            placeholder="Type your detailed response here..."
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
            className="min-h-[250px]"
          />
        )}
      </>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">{quizData.title}</h1>
          <p className="text-slate-600 dark:text-slate-300">
            Question {currentQuestion + 1} of {quizData.totalQuestions}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md">
            <Clock className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            <span className="font-medium">{formatTime(timeRemaining)}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFlag}
            className={flagged.includes(currentQuestion) ? "text-red-500" : ""}
          >
            <Flag className="w-4 h-4 mr-1" />
            {flagged.includes(currentQuestion) ? "Flagged" : "Flag"}
          </Button>
        </div>
      </div>

      <Progress value={progress} className="h-2" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="card-shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {getQuestionIcon(question.type)}
                    Question {currentQuestion + 1}
                    {question.type === "code-assessment" && (
                      <Badge className="bg-blue-500 hover:bg-blue-600">Coding</Badge>
                    )}
                    {question.type === "case-study" && (
                      <Badge className="bg-purple-500 hover:bg-purple-600">Case Study</Badge>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {question.type === "multiple-choice" && "Select the best answer"}
                    {question.type === "multiple-select" && "Select all that apply"}
                    {question.type === "true-false" && "True or False"}
                    {question.type === "short-answer" && "Provide a short answer"}
                    {question.type === "long-answer" && "Write a detailed response"}
                    {question.type === "case-study" && "Analyze the case and provide a solution"}
                    {question.type === "code-assessment" && `Write code in ${question.language}`}
                  </CardDescription>
                  {(question.type === "case-study" || question.type === "code-assessment") && (
                    <div className="mt-4">
                      <TabsList className="grid w-full max-w-[200px] grid-cols-2">
                        <TabsTrigger value="question">Question</TabsTrigger>
                        {question.type === "case-study" && <TabsTrigger value="resources">Resources</TabsTrigger>}
                        {question.type === "code-assessment" && <TabsTrigger value="output">Output</TabsTrigger>}
                      </TabsList>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {question.type === "case-study" || question.type === "code-assessment" ? (
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsContent value="question" className="mt-0 space-y-4">
                    {renderQuestionContent()}

                    {question.type === "case-study" && (
                      <Textarea
                        placeholder="Type your analysis and solution here..."
                        value={answers[currentQuestion] || ""}
                        onChange={(e) => handleAnswer(e.target.value)}
                        className="min-h-[300px]"
                      />
                    )}

                    {question.type === "code-assessment" && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-blue-500">{question.language}</Badge>
                            <span className="text-xs text-muted-foreground">Write your solution below</span>
                          </div>
                          <Button
                            onClick={runCode}
                            disabled={codeRunning}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            {codeRunning ? (
                              <>
                                <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                                Running...
                              </>
                            ) : (
                              <>
                                <Play className="mr-2 h-3 w-3" />
                                Run Code
                              </>
                            )}
                          </Button>
                        </div>
                        <div className="font-mono text-sm bg-slate-900 text-slate-100 p-4 rounded-md overflow-auto">
                          <Textarea
                            value={answers[currentQuestion] || question.starterCode}
                            onChange={(e) => handleAnswer(e.target.value)}
                            className="min-h-[300px] font-mono bg-transparent border-none focus-visible:ring-0 resize-none p-0"
                          />
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  {question.type === "case-study" && (
                    <TabsContent value="resources" className="mt-0 space-y-4">
                      <div className="space-y-4">
                        {question.resources?.map((resource, i) => (
                          <div key={i} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
                            {resource.type === "text" && <p>{resource.content}</p>}
                            {resource.type === "image" && (
                              <div className="flex justify-center">
                                <img
                                  src={resource.url || "/placeholder.svg"}
                                  alt={resource.alt || "Resource image"}
                                  className="max-w-full h-auto rounded-md"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  )}

                  {question.type === "code-assessment" && (
                    <TabsContent value="output" className="mt-0">
                      <div className="space-y-4">
                        <div className="p-4 rounded-md bg-slate-800 text-white font-mono text-sm">
                          <p className="text-green-400 mb-2">{codeOutput}</p>
                          <div className="border-t border-slate-700 pt-2 mt-2">
                            <p className="text-slate-300 mb-2">Test Results:</p>
                            {testResults.map((result, i) => (
                              <div key={i} className={`py-1 ${result.passed ? "text-green-400" : "text-red-400"}`}>
                                {result.message}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-4 rounded-md bg-slate-100 dark:bg-slate-800">
                          <h4 className="font-medium mb-2">Test Cases</h4>
                          <div className="space-y-2">
                            {question.testCases?.map((test, i) => (
                              <div key={i} className="text-sm">
                                <div className="flex justify-between">
                                  <span className="font-medium">{test.description}</span>
                                  {testResults[i] && (
                                    <Badge variant={testResults[i].passed ? "default" : "destructive"}>
                                      {testResults[i].passed ? "Passed" : "Failed"}
                                    </Badge>
                                  )}
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-1">
                                  <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                                    <span className="text-muted-foreground">Input:</span> {test.input}
                                  </div>
                                  <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                                    <span className="text-muted-foreground">Expected:</span> {test.expectedOutput}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
              ) : (
                renderQuestionContent()
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentQuestion < quizData.totalQuestions - 1 ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-[#FACC15] hover:bg-[#EAB308] text-[#0F172A]">
                  Submit Quiz
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="card-shadow sticky top-6">
            <CardHeader>
              <CardTitle>Question Navigator</CardTitle>
              <CardDescription>Track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {quizData.questions.map((q, i) => (
                  <Button
                    key={i}
                    variant={currentQuestion === i ? "default" : answers[i] !== null ? "outline" : "ghost"}
                    size="sm"
                    className={`h-10 w-10 p-0 relative ${flagged.includes(i) ? "border-red-500 border-2" : ""} ${
                      currentQuestion === i ? "bg-[#FACC15] text-[#0F172A] hover:bg-[#EAB308]" : ""
                    }`}
                    onClick={() => {
                      setCurrentQuestion(i)
                      setActiveTab("question")
                      // Trigger the 3D loader
                      if (typeof window !== "undefined" && window.triggerPageTransition) {
                        window.triggerPageTransition()
                      }
                    }}
                  >
                    {i + 1}
                    {q.type === "code-assessment" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                    )}
                    {q.type === "case-study" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"></div>
                    )}
                    {q.type === "true-false" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                    )}
                  </Button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FACC15]"></div>
                    <span>Current</span>
                  </div>
                  <span>{currentQuestion + 1}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    <span>Answered</span>
                  </div>
                  <span>{answers.filter((a) => a !== null).length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border border-red-500"></div>
                    <span>Flagged</span>
                  </div>
                  <span>{flagged.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Coding</span>
                  </div>
                  <span>{quizData.questions.filter((q) => q.type === "code-assessment").length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Case Study</span>
                  </div>
                  <span>{quizData.questions.filter((q) => q.type === "case-study").length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>True/False</span>
                  </div>
                  <span>{quizData.questions.filter((q) => q.type === "true-false").length}</span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Need Help?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
