import { Skeleton } from "@/components/ui/skeleton";

function StaffEditFormLoader() {
  return (
    <div className="w-1/2 space-y-6">

      {/* Form Grid */}
      <div className="grid grid-cols-2 gap-5">

        {/* Staff Name */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-full" />
        </div>

        {/* Department */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-full" />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-6 w-full" />
        </div>

      </div>

      {/* Checkbox Section */}
      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-3 w-52" />
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-3 w-48" />
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Skeleton className="h-9 w-16 rounded-md" />
        <Skeleton className="h-9 w-28 rounded-md" />
      </div>

    </div>
  );
}

export default StaffEditFormLoader;