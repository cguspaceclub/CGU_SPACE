import { Card, CardContent } from "@/components/ui/card";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-white/10 ${className}`}
    />
  );
}

export function CardSkeleton() {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-48 w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TeamCardSkeleton() {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-32 w-32 rounded-full mx-auto" />
          <div className="space-y-2 text-center">
            <Skeleton className="h-6 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex justify-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function BlogCardSkeleton() {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-40 w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-brand-orange/20 border-t-brand-orange rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-brand-red rounded-full animate-spin" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
}
