// import { ChangePasswordFormValues } from "@/types/UserTypes";
// import { getCookie } from "react-use-cookie";

// export const profileApiUrl =
//   process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/user-profile";

// export function logout(): Promise<Response> {
//   return fetch(`${profileApiUrl}/logout`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${getCookie("token")}`,
//     },
//   });
// }

// export function updateProfile(payload: { name: string }): Promise<Response> {
//   return fetch(`${profileApiUrl}/change-name`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${getCookie("token")}`,
//     },
//     body: JSON.stringify(payload),
//   });
// }

// export function updateProfilePhoto(payload: {
//   photo: string;
// }): Promise<Response> {
//   return fetch(`${profileApiUrl}/change-photo`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${getCookie("token")}`,
//     },
//     body: JSON.stringify(payload),
//   });
// }

// export function changePassword(
//   payload: ChangePasswordFormValues,
// ): Promise<Response> {
//   return fetch(`${profileApiUrl}/change-password`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${getCookie("token")}`,
//     },
//     body: JSON.stringify(payload),
//   });
// }

import { getCookie } from "react-use-cookie";

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL + "/v1";

export function logout(): Promise<Response> {
  return fetch(`${API_BASE}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
}