"use client";

import { useProfileStore } from "@/stores/useProfileStore";
import LogoutBtn from "./LogoutBtn";

function DashboardHeader() {
  const { profile } = useProfileStore();
  return (
    <header className=" border-b bg-card mb-8 ">
      <div className="py-2 px-3 md:px-0 container mx-auto flex items-center justify-between">
        <h3 className="text-primary">Staff Registration System</h3>
        <div className=" flex gap-2 items-center">
          <img
            className=" size-8 rounded-full border-2 border-muted"
              src="/profile_placeholder.jpg"
          />
          <div>
            <h5 className=" font-semibold text-foreground">{profile?.name}</h5>
            <p className=" text-sm text-muted-foreground">{profile?.email}</p>
          </div>
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
