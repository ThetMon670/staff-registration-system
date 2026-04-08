import { Badge } from "@/components/ui/badge";
import { StaffDetailType } from "@/types/StaffTypes";

type Props = {
  data: StaffDetailType;
};

function StaffDetailCard({
  data: { staff_code, name, department, email, phone, user, created_at, updated_at },
}: Props) {
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6 p-4">
      <div>
        <p className="text-xs text-muted-foreground mb-1">Staff Code</p>
        <p className="text-sm text-foreground">{staff_code}</p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Department</p>
        <p className="text-sm text-foreground">
          <Badge variant="secondary">{department}</Badge>
        </p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Name</p>
        <p className="text-sm text-foreground">{name}</p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Email</p>
        <p className="text-sm text-foreground">{email || "-"}</p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Phone</p>
        <p className="text-sm text-foreground">{phone || "-"}</p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">User Account</p>
        <p className="text-sm text-foreground">{user?.email}</p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Created At</p>
        <p className="text-sm text-foreground">
          {new Date(created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Updated At</p>
        <p className="text-sm text-foreground">
          {new Date(updated_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}

export default StaffDetailCard;