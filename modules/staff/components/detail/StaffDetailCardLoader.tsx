import { Skeleton } from "@/components/ui/skeleton";

function StaffDetailCardLoader() {
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6 p-4">
      {/* Staff Code */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-24" />
      </div>

      {/* Department */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>

      {/* Name */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-32" />
      </div>

      {/* Email */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-40" />
      </div>

      {/* Phone */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-28" />
      </div>

      {/* User Account */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-36" />
      </div>

      {/* Created At */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-36" />
      </div>

      {/* Updated At */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-36" />
      </div>
    </div>
  );
}

export default StaffDetailCardLoader;