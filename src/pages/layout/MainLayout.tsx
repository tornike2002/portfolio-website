import React from "react";
import NavbarPage from "../navbar/NavbarPage";
import Header from "../../components/header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <Header />
    </div>
  );
};

export default MainLayout;
