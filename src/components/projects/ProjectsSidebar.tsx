import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";
const ProjectsSidebar: React.FC = () => {
  const [showHide, setShowHide] = useState<boolean>(false);

  const showHideHandler = () => {
    setShowHide((value) => !value);
  };
  return (
    <div>
      <div
        className="text-white font-Fira border border-NavBorderColor w-[18%]
       min-h-[80vh] bg-MainPrimary"
      >
        <div className="border-b border-NavBorderColor">
          <h1 className="p-5 font-medium">_about-me</h1>
        </div>
        <div>
          <div
            className="pl-5 pr-5 pb-3 pt-3 flex items-center gap-2 cursor-pointer"
            onClick={showHideHandler}
          >
            {showHide ? <UpOutlined /> : <DownOutlined />}
            <h1>TechStacks</h1>
          </div>
          {showHide && (
            <div className="pl-5 pr-5 flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <h1 className="cursor-pointer">React</h1>
              </span>
              <span className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <h1 className="cursor-pointer">Javascript</h1>
              </span>
              <span className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <h1 className="cursor-pointer">Typescript</h1>
              </span>
              <span className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <h1 className="cursor-pointer">Tailwind CSS</h1>
              </span>
              <span className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <h1 className="cursor-pointer">Styled Components</h1>
              </span>
              <span className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <h1 className="cursor-pointer">Rest API</h1>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSidebar;
