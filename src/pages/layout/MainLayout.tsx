import React from "react";
import NavbarPage from "../navbar/NavbarPage";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage/>
    </div>
  );
};

export default MainLayout;
