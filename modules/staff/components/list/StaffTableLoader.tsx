import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

function CustomerTableLoader() {
  const searchParams = useSearchParams();

  const limit = searchParams.has("limit")
    ? parseInt(searchParams.get("limit")!)
    : 5;

  return (
    <>
      {Array.from({ length: limit }).map((_, index) => (
        <TableRow
          key={index}
          className="hover:bg-muted/50 border-b transition-colors align-top"
        >
          {/* ID */}
          <TableCell className="p-2 text-xs">
            <Skeleton className="h-3 w-6" />
          </TableCell>

          {/* Customer (Name + Email) */}
          <TableCell className="p-2 text-xs">
            <div className="flex flex-col gap-1">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-2 w-32" />
            </div>
          </TableCell>

          {/* Phone */}
          <TableCell className="p-2 text-xs">
            <Skeleton className="h-3 w-28" />
          </TableCell>

          {/* Gender */}
          <TableCell className="p-2 text-xs">
            <Skeleton className="h-3 w-14" />
          </TableCell>

          {/* Address */}
          <TableCell className="p-2 w-52 text-xs">
            <Skeleton className="h-3 w-25" />
          </TableCell>

          {/* Created*/}
          <TableCell className="p-2 w-25 text-xs">
            <div className="flex flex-col gap-1">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-2 w-24" />
            </div>
          </TableCell>

          {/* Actions */}
          <TableCell className="p-2 w-20">
            <div className="flex justify-end gap-1">
              <Skeleton className="h-6 w-6 rounded-none" />
              <Skeleton className="h-6 w-6 rounded-none" />
              <Skeleton className="h-6 w-6 rounded-none" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default CustomerTableLoader;
