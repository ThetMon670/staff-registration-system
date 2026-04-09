import Header from "@/components/Header";
import AdminAttendanceTable from "@/modules/attendance/components/AdminAttendanceTable";
import AttendanceListSection from "@/modules/attendance/components/AttendanceListSection";

export default function CheckInOutPage() {
  return (
    <>
      <Header currentPage="attendances" />
      <AdminAttendanceTable />
    </>
  );
}