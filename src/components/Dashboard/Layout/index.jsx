import { Divider } from "@chakra-ui/react";
import React from "react";
import DashboardHeader from "./Header";
import DashboardSideBar from "./Sidebar/Sidebar";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <DashboardSideBar className="w-60 min-h-screen border-r-2 border-gray-200" />
      <Divider orientation="vertical" />
      {/* Content */}
      <div className="flex flex-col flex-1">
        <DashboardHeader
          avatar="https://bit.ly/dan-abramov"
          name="PTA"
          role="Admin"
        />
        <Divider />
        <div className="p-4 flex-1 bg-white">{children}</div>
      </div>
    </div>
  );
};
