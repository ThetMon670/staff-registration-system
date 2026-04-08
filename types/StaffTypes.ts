// import { customerCreateFormSchema } from "@/modules/customer/hooks/useCustomerCreate";
// import { customerEditFormSchema } from "@/modules/customer/hooks/useCustomerEdit";
import z from "zod";
import { User } from "./UserTypes";
import { staffCreateFormSchema } from "@/modules/staff/hooks/useStaffCreate";

export type StaffCreateFormValues = z.infer<typeof staffCreateFormSchema>;
export type StaffEditFormValues = z.infer<typeof staffEditFormSchema>;

export type StaffStorePayloadValues = Omit<
  StaffCreateFormValues,
  "confirm" | "stay_here"
>;

export type StaffUpdatePayloadValues = Omit<
  StaffEditFormValues,
  "confirm" | "stay_here"
>;

export type StaffDetailType = StaffStorePayloadValues & {
  id: number;
  image: string;
  name: string;
  user: User;
  created_at: string;
  updated_at: string;
};
