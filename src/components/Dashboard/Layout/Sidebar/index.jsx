import React from "react";
import Image from "next/image";
import DashboardMenu from "../Menu";
const DashboardSideBar = ({ className }) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      {/* <Image
        src={
          "https://admin.bebecook.com/images/common/PC_bebecook_logo.png?ver=20220708"
        }
        width={150}
        height={80}
        layout="intrinsic"
      /> */}
      <div className="flex justify-center items-center text-3xl text-center text-bold min-h-16 mb-8">
        LOGO
      </div>
      <div className="flex flex-1 flex-col ">
        <DashboardMenu />
      </div>
    </div>
  );
};

export default DashboardSideBar;
