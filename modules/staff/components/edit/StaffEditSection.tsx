"use client";

import useStaffDetail from "../../hooks/useStaffDetail";
import StaffEditForm from "./StaffEditForm";
import StaffEditFormLoader from "./StaffEditFormLoader";

function StaffEditSection() {
  const { id, data, error, isLoading } = useStaffDetail();


  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Edit Customer</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this customer in one place.
        </p>
      </div>

      {isLoading ? (
        <StaffEditFormLoader />
      ) : (
        <StaffEditForm data={data.data} />
      )}
    </section>
  );
}

export default StaffEditSection;
