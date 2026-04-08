import { fetcher } from "@/lib/fetcher";
import { customerApiUrl } from "@/services/staffService";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

function useCustomerList() {
  const searchParams = useSearchParams();

  const fetchUrl = searchParams.toString()
    ? `${customerApiUrl}?${searchParams.toString()}`
    : customerApiUrl;
  const swr = useSWR(fetchUrl, fetcher);

  return {
    ...swr,
  };
}

export default useCustomerList;
