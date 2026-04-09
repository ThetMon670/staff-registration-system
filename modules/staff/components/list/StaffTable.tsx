"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useStaffList from "../../hooks/useStaffList";
import StaffTableLoader from "./StaffTableLoader";
import StaffTableRow from "./StaffTableRow";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TablePagination from "../../../../components/TablePagination";
import TableSearchInput from "@/components/TableSearchInput";
import TableSortableColumn from "@/components/TableSortableColumn";
import TableEmptyRow from "@/components/TableEmptyRow";
import { StaffDetailType } from "@/types/StaffTypes";

function StaffTable() {
  const { data, error, isLoading } = useStaffList();
  return (
    <>
      <div className="flex justify-between gap-1">
        <TableSearchInput placeholder="Search staff ..." />

        <div className="flex justify-end gap-2">
          <Link href={"/dashboard/staffs/create"}>
            <Button size="sm">Create Staff</Button>
          </Link>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <TableSortableColumn columnName="staff_code">
                Staff Code
              </TableSortableColumn>
            </TableHead>

            <TableHead>
              <TableSortableColumn columnName="name">
                Staff
              </TableSortableColumn>
            </TableHead>

            <TableHead>
              <TableSortableColumn columnName="department">
                Department
              </TableSortableColumn>
            </TableHead>

            <TableHead>Phone</TableHead>

            <TableHead>
              <TableSortableColumn
                align="left"
                iconPosition="right"
                columnName="created_at"
              >
                Created
              </TableSortableColumn>
            </TableHead>

            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="[&_td]:align-top">
          {isLoading ? (
            <StaffTableLoader />
          ) : (
            <>
              <TableEmptyRow colSpan={6}>
                There is no Staff Data
              </TableEmptyRow>

              {data?.data.map((el: StaffDetailType) => (
                <StaffTableRow key={el.id} staff={el} />
              ))}
            </>
          )}
        </TableBody>
      </Table>

      <TablePagination links={data?.links} meta={data?.meta} />
    </>
  );
}

export default StaffTable;