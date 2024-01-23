import AboutAside from "../../components/about/AboutAside";
import AboutSecondNav from "../../components/about/aboutSecondNav";
import Footer from "../../components/footer/Footer";
import NavbarPage from "../navbar/NavbarPage";

const AboutLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <div className="flex">
        <AboutAside />
        <AboutSecondNav />
      </div>
      <Footer />
    </div>
  );
};

export default AboutLayout;
