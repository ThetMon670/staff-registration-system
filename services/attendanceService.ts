import { getCookie } from "react-use-cookie";

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL + "/v1/attendance";

export async function checkIn(): Promise<any> {
  const res = await fetch(`${API_BASE}/check-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
  return res.json();
}

export async function checkOut(): Promise<any> {
  const res = await fetch(`${API_BASE}/check-out`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
  return res.json();
}

export async function getMyAttendance(): Promise<any> {
  const res = await fetch(`${API_BASE}/my`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
  return res.json();
}