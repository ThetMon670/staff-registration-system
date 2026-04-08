"use client";
import { fetcher } from "@/lib/fetcher";
import { staffApiUrl } from "@/services/staffService";
import { useParams } from "next/navigation";
import useSWR from "swr";

function useStaffDetail() {
  const { id } = useParams();
  const swr = useSWR(`${staffApiUrl}/${id}`, fetcher);

  return {
    id,
    ...swr,
  };
}

export default useStaffDetail;
