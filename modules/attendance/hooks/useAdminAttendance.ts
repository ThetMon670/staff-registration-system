// hooks/useAdminAttendance.ts
import { fetcher } from "@/lib/fetcher";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export const adminAttendanceApiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/v1/attendance";

export default function useAdminAttendance() {
  const searchParams = useSearchParams();

  const fetchUrl = searchParams.toString()
    ? `${adminAttendanceApiUrl}?${searchParams.toString()}`
    : adminAttendanceApiUrl;

  const swr = useSWR(fetchUrl, fetcher);

  return { ...swr };
}