import Header from "@/components/Header";
import StaffEditSection from "@/modules/staff/components/edit/StaffEditSection";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <Header
        links={[
          {
            title: "staffs",
            href: "/dashboard/staffs",
          },
          {
            title: "detail",
            href: `/dashboard/staffs/${id}`,
          },
        ]}
        currentPage="Edit"
      />
      <StaffEditSection />
    </>
  );
}

export default page;
