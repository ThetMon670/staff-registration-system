"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useStaffDetail from "../../hooks/useStaffDetail";
import StaffDetailCardLoader from "./StaffDetailCardLoader";
import StaffDetailCard from "./StaffDetailCard";

function StaffDetailSection() {
  const { id, data, error, isLoading } = useStaffDetail();

  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Staff Detail</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this staff in one place.
        </p>
      </div>

      {isLoading ? (
        <StaffDetailCardLoader />
      ) : (
        <StaffDetailCard data={data.data} />
      )}

      <div className=" flex gap-1">
        <Link href={`/dashboard/staffs`}>
          <Button variant={"outline"} size={"sm"}>
            All Staff
          </Button>
        </Link>
        <Link href={`/dashboard/staffs/${id}/edit`}>
          <Button size={"sm"}>Edit Staff</Button>
        </Link>
      </div>
    </section>
  );
}

export default StaffDetailSection;
