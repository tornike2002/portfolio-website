import AboutAside from "../../components/about/AboutAside";
import AboutPersonal from "../../components/about/AboutPersonal";
import AboutSecondNav from "../../components/about/AboutSecondNav";
import Footer from "../../components/footer/Footer";
import NavbarPage from "../navbar/NavbarPage";

const AboutLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <div className="flex">
        <AboutAside />
        <div className="flex flex-col">
          <AboutSecondNav />
          <AboutPersonal />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutLayout;
