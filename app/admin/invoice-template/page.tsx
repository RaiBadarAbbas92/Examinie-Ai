import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Download, FileText, Printer, Save } from "lucide-react"

export default function InvoiceTemplatePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Invoice Template</h1>
        <p className="text-slate-400 mt-1">Customize the appearance of your invoice templates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Template Settings</CardTitle>
              <CardDescription className="text-slate-400">Customize your invoice template appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name" className="text-white">
                  Company Name
                </Label>
                <Input
                  id="company-name"
                  defaultValue="Examinie AI"
                  className="bg-slate-900 border-slate-700 text-slate-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-address" className="text-white">
                  Company Address
                </Label>
                <Textarea
                  id="company-address"
                  className="bg-slate-900 border-slate-700 text-slate-200"
                  defaultValue="123 Education Street
San Francisco, CA 94103
United States"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-logo" className="text-white">
                  Company Logo
                </Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-md bg-slate-700 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-slate-400" />
                  </div>
                  <Button
                    variant="outline"
                    className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
                  >
                    Upload Logo
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="invoice-notes" className="text-white">
                  Default Invoice Notes
                </Label>
                <Textarea
                  id="invoice-notes"
                  className="bg-slate-900 border-slate-700 text-slate-200"
                  defaultValue="Thank you for your business. Payment is due within 30 days of invoice date."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="invoice-footer" className="text-white">
                  Invoice Footer
                </Label>
                <Textarea
                  id="invoice-footer"
                  className="bg-slate-900 border-slate-700 text-slate-200"
                  defaultValue="For questions about this invoice, please contact support@examinieai.com"
                />
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4 flex justify-between">
              <Button
                variant="outline"
                className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
              >
                Reset to Default
              </Button>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="mr-2 h-4 w-4" />
                Save Template
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Invoice Preview</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
              <CardDescription className="text-slate-400">Preview how your invoices will look</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white text-black p-8 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Examinie AI</h2>
                    <p className="text-gray-600 mt-1">
                      123 Education Street
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-3xl font-bold text-gray-800">INVOICE</h1>
                    <p className="text-gray-600 mt-1">
                      <strong>Invoice #:</strong> INV-2025-001
                      <br />
                      <strong>Date:</strong> Jan 15, 2025
                      <br />
                      <strong>Due Date:</strong> Jan 15, 2025
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Bill To:</h3>
                  <p className="text-gray-600">
                    Emma Thompson
                    <br />
                    emma.t@example.com
                    <br />
                    456 Learning Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div className="mt-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-2 text-gray-800">Description</th>
                        <th className="text-center py-2 text-gray-800">Quantity</th>
                        <th className="text-right py-2 text-gray-800">Unit Price</th>
                        <th className="text-right py-2 text-gray-800">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 text-gray-800">
                          <div className="font-medium">Pro Subscription</div>
                          <div className="text-sm text-gray-600">Monthly subscription - Jan 2025</div>
                        </td>
                        <td className="py-4 text-center text-gray-800">1</td>
                        <td className="py-4 text-right text-gray-800">$19.99</td>
                        <td className="py-4 text-right text-gray-800">$19.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2} className="py-2"></td>
                        <td className="py-2 text-right font-medium text-gray-800">Subtotal:</td>
                        <td className="py-2 text-right text-gray-800">$19.99</td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="py-2"></td>
                        <td className="py-2 text-right font-medium text-gray-800">Tax (0%):</td>
                        <td className="py-2 text-right text-gray-800">$0.00</td>
                      </tr>
                      <tr className="border-t-2 border-gray-300">
                        <td colSpan={2} className="py-2"></td>
                        <td className="py-2 text-right font-bold text-gray-800">Total:</td>
                        <td className="py-2 text-right font-bold text-gray-800">$19.99</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <div className="text-gray-600">
                    <strong>Notes:</strong>
                    <p>Thank you for your business. Payment is due within 30 days of invoice date.</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
                  For questions about this invoice, please contact support@examinieai.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
