import React from "react";
import NavbarPage from "../navbar/NavbarPage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;
