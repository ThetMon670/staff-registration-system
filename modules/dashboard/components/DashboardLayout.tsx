import React, { ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";

type Props = {
  children: ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <div>
      <DashboardHeader />
      <div className=" px-3 md:px-0">{children}</div>
    </div>
  );
}

export default DashboardLayout;
