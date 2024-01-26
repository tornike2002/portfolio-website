/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilValue } from "recoil";
import AboutAside from "../../components/about/AboutAside";
import AboutPersonal from "../../components/about/AboutPersonal";
import AboutSecondNav from "../../components/about/AboutSecondNav";
import Footer from "../../components/footer/Footer";
import NavbarPage from "../navbar/NavbarPage";

import AboutProffesional from "../../components/about/AboutProffesional";
import {
  recoilPersonal,
  recoilProfessional,
} from "../../components/recoilstate/state";

const AboutLayout: React.FC = () => {
  const aboutPersonalToggle = useRecoilValue(recoilPersonal);
  const aboutProffToggle = useRecoilValue(recoilProfessional);
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <div className="flex">
        <AboutAside />
        <div className="flex flex-col">
          <AboutSecondNav />
          {aboutPersonalToggle ? <AboutPersonal /> : ""}
          {aboutProffToggle ? <AboutProffesional /> : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutLayout;
