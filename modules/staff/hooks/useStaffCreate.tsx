import { customerGenders } from "@/lib/constants";
import { storeStaff } from "@/services/staffService";
import { StaffCreateFormValues } from "@/types/StaffTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export const staffCreateFormSchema = z.object({
  staff_code: z.string().min(1, "Staff code is required"),
  name: z.string().min(1, "Name is required"),
  department: z.string().min(1, "Department is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must confirm to create staff",
  }),
});

function useStaffCreate() {
  const form = useForm<StaffCreateFormValues>({
    resolver: zodResolver(staffCreateFormSchema),
     defaultValues: {
      staff_code: "",
      name: "",
      department: "",
      phone: "",
      email: "",
      password: "",
      stay_here: false,
      confirm: false,
    },
  });

  const router = useRouter();

  const onSubmit = async (formData: StaffCreateFormValues) => {
    try {
      const { stay_here, confirm, ...payload } = formData;
      const res = await storeStaff(payload);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Staff creation failed");
      }

      toast.success("Staff created successfully");

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

export default useStaffCreate;