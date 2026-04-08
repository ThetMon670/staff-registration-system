import Header from "@/components/Header";
import StaffListSection from "@/modules/staff/components/list/StaffListSection";

function page() {
  return (
    <>
      <Header currentPage="customers" />
      <StaffListSection />
    </>
  );
}

export default page;
