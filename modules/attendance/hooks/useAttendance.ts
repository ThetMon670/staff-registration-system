import { useState, useEffect } from "react";
import * as attendanceService from "@/services/attendanceService";

export default function useAttendance() {
  const [attendance, setAttendance] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch attendance on mount
  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const res = await attendanceService.getMyAttendance();
      if (res.data) setAttendance(res.data);
      else setAttendance([]);
    } catch (err: any) {
      setError(err.message || "Failed to fetch attendance");
    } finally {
      setLoading(false);
    }
  };

  // Check-in
  const handleCheckIn = async () => {
    try {
      const res = await attendanceService.checkIn();
      fetchAttendance(); // refresh
      return res;
    } catch (err: any) {
      setError(err.message || "Check-in failed");
    }
  };

  // Check-out
  const handleCheckOut = async () => {
    try {
      const res = await attendanceService.checkOut();
      fetchAttendance(); // refresh
      return res;
    } catch (err: any) {
      setError(err.message || "Check-out failed");
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return {
    attendance,
    loading,
    error,
    handleCheckIn,
    handleCheckOut,
    refetch: fetchAttendance,
  };
}