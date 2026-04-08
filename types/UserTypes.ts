import z from "zod";

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  role: "admin" | "staff";
  created_at: string;
  updated_at: string;
};
