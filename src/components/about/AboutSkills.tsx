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
const AboutSkills: React.FC = () => {
  return (
    <div
      className="bg-MainPrimary flex flex-col justify-center items-center gap-5 border-r
     border-NavBorderColor"
    >
      <h1 className="text-white font-bolld text-4xl text-center">SKILLS</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center w-[40%]">
        <img className="w-[50px]" src={htmlLogo} alt="" />
        <img className="w-[50px]" src={cssLogo} alt="" />
        <img className="w-[50px]" src={windCss} alt="" />
        <img className="w-[50px]" src={reactLogo} alt="" />
        <img className="w-[50px]" src={styledComponents} alt="" />
        <img className="w-[50px]" src={jsLogo} alt="" />
        <img className="w-[50px]" src={tsLogo} alt="" />
        <img className="w-[50px]" src={gitLogo} alt="" />
        <img className="w-[50px]" src={restApiLogo} alt="" />
        <img className="w-[50px]" src={recoilJs} alt="" />
        <img className="w-[50px]" src={netlifyLogo} alt="" />
        <img className="w-[50px]" src={sassLogo} alt="" />
        <img className="w-[50px]" src={viteLogo} alt="" />
        <img className="w-[50px]" src={bootLogo} alt="" />
      </div>
    </div>
  );
};

export default AboutSkills;
