import React from "react";
import { Outlet } from "react-router-dom";

// components

import AdminNavbar from "src/admin/components/Navbars/AdminNavbar";
import Sidebar from "src/admin/components/Sidebar/Sidebar";
import HeaderStats from "src/admin/components/Headers/HeaderStats";
import FooterAdmin from "src/admin/components/Footers/FooterAdmin";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full" style={{ paddingTop: "5rem" }}>
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
