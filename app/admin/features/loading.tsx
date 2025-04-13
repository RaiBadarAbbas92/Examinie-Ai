import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function FeaturePageLoading() {
  return (
    <div className="space-y-6">
      {/* Page Header Skeleton */}
      <div>
        <Skeleton className="h-8 w-64 bg-slate-700" />
        <Skeleton className="h-4 w-96 mt-2 bg-slate-700" />
      </div>

      {/* Search & Actions Skeleton */}
      <div className="flex flex-col md:flex-row gap-4">
        <Skeleton className="h-10 flex-1 bg-slate-700" />
        <Skeleton className="h-10 w-32 bg-slate-700" />
      </div>

      {/* Tabs Skeleton */}
      <Skeleton className="h-10 w-full bg-slate-700" />

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-slate-700" />
            <Skeleton className="h-4 w-72 mt-1 bg-slate-700" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-28 w-full bg-slate-700" />
              </div>
            ))}
            <Skeleton className="h-10 w-full bg-slate-700" />
          </CardContent>
          <CardFooter className="border-t border-slate-700 pt-4">
            <Skeleton className="h-10 w-40 ml-auto bg-slate-700" />
          </CardFooter>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-slate-700" />
            <Skeleton className="h-4 w-72 mt-1 bg-slate-700" />
          </CardHeader>
          <CardContent className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-4 w-32 bg-slate-700" />
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <Skeleton className="h-4 w-40 bg-slate-700" />
                    <Skeleton className="h-6 w-10 bg-slate-700" />
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t border-slate-700 pt-4">
            <Skeleton className="h-10 w-40 ml-auto bg-slate-700" />
          </CardFooter>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <Skeleton className="h-6 w-48 bg-slate-700" />
          <Skeleton className="h-4 w-72 mt-1 bg-slate-700" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-4 w-32 bg-slate-700" />
                {[...Array(3)].map((_, j) => (
                  <Skeleton key={j} className="h-10 w-full bg-slate-700" />
                ))}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-slate-700 pt-4">
          <Skeleton className="h-10 w-40 ml-auto bg-slate-700" />
        </CardFooter>
      </Card>
    </div>
  )
}
