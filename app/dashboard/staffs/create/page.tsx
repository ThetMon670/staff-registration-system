import Header from "@/components/Header";
import StaffCreateSection from "@/modules/staff/components/create/StaffCreateSection";


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
        currentPage="create"
      />
      <StaffCreateSection />
    </>
  );
}

export default page;
