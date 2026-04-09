"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "./ui/skeleton";

type Props = {
  links?: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    links?: Array<{
      url: string | null;
      label: string | null;
      active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

function TablePagination({ links, meta }: Props) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  // ✅ Preserve params when navigating via API links
  const updateUrl = (url: string | null) => {
    if (!url) return;

    const urlObj = new URL(url);
    const params = new URLSearchParams(searchParams.toString());

    // Merge params from API link (like page=2)
    urlObj.searchParams.forEach((value, key) => {
      params.set(key, value);
    });

    router.push(`${pathName}?${params.toString()}`);
  };

  // ✅ Preserve params when changing limit
  const onValueChange = (value: string | null) => {
    if (!value) return; // 👈 handle null safely

    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", value);
    params.delete("page");

    router.push(`${pathName}?${params.toString()}`);
  };

  const renderValue = (value?: number | null) => {
    if (value === undefined) {
      return <Skeleton className="w-3 h-3" />;
    }
    return <b>{value ?? 0}</b>;
  };

  return (
    <div className="flex justify-between items-center">
      {/* LEFT: Showing info */}
      <div className="text-xs text-muted-foreground flex items-center gap-1">
        Showing {renderValue(meta?.from)} to {renderValue(meta?.to)} of{" "}
        {renderValue(meta?.total)} Entries
      </div>

      {/* RIGHT: Controls */}
      <div className="flex items-center gap-4">
        {/* LIMIT SELECT */}
        <Select onValueChange={onValueChange}>
          <SelectTrigger className="px-2 h-6! w-16 text-xs">
            <SelectValue
              placeholder={
                searchParams.get("limit") ?? String(meta?.per_page ?? 5)
              }
            />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* PAGE INFO */}
        <div className="text-xs text-muted-foreground flex items-center gap-1">
          Page{" "}
          {meta?.current_page ? (
            <b>{meta.current_page}</b>
          ) : (
            <Skeleton className="w-3 h-3" />
          )}{" "}
          of{" "}
          {meta?.last_page ? (
            <b>{meta.last_page}</b>
          ) : (
            <Skeleton className="w-3 h-3" />
          )}
        </div>

        {/* PAGINATION BUTTONS */}
        <ButtonGroup className="flex">
          <Button
            variant="outline"
            size="xs"
            onClick={() => updateUrl(links?.first ?? null)}
            disabled={!links?.first}
          >
            <ChevronsLeft className="size-3" />
          </Button>

          <Button
            variant="outline"
            size="xs"
            onClick={() => updateUrl(links?.prev ?? null)}
            disabled={!links?.prev}
          >
            <ChevronLeft className="size-3" />
          </Button>

          <Button
            variant="outline"
            size="xs"
            onClick={() => updateUrl(links?.next ?? null)}
            disabled={!links?.next}
          >
            <ChevronRight className="size-3" />
          </Button>

          <Button
            variant="outline"
            size="xs"
            onClick={() => updateUrl(links?.last ?? null)}
            disabled={!links?.last}
          >
            <ChevronsRight className="size-3" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default TablePagination;
