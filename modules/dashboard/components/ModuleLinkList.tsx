"use client";
import { UserCircle, Users, Clock } from "lucide-react";
import ModuleLink from "./ModuleLink";
import { useProfileStore } from "@/stores/useProfileStore";

function ModuleLinkList() {
  const { profile } = useProfileStore();

  const adminModules = [
    {
      groupTitle: "Management",
      modules: [
        {
          icon: <Clock />,
          title: "Attendance",
          href: "/dashboard/attendances",
        },
        {
          icon: <Users />,
          title: "Staff",
          href: "/dashboard/staffs",
        },
      ],
    },
  ];

  const staffModules = [
    {
      groupTitle: "Attendance",
      modules: [
        {
          icon: <Clock />,
          title: "Check In / Check Out",
          href: "/dashboard/checkinoroutpanel",
        },
      ],
    },
  ];

  const userModules = [
    {
      groupTitle: "User Information",
      modules: [
        {
          icon: <UserCircle />,
          title: "Profile Information",
          href: "/dashboard/profile-information",
        },
      ],
    },
  ];
  const moduleLinks =
    profile?.role === "admin"
      ? [...adminModules, ...userModules]
      : [...staffModules, ...userModules];

  return (
    <section className="flex flex-col gap-8 container mx-auto">
      {moduleLinks.map(({ groupTitle, modules }, index) => (
        <div key={`module-group-${index}`}>
          <h4 className="mb-3">{groupTitle}</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modules.map(({ icon, title, href }, index) => (
              <ModuleLink
                key={`module-link-${index}`}
                icon={icon}
                title={title}
                href={href}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ModuleLinkList;