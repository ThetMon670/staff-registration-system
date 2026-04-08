import { customerGenders } from "@/lib/constants";
import { storeStaff } from "@/services/staffService";
import { StaffCreateFormValues } from "@/types/StaffTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export const staffCreateFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
    image: z.string().min(1, "Image is required"),
  date_of_birth: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  address: z.string().min(1, "Address is required"),
  gender: z
    .enum(customerGenders)
    .or(z.literal(""))
    .refine((val) => val !== "", {
      message: "Please select gender",
      path: ["gender"],
    }),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must check to create new customer",
    path: ["confirm"],
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
        throw new Error(json.message || "Customer creation failed");
      }

      toast.success("Customer created successfully");

      form.reset();

      if (!stay_here) {
        router.push(`/dashboard/customers/${json.data.id}`);
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
