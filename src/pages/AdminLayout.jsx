import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminHeader from '../componants/admin/AdminHeader';
import DashBoard from "./admin/DashBoard";
const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
      </Routes>
    </div>  )
}

export default AdminLayout