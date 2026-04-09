import Header from "@/components/Header";
import AttendanceListSection from "@/modules/attendance/components/AttendanceListSection";

export default function CheckInOutPage() {
  return (
    <>
      <Header currentPage="check-in/out" />
      <AttendanceListSection />
    </>
  );
}