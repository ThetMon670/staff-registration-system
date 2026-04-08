import { staffApiUrl, updateStaff } from "@/services/staffService";
import { StaffDetailType, StaffEditFormValues } from "@/types/StaffTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { mutate } from "swr";
import { z } from "zod";

export const staffEditFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  department: z.string().min(1, "Department is required"),
  phone: z.string().optional(),

  stay_here: z.boolean(),

  confirm: z.boolean().refine((val) => val === true, {
    message: "You must confirm to update staff",
  }),
});

function useStaffEdit(staffData: StaffDetailType) {
  const form = useForm<StaffEditFormValues>({
    resolver: zodResolver(staffEditFormSchema),
    defaultValues: {
      name: staffData.name || "",
      department: staffData.department || "",
      phone: staffData.phone || "",
      stay_here: false,
      confirm: false,
    },
  });

  const router = useRouter();

  const onSubmit = async (formData: StaffEditFormValues) => {
    try {
      const { stay_here, confirm, ...payload } = formData;

      const res = await updateStaff(payload, staffData.id);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Staff update failed");
      }

      mutate(`${staffApiUrl}/${staffData.id}`);

      toast.success("Staff updated successfully");

      form.reset();

      if (!stay_here) {
        router.push(`/dashboard/staffs/${json.data.id}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return {
    ...form,
    onSubmit,
  };
}

export default useStaffEdit;