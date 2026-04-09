"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import TablePagination from "@/components/TablePagination";
import TableEmptyRow from "@/components/TableEmptyRow";
import useAdminAttendance from "../hooks/useAdminAttendance"; // your custom hook
import { Suspense } from "react";

export default function AdminAttendanceTable() {
  const { data, error, isLoading } = useAdminAttendance();

  // safely extract actual array and pagination links/meta
  const attendances = data?.data?.data ?? [];
  const links = data?.data?.links ?? [];
  const meta = data?.data ?? {};

  return (
    <section className="container mx-auto py-3 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1">Attendance List</h3>
        <p className="text-xs text-muted-foreground">
          All staff attendance details in one place.
        </p>
      </div>

      <Suspense fallback={<p>Loading attendances...</p>}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Staff</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time In</TableHead>
              <TableHead>Time Out</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="[&_td]:align-top">
            {isLoading ? (
              <TableEmptyRow colSpan={5}>Loading...</TableEmptyRow>
            ) : attendances.length === 0 ? (
              <TableEmptyRow colSpan={5}>No attendance data</TableEmptyRow>
            ) : (
              attendances.map((att: any) => (
                <TableRow key={att.id}>
                  <TableCell>{att.staff?.name}</TableCell>
                  <TableCell>{att.date}</TableCell>
                  <TableCell>{att.time_in || "-"}</TableCell>
                  <TableCell>{att.time_out || "-"}</TableCell>
                  <TableCell>{att.status || "-"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <TablePagination links={links} meta={meta} />
      </Suspense>
    </section>
  );
}