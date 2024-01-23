import { Fragment } from "react";
import { DownOutlined } from "@ant-design/icons";
const AboutAside: React.FC = () => {
  return (
    <Fragment>
      <aside className="text-white font-Fira border rounded-md border-NavBorderColor w-[25%]">
        <div className="pl-4 border-b border-NavBorderColor ">
          <h1 className="p-5">_about-me</h1>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1 pl-5 bg-NavBorderColor">
            <DownOutlined />
            info
          </span>
          <span className="flex items-center gap-1 pl-5 bg-NavBorderColor">
            <DownOutlined />
            contacts
          </span>
        </div>
      </aside>
    </Fragment>
  );
};

export default AboutAside;
