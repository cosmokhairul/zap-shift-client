import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className=" bg-base-200 p-12">
      <div>
        <ProFastLogo></ProFastLogo>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img src={authImg} />
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
