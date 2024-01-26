import htmlLogo from "../../assets/skills/html.webp";
import cssLogo from "../../assets/skills/css-3.webp";
import windCss from "../../assets/skills/tailwind.webp";
import reactLogo from "../../assets/skills/reactLogo.webp";
import styledComponents from "../../assets/skills/styled-components.webp";
import restApiLogo from "../../assets/skills/icons8-rest-api-96.webp";
import jsLogo from "../../assets/skills/js.webp";
import tsLogo from "../../assets/skills/typescript.webp";
import gitLogo from "../../assets/skills/git.webp";
import recoilJs from "../../assets/skills/recoiljs.com.png";
import netlifyLogo from "../../assets/skills/netlify.png";
import sassLogo from "../../assets/skills/sass.webp";
import viteLogo from "../../assets/skills/vite.svg.png";
import bootLogo from "../../assets/skills/bootstrap-logo.png";
import AboutCvDownload from "./AboutCvDownload";
const AboutSkills: React.FC = () => {
  return (
    <div
      className="bg-MainPrimary flex flex-col justify-center items-center gap-5 border-r
     border-NavBorderColor"
    >
      <h1 className="text-codeBlue font-bold text-4xl text-center tracking-wider">
        Skills
      </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center w-[80%]">
        <img className="w-[50px] cursor-pointer" src={htmlLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={cssLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={windCss} alt="" />
        <img className="w-[50px] cursor-pointer" src={reactLogo} alt="" />
        <img
          className="w-[50px] cursor-pointer"
          src={styledComponents}
          alt=""
        />
        <img className="w-[50px] cursor-pointer" src={jsLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={tsLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={gitLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={restApiLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={recoilJs} alt="" />
        <img className="w-[50px] cursor-pointer" src={netlifyLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={sassLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={viteLogo} alt="" />
        <img className="w-[50px] cursor-pointer" src={bootLogo} alt="" />
      </div>
      <AboutCvDownload />
    </div>
  );
};

export default AboutSkills;
