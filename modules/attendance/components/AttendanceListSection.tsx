import { Suspense } from "react";
import AttendanceTable from "./AttendanceTable";

function AttendanceListSection() {
  return (
    <section className="container mx-auto py-3 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1">My Attendance</h3>
        <p className="text-xs text-muted-foreground">
          View your attendance check-ins and check-outs here.
        </p>
      </div>
      <Suspense>
        <AttendanceTable />
      </Suspense>
    </section>
  );
}

export default AttendanceListSection;