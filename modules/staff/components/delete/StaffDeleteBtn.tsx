"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { deleteStaff, staffApiUrl } from "@/services/staffService";
import { Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { mutate } from "swr";

type Props = {
  id: number;
};

function StaffDeleteBtn({ id }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const res = await deleteStaff(id);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Customer delete failed");
      }

      mutate(
        searchParams.toString()
          ? `${staffApiUrl}?${searchParams.toString()}`
          : staffApiUrl,
      );

      toast.success("Staff deleted successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      variant={"secondary"}
      size={"xs"}
      onClick={handleClick}
    >
      {isLoading ? (
        <Spinner className=" size-2" />
      ) : (
        <Trash2 className=" size-2" />
      )}
    </Button>
  );
}

export default StaffDeleteBtn;
