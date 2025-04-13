import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="container py-24 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you or your institution. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Free"
                  description="For individual students"
                  price="$0"
                  period="month"
                  features={[
                    { name: "5 AI-generated quizzes/month", included: true },
                    { name: "Basic performance analytics", included: true },
                    { name: "Standard question types", included: true },
                    { name: "1 document upload/day (max 10MB)", included: true },
                    { name: "Community support", included: true },
                    { name: "Advanced question types", included: false },
                    { name: "Plagiarism detection", included: false },
                    { name: "Exam templates", included: false },
                  ]}
                  buttonText="Get Started"
                  buttonVariant="outline"
                />

                <PricingCard
                  title="Pro"
                  description="For serious students & teachers"
                  price="$12"
                  period="month"
                  popular={true}
                  features={[
                    { name: "Unlimited AI-generated quizzes", included: true },
                    { name: "Advanced analytics & insights", included: true },
                    { name: "All question types", included: true },
                    { name: "Unlimited document uploads (max 50MB)", included: true },
                    { name: "Priority email support", included: true },
                    { name: "Plagiarism detection", included: true },
                    { name: "Exam templates & sharing", included: true },
                    { name: "Basic proctoring features", included: true },
                    { name: "LMS integration", included: false },
                    { name: "Advanced proctoring", included: false },
                  ]}
                  buttonText="Start Free Trial"
                  buttonVariant="secondary"
                />

                <PricingCard
                  title="Enterprise"
                  description="For schools & universities"
                  price="Custom"
                  features={[
                    { name: "Everything in Pro", included: true },
                    { name: "Unlimited users", included: true },
                    { name: "LMS integration", included: true },
                    { name: "Advanced proctoring", included: true },
                    { name: "Dedicated account manager", included: true },
                    { name: "Custom AI training", included: true },
                    { name: "API access", included: true },
                    { name: "SSO & advanced security", included: true },
                    { name: "Custom branding", included: true },
                    { name: "24/7 phone & email support", included: true },
                  ]}
                  buttonText="Contact Sales"
                  buttonVariant="outline"
                />
              </div>
            </TabsContent>

            <TabsContent value="annual" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Free"
                  description="For individual students"
                  price="$0"
                  period="month"
                  features={[
                    { name: "5 AI-generated quizzes/month", included: true },
                    { name: "Basic performance analytics", included: true },
                    { name: "Standard question types", included: true },
                    { name: "1 document upload/day (max 10MB)", included: true },
                    { name: "Community support", included: true },
                    { name: "Advanced question types", included: false },
                    { name: "Plagiarism detection", included: false },
                    { name: "Exam templates", included: false },
                  ]}
                  buttonText="Get Started"
                  buttonVariant="outline"
                />

                <PricingCard
                  title="Pro"
                  description="For serious students & teachers"
                  price="$9.60"
                  period="month, billed annually"
                  popular={true}
                  features={[
                    { name: "Unlimited AI-generated quizzes", included: true },
                    { name: "Advanced analytics & insights", included: true },
                    { name: "All question types", included: true },
                    { name: "Unlimited document uploads (max 50MB)", included: true },
                    { name: "Priority email support", included: true },
                    { name: "Plagiarism detection", included: true },
                    { name: "Exam templates & sharing", included: true },
                    { name: "Basic proctoring features", included: true },
                    { name: "LMS integration", included: false },
                    { name: "Advanced proctoring", included: false },
                  ]}
                  buttonText="Start Free Trial"
                  buttonVariant="secondary"
                />

                <PricingCard
                  title="Enterprise"
                  description="For schools & universities"
                  price="Custom"
                  features={[
                    { name: "Everything in Pro", included: true },
                    { name: "Unlimited users", included: true },
                    { name: "LMS integration", included: true },
                    { name: "Advanced proctoring", included: true },
                    { name: "Dedicated account manager", included: true },
                    { name: "Custom AI training", included: true },
                    { name: "API access", included: true },
                    { name: "SSO & advanced security", included: true },
                    { name: "Custom branding", included: true },
                    { name: "24/7 phone & email support", included: true },
                  ]}
                  buttonText="Contact Sales"
                  buttonVariant="outline"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="max-w-3xl mx-auto bg-muted/50 rounded-lg p-6 border">
          <h3 className="text-xl font-bold mb-4">Education Discounts</h3>
          <p className="mb-4">
            We offer special pricing for educational institutions. Contact our sales team to learn more about our
            education discounts and volume licensing options.
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/contact">Contact for Education Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12 space-y-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Compare Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed feature comparison to help you choose the right plan
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6 w-1/3">Features</th>
                <th className="text-center py-4 px-6">Free</th>
                <th className="text-center py-4 px-6 bg-secondary/5">Pro</th>
                <th className="text-center py-4 px-6">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">AI-Generated Quizzes</td>
                <td className="text-center py-4 px-6">5/month</td>
                <td className="text-center py-4 px-6 bg-secondary/5">Unlimited</td>
                <td className="text-center py-4 px-6">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Document Uploads</td>
                <td className="text-center py-4 px-6">1/day (10MB)</td>
                <td className="text-center py-4 px-6 bg-secondary/5">Unlimited (50MB)</td>
                <td className="text-center py-4 px-6">Unlimited (100MB)</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Question Types</td>
                <td className="text-center py-4 px-6">Standard</td>
                <td className="text-center py-4 px-6 bg-secondary/5">All Types</td>
                <td className="text-center py-4 px-6">All Types + Custom</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Analytics</td>
                <td className="text-center py-4 px-6">Basic</td>
                <td className="text-center py-4 px-6 bg-secondary/5">Advanced</td>
                <td className="text-center py-4 px-6">Advanced + Custom</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Plagiarism Detection</td>
                <td className="text-center py-4 px-6">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6 bg-secondary/5">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Exam Proctoring</td>
                <td className="text-center py-4 px-6">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6 bg-secondary/5">Basic</td>
                <td className="text-center py-4 px-6">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">LMS Integration</td>
                <td className="text-center py-4 px-6">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6 bg-secondary/5">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Support</td>
                <td className="text-center py-4 px-6">Community</td>
                <td className="text-center py-4 px-6 bg-secondary/5">Priority Email</td>
                <td className="text-center py-4 px-6">24/7 Phone & Email</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">API Access</td>
                <td className="text-center py-4 px-6">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6 bg-secondary/5">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Custom Branding</td>
                <td className="text-center py-4 px-6">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6 bg-secondary/5">
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new features will
                be available immediately. If you downgrade, the changes will take effect at the end of your current
                billing cycle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service
                within the first 14 days, contact our support team for a full refund.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. For educational
                institutions, we also accept purchase orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of students and teachers already using AgenticExams to revolutionize their education journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Your Free Trial
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
    </div>
  )
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  period?: string
  popular?: boolean
  features: { name: string; included: boolean }[]
  buttonText: string
  buttonVariant: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

function PricingCard({
  title,
  description,
  price,
  period,
  popular = false,
  features,
  buttonText,
  buttonVariant,
}: PricingCardProps) {
  return (
    <Card className={`border ${popular ? "border-2 border-secondary shadow-lg" : "shadow-md"} relative`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-secondary text-primary px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground">/{period}</span>}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              {feature.included ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <XCircle className="h-4 w-4 text-muted-foreground" />
              )}
              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={buttonVariant}
          className={`w-full ${buttonVariant === "secondary" ? "bg-secondary hover:bg-secondary/90" : ""}`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
