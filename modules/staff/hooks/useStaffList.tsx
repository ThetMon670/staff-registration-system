import { fetcher } from "@/lib/fetcher";
import { staffApiUrl } from "@/services/staffService";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

function useStaffList() {
  const searchParams = useSearchParams();

  const fetchUrl = searchParams.toString()
    ? `${staffApiUrl}?${searchParams.toString()}`
    : staffApiUrl;
  const swr = useSWR(fetchUrl, fetcher);

  return {
    ...swr,
  };
}

export default useStaffList;
