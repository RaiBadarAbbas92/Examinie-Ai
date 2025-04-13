"use client"

import Link from "next/link"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, ArrowRight, Download, Share2 } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

// Mock result data
const resultData = {
  quizTitle: "Advanced Calculus Quiz",
  score: 80,
  totalQuestions: 10,
  correctAnswers: 8,
  incorrectAnswers: 2,
  timeTaken: "18:45",
  date: "April 11, 2025",
  grade: "A-",
  feedback:
    "Great job! You've demonstrated a strong understanding of calculus concepts. Focus on improving your understanding of limits and derivatives of complex functions.",
  questions: [
    {
      id: 1,
      question: "What is the derivative of f(x) = x²?",
      userAnswer: "f'(x) = 2x",
      correctAnswer: "f'(x) = 2x",
      isCorrect: true,
      explanation: "The derivative of x² is 2x according to the power rule: d/dx(x^n) = n*x^(n-1).",
    },
    {
      id: 2,
      question: "Which of the following is the integral of f(x) = 2x?",
      userAnswer: "F(x) = x² + C",
      correctAnswer: "F(x) = x² + C",
      isCorrect: true,
      explanation: "The integral of 2x is x² + C. This is because the derivative of x² is 2x.",
    },
    {
      id: 3,
      question: "The derivative of a constant function is always zero.",
      userAnswer: "True",
      correctAnswer: "True",
      isCorrect: true,
      explanation:
        "The derivative of a constant function f(x) = c is f'(x) = 0 because constants have no rate of change.",
    },
    {
      id: 4,
      question: "What is the derivative of f(x) = e^x?",
      userAnswer: "e^x",
      correctAnswer: "e^x",
      isCorrect: true,
      explanation: "The function e^x is its own derivative, which is a unique property of the exponential function.",
    },
    {
      id: 5,
      question: "What is the limit of (sin x)/x as x approaches 0?",
      userAnswer: "1",
      correctAnswer: "1",
      isCorrect: true,
      explanation:
        "This is a famous limit in calculus. As x approaches 0, (sin x)/x approaches 1, which can be proven using L'Hôpital's rule or the Taylor series expansion.",
    },
    {
      id: 6,
      question: "Which of the following functions are differentiable at x = 0?",
      userAnswer: "f(x) = x², f(x) = sin(x)",
      correctAnswer: "f(x) = x², f(x) = sin(x)",
      isCorrect: true,
      explanation:
        "Both x² and sin(x) are differentiable at x = 0. The functions |x| and x^(1/3) are not differentiable at x = 0.",
    },
    {
      id: 7,
      question: "Explain the chain rule and provide an example of its application.",
      userAnswer:
        "The chain rule is used to find the derivative of composite functions. For example, if f(x) = sin(x²), then f'(x) = cos(x²) · 2x.",
      correctAnswer:
        "The chain rule states that if y = f(g(x)), then dy/dx = f'(g(x)) · g'(x). For example, if f(x) = sin(x²), then f'(x) = cos(x²) · 2x.",
      isCorrect: true,
      explanation: "Your explanation correctly captures the essence of the chain rule and provides a valid example.",
    },
    {
      id: 8,
      question: "What is the second derivative of f(x) = sin(x)?",
      userAnswer: "f''(x) = -sin(x)",
      correctAnswer: "f''(x) = -sin(x)",
      isCorrect: true,
      explanation: "The first derivative of sin(x) is cos(x), and the derivative of cos(x) is -sin(x).",
    },
    {
      id: 9,
      question: "If f'(x) = 0 for all x in an interval, then f(x) must be constant on that interval.",
      userAnswer: "False",
      correctAnswer: "True",
      isCorrect: false,
      explanation:
        "This is a fundamental theorem of calculus. If the derivative is zero everywhere in an interval, the function must be constant in that interval.",
    },
    {
      id: 10,
      question: "What is the derivative of f(x) = ln(x)?",
      userAnswer: "x",
      correctAnswer: "1/x",
      isCorrect: false,
      explanation:
        "The derivative of ln(x) is 1/x. This can be derived using the definition of the derivative and properties of logarithms.",
    },
  ],
  strengths: ["Derivatives of basic functions", "Integration concepts", "Chain rule application"],
  weaknesses: ["Properties of logarithmic functions", "Theoretical calculus concepts"],
  recommendations: [
    "Review the properties of logarithmic functions",
    "Practice more problems involving theoretical calculus concepts",
    "Consider studying the Mean Value Theorem and its applications",
  ],
}

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardSidebar role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Quiz Results</h1>
            <p className="text-slate-600 dark:text-slate-300">
              {resultData.quizTitle} • Completed on {resultData.date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription>Your quiz performance at a glance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-slate-200 dark:text-slate-700"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-[#FACC15]"
                        strokeWidth="8"
                        strokeDasharray={360}
                        strokeDashoffset={360 - (360 * resultData.score) / 100}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-3xl font-bold">{resultData.score}%</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Score</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Badge className="bg-[#FACC15] text-[#0F172A] hover:bg-[#EAB308] text-lg py-1 px-3">
                      Grade: {resultData.grade}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Correct Answers</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {resultData.correctAnswers}/{resultData.totalQuestions}
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Incorrect Answers</p>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {resultData.incorrectAnswers}/{resultData.totalQuestions}
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Time Taken</p>
                    <p className="text-2xl font-bold">{resultData.timeTaken}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20">
                  <h3 className="font-medium mb-2">AI Feedback</h3>
                  <p className="text-slate-600 dark:text-slate-300">{resultData.feedback}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
                <CardDescription>Review your answers and explanations</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Strengths</h3>
                        <ul className="space-y-2">
                          {resultData.strengths.map((strength, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Areas for Improvement</h3>
                        <ul className="space-y-2">
                          {resultData.weaknesses.map((weakness, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Performance by Question Type</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Multiple Choice</span>
                              <span className="text-sm font-medium">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">True/False</span>
                              <span className="text-sm font-medium">50%</span>
                            </div>
                            <Progress value={50} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Short Answer</span>
                              <span className="text-sm font-medium">50%</span>
                            </div>
                            <Progress value={50} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Long Answer</span>
                              <span className="text-sm font-medium">100%</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="questions" className="space-y-6">
                    {resultData.questions.map((q, i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Question {i + 1}</span>
                            {q.isCorrect ? (
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900">
                                Correct
                              </Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900">
                                Incorrect
                              </Badge>
                            )}
                          </div>
                          {q.isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                          )}
                        </div>

                        <div className="mt-3 space-y-2">
                          <p className="font-medium">{q.question}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-300">Your Answer:</p>
                              <p
                                className={
                                  q.isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                                }
                              >
                                {q.userAnswer}
                              </p>
                            </div>
                            {!q.isCorrect && (
                              <div>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Correct Answer:</p>
                                <p className="text-green-600 dark:text-green-400">{q.correctAnswer}</p>
                              </div>
                            )}
                          </div>
                          <div className="mt-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <p className="text-sm font-medium">Explanation:</p>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{q.explanation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="recommendations" className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Recommended Actions</h3>
                        <ul className="space-y-3">
                          {resultData.recommendations.map((rec, i) => (
                            <li key={i} className="flex items-start gap-3 p-3 border rounded-lg">
                              <div className="p-1 rounded-full bg-[#FACC15]/10">
                                <CheckCircle className="w-4 h-4 text-[#FACC15]" />
                              </div>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Suggested Resources</h3>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg flex justify-between items-center">
                            <div>
                              <p className="font-medium">Logarithmic Functions Practice</p>
                              <p className="text-sm text-slate-600 dark:text-slate-300">
                                Interactive exercises on logarithmic properties
                              </p>
                            </div>
                            <Button size="sm">
                              View
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>
                          <div className="p-3 border rounded-lg flex justify-between items-center">
                            <div>
                              <p className="font-medium">Calculus Theorems Explained</p>
                              <p className="text-sm text-slate-600 dark:text-slate-300">
                                Video tutorials on theoretical calculus concepts
                              </p>
                            </div>
                            <Button size="sm">
                              View
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>
                          <div className="p-3 border rounded-lg flex justify-between items-center">
                            <div>
                              <p className="font-medium">Mean Value Theorem Practice Quiz</p>
                              <p className="text-sm text-slate-600 dark:text-slate-300">
                                Test your understanding of the Mean Value Theorem
                              </p>
                            </div>
                            <Button size="sm">
                              View
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="card-shadow sticky top-6">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-[#FACC15] hover:bg-[#EAB308] text-[#0F172A]">Retake Quiz</Button>
                <Button variant="outline" className="w-full">
                  Practice Similar Questions
                </Button>
                <Button variant="outline" className="w-full">
                  View Detailed Explanations
                </Button>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-3">Related Quizzes</h3>
                  <div className="space-y-3">
                    {["Limits and Continuity", "Integration Techniques", "Applications of Derivatives"].map(
                      (quiz, i) => (
                        <div key={i} className="p-3 border rounded-lg">
                          <p className="font-medium">{quiz}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-slate-600 dark:text-slate-300">10 questions</span>
                            <Button variant="ghost" size="sm" className="h-7 text-xs">
                              Start
                            </Button>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dashboard/student">Back to Dashboard</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardSidebar>
  )
}
