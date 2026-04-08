import Header from "@/components/Header";
import StaffDetailSection from "@/modules/staff/components/detail/StaffDetailSection";

function page() {
  return (
    <>
      <Header
        links={[
          {
            title: "staffs",
            href: "/dashboard/staffs",
          },
        ]}
        currentPage="Detail"
      />
      <StaffDetailSection />
    </>
  );
}

export default page;
