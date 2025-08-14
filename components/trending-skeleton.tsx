export function TrendingSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          {/* Movie Poster Skeleton */}
          <div className="aspect-[2/3] bg-[#1a1a1a] rounded-lg overflow-hidden">
            <div className="w-full h-full bg-[#2d2d2d] animate-pulse" />
          </div>
          
          {/* Movie Info Skeleton */}
          <div className="mt-4 space-y-2">
            <div className="h-5 bg-[#2d2d2d] rounded animate-pulse" />
            <div className="h-4 bg-[#2d2d2d] rounded w-1/2 animate-pulse" />
            <div className="h-4 bg-[#2d2d2d] rounded w-3/4 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
} 