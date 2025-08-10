import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: Readonly<ReactNode>;
}

const AdminLayout: React.FC<AdminLayoutProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <main className="flex flex-col ">
        <div className="flex justify-items-start space-x-4">
          <div className="flex-1 ">
            <Sidebar />
          </div>
          <div className="bg-red-50 flex-10 p-4 w-full min-h-screen">
            {children}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AdminLayout;
