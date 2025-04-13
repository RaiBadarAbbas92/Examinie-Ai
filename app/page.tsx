import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  ChevronRight,
  Lightbulb,
  Lock,
  MessageSquare,
  Sparkles,
  Star,
  Users,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="container py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <Badge className="mb-4" variant="secondary">
            AI-Powered Education Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">
            Transform Education with <span className="gradient-text">AI-Powered</span> Exams
          </h1>
          <p className="text-xl text-muted-foreground">
            Create, take, and evaluate exams with the power of Agentic AI. Personalized learning experiences for
            students and powerful tools for teachers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <Link href="/register?role=student">
              <Button size="lg" className="gap-2">
                Join as Student
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/register?role=teacher">
              <Button size="lg" variant="outline" className="gap-2">
                Join as Teacher
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop"
              alt="AI-powered education platform"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-xl"
              priority
              unoptimized
            />
            <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 w-40 border">
              <div className="text-sm font-medium">AI Generated</div>
              <div className="text-xs text-muted-foreground">98% accuracy rate</div>
              <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-secondary h-full" style={{ width: "98%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-muted-foreground">Trusted by leading educational institutions</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png"
                alt="Harvard University logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png"
                alt="Stanford University logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"
                alt="MIT logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png"
                alt="Oxford University logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
            <div className="grayscale opacity-70  hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Cambridge_University_logo.svg/1280px-Cambridge_University_logo.svg.png"
                alt="Cambridge University logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20 space-y-16" id="features">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Powerful AI Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform leverages advanced AI to create personalized learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Sparkles className="h-8 w-8 text-secondary" />}
            title="AI-Generated Quizzes"
            description="Upload any document and generate customized quizzes instantly"
            image="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=2010&auto=format&fit=crop"
          />
          <FeatureCard
            icon={<CheckCircle className="h-8 w-8 text-secondary" />}
            title="Automated Grading"
            description="Get instant feedback with AI-powered grading and evaluation"
            image="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop"
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-secondary" />}
            title="Custom Exam Papers"
            description="Teachers can create and customize professional exam papers"
            image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
          />
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8 text-secondary" />}
            title="Personalized Learning"
            description="Adaptive learning paths based on performance analytics"
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2342&auto=format&fit=crop"
          />
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-secondary" />}
            title="Smart Insights"
            description="Detailed analytics to track progress and identify areas for improvement"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8 text-secondary" />}
            title="Secure Proctoring"
            description="Advanced exam security with AI-powered proctoring"
            image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">See Examinie AI in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience how our platform transforms the learning process
            </p>
          </div>

          <Tabs defaultValue="student" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="student">Student Experience</TabsTrigger>
              <TabsTrigger value="teacher">Teacher Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="student" className="border rounded-lg overflow-hidden shadow-lg">
              <div className="bg-muted/30 p-2 border-b flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-muted-foreground ml-2">Student Dashboard</div>
              </div>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Student dashboard screenshot"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary">
                    Previous
                  </Button>
                  <Button size="sm" variant="secondary">
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="teacher" className="border rounded-lg overflow-hidden shadow-lg">
              <div className="bg-muted/30 p-2 border-b flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-muted-foreground ml-2">Teacher Dashboard</div>
              </div>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop"
                  alt="Teacher dashboard screenshot"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary">
                    Previous
                  </Button>
                  <Button size="sm" variant="secondary">
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/40 py-20">
        <div className="container space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform makes exam creation and learning assessment simple and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-bold">Upload or Create</h3>
              <p className="text-muted-foreground">
                Students upload study materials or teachers create custom exams with our AI assistance
              </p>
              <div className="relative w-full aspect-square max-w-[200px] mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2069&auto=format&fit=crop"
                  alt="Upload documents"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold">Generate & Customize</h3>
              <p className="text-muted-foreground">
                Our AI generates questions and allows customization of format, difficulty, and question types
              </p>
              <div className="relative w-full aspect-square max-w-[200px] mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                  alt="Generate questions"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-bold">Take & Analyze</h3>
              <p className="text-muted-foreground">
                Take exams online with instant grading and receive detailed performance analytics
              </p>
              <div className="relative w-full aspect-square max-w-[200px] mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Analyze results"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="container py-20 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Advanced Exam Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our cutting-edge tools designed for modern education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/20">
                  <Lock className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Advanced Proctoring</h3>
              </div>
              <p className="text-muted-foreground">
                Our AI-powered proctoring system monitors exam sessions to ensure academic integrity. Features include
                face recognition, screen monitoring, and suspicious behavior detection, all while respecting student
                privacy.
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2076&auto=format&fit=crop"
                  alt="Proctoring system"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/20">
                  <Brain className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Plagiarism Detection</h3>
              </div>
              <p className="text-muted-foreground">
                Advanced AI algorithms detect plagiarism in written answers by comparing against a vast database of
                academic content and previous submissions, ensuring original work.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 border">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium">Plagiarism Report</div>
                  <Badge variant="secondary">98% Original</Badge>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: "98%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Original Content</span>
                    <span>98%</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>2% similarity found with:</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>Introduction to Physics, 3rd Edition (1%)</li>
                    <li>Student submission #24601 (1%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/20">
                  <Sparkles className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Advanced Question Types</h3>
              </div>
              <p className="text-muted-foreground">
                Beyond traditional formats, our platform supports code execution questions, drawing assessments,
                mathematical equation inputs, and interactive simulations to test practical knowledge.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 bg-muted/20">
                  <div className="font-medium mb-2">Code Execution</div>
                  <div className="bg-muted p-2 rounded text-xs font-mono">
                    {"function sum(a, b) {"}
                    <br />
                    &nbsp;&nbsp;{"return /* Your code here */;"}
                    <br />
                    {"}"}
                  </div>
                </div>
                <div className="border rounded-lg p-4 bg-muted/20">
                  <div className="font-medium mb-2">Drawing Assessment</div>
                  <div className="bg-white h-20 rounded border-2 border-dashed flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Drawing Canvas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/20">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Collaborative Exam Creation</h3>
              </div>
              <p className="text-muted-foreground">
                Multiple teachers can collaborate on exam creation in real-time, with version control and commenting
                features to streamline the process.
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                  alt="Collaborative exam creation"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/features">
            <Button variant="outline" size="lg" className="gap-2">
              Explore All Features
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
                    alt="University case study"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-secondary font-semibold">Case Study</div>
                <h3 className="mt-2 text-2xl font-bold">How Stanford University Improved Test Scores by 32%</h3>
                <p className="mt-4 text-muted-foreground">
                  Stanford University implemented Examinie AI across their Computer Science department, resulting in a
                  32% improvement in test scores and a 45% reduction in grading time for professors.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-secondary">32%</div>
                    <div className="text-sm text-muted-foreground">Improvement in test scores</div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-secondary">45%</div>
                    <div className="text-sm text-muted-foreground">Reduction in grading time</div>
                  </div>
                </div>
                <Button className="mt-6 gap-2">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20" id="testimonials">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from students and educators who have transformed their learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="italic mb-6">
                "AgenticExams has completely transformed how I prepare for tests. The AI-generated quizzes from my
                lecture notes are incredibly relevant and have helped me identify knowledge gaps I didn't know I had."
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                    alt="John Doe"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Computer Science Student</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="italic mb-6">
                "As a professor, I've saved countless hours creating and grading exams. The AI suggestions are
                remarkably good, and the analytics help me understand exactly where my students need more support."
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                    alt="Jane Smith"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">University Professor</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="italic mb-6">
                "Our school district implemented AgenticExams last year, and we've seen a 30% improvement in test
                scores. The personalized learning approach has made a significant difference for our students."
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    alt="Robert Johnson"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-medium">Robert Johnson</p>
                  <p className="text-sm text-muted-foreground">School District Administrator</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Read More Testimonials
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-secondary">500K+</p>
            <p className="text-muted-foreground">Students</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-secondary">50K+</p>
            <p className="text-muted-foreground">Educators</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-secondary">2M+</p>
            <p className="text-muted-foreground">Exams Created</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-secondary">98%</p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-muted/40 py-20">
        <div className="container space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that's right for you or your institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border shadow-md">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>For individual students</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>5 AI-generated quizzes/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Basic performance analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Standard question types</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary shadow-lg relative">
              <div className="absolute top-0 right-0 bg-secondary text-primary px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For serious students & teachers</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$12</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Unlimited AI-generated quizzes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>All question types</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Plagiarism detection</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border shadow-md">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For schools & universities</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>LMS integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Advanced proctoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/pricing">
              <Button variant="link" className="gap-2">
                View Full Pricing Details
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our platform</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-secondary" />
                How does the AI generate questions?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our AI analyzes your uploaded documents or specified topics to identify key concepts, facts, and
                relationships. It then generates questions at various difficulty levels, ensuring comprehensive coverage
                of the material while avoiding repetition or irrelevant content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-secondary" />
                Is my data secure and private?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we take data security and privacy seriously. All uploaded content and generated exams are encrypted
                and stored securely. We do not share your data with third parties, and you retain full ownership of your
                content. Our platform is FERPA and GDPR compliant.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-secondary" />
                Can I integrate Examinie AI with my school's LMS?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, our Enterprise plan offers seamless integration with popular Learning Management Systems including
                Canvas, Blackboard, Moodle, and Google Classroom. This allows for automatic grade syncing and single
                sign-on capabilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-secondary" />
                How accurate is the automated grading?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our automated grading system achieves over 95% accuracy for objective questions and 90% for short-answer
                questions when compared to human graders. For essay questions, our AI provides detailed feedback and
                suggested scores, but teachers can easily review and adjust as needed.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/faq">
            <Button variant="link" className="gap-2">
              View All FAQs
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to transform your learning experience?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of students and teachers already using Examinie AI to revolutionize their education journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  image,
}: {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}) {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="relative h-40 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
