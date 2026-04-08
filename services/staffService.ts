import { StaffStorePayloadValues, StaffUpdatePayloadValues } from "@/types/StaffTypes";
import { getCookie } from "react-use-cookie";

export const staffApiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/v1/staffs";

// store
// update
// show
// index

export function storeStaff(
  payload: StaffStorePayloadValues,
): Promise<Response> {
  return fetch(`${staffApiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function updateStaff(
  payload: StaffUpdatePayloadValues,
  id: number,
): Promise<Response> {
  return fetch(`${staffApiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function deleteStaff(id: number): Promise<Response> {
  return fetch(`${staffApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
}
