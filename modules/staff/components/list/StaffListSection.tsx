import { Suspense } from "react";
import CustomerTable from "./StaffTable";

function StaffListSection() {
  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Staff Lists</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this staff in one place.
        </p>
      </div>
      <Suspense>
        <CustomerTable />
      </Suspense>
    </section>
  );
}

export default StaffListSection;