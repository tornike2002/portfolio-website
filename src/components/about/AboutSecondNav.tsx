import { CloseOutlined } from "@ant-design/icons";
import { recoilPersonal } from "../recoilstate/state";
import { useRecoilValue } from "recoil";
const AboutSecondNav: React.FC = () => {
  const aboutPersonalToggle = useRecoilValue(recoilPersonal);
  return (
    <div
      className="w-full bg-MainPrimary border-b border-b-NavBorderColor border-r
     border-r-NavBorderColor h-16"
    >
      <div className="flex justify-start items-center h-full">
        <h1
          className="font-Fira font-medium text-navPrimary p-4 border-r border-r-NavBorderColor
        cursor-pointer flex items-center gap-4"
        >
          {aboutPersonalToggle ? "personal" : "professional"}
          <CloseOutlined className="text-xs" />
        </h1>
      </div>
    </div>
  );
};

export default AboutSecondNav;
