import AboutAside from "../../components/about/AboutAside";
import Footer from "../../components/footer/Footer";
import NavbarPage from "../navbar/NavbarPage";

const AboutLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <AboutAside />
      <Footer />
    </div>
  );
};

export default AboutLayout;
