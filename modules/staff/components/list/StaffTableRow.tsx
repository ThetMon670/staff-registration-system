import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TableCell, TableRow } from "@/components/ui/table";
import dayjs from "dayjs";
import { ArrowRight, Pencil } from "lucide-react";
import Link from "next/link";
import StaffDeleteBtn from "../delete/StaffDeleteBtn";
import { StaffDetailType } from "@/types/StaffTypes";

type Props = {
  staff: StaffDetailType;
};

function StaffTableRow({
  staff: {
    id,
    staff_code,
    name,
    email,
    phone,
    department,
    created_at,
    updated_at,
    user,
  },
}: Props) {
  return (
    <TableRow>
      <TableCell>{staff_code}</TableCell>

      <TableCell>
        <p className="capitalize">{name}</p>
        <p className="text-muted-foreground text-xs">{email || "-"}</p>
      </TableCell>

      <TableCell>{department}</TableCell>

      <TableCell>{phone || "-"}</TableCell>

      <TableCell className="w-44">
        <p>{user?.name}</p>
        <p
          className="text-muted-foreground text-xs"
          title={dayjs(created_at).format("D MMM YYYY, h:mm A")}
        >
          {dayjs(updated_at).format("D MMM YYYY")}
        </p>
      </TableCell>

      <TableCell className="w-24">
        <ButtonGroup className="flex justify-end w-full">
          <StaffDeleteBtn id={id} />

          <Link href={`/dashboard/staffs/${id}/edit`}>
            <Button variant="secondary" size="xs">
              <Pencil className="size-2" />
            </Button>
          </Link>

          <Link href={`/dashboard/staffs/${id}`}>
            <Button variant="secondary" size="xs">
              <ArrowRight className="size-2" />
            </Button>
          </Link>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

export default StaffTableRow;