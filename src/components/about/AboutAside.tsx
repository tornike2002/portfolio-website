import { Fragment } from "react";
import {
  DownOutlined,
  CaretDownOutlined,
  FolderOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const AboutAside: React.FC = () => {
  return (
    <Fragment>
      <aside
        className="text-white font-Fira border rounded-md border-NavBorderColor w-[25%]
       min-h-[80vh]"
      >
        <div className="pl-4 border-b border-NavBorderColor ">
          <h1 className="p-5">_about-me</h1>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1 pl-5 bg-NavBorderColor">
            <DownOutlined />
            info
          </span>
          <div className="flex flex-col items-start pl-7 cursor-pointer tracking-wider">
            <span className="flex items-center gap-2 font-bold">
              <CaretDownOutlined className="cursor-pointer" />
              <FolderOutlined className="cursor-pointer" /> Personal
            </span>
            <span className="flex items-center gap-2 cursor-pointer font-bold tracking-wider">
              <CaretDownOutlined className="cursor-pointer" />
              <FolderOutlined className="cursor-pointer" /> Proffesional
            </span>
          </div>
          <span className="flex items-center gap-1 pl-5 bg-NavBorderColor">
            <DownOutlined />
            contacts
          </span>
          <div>
            <h1 className="flex items-center gap-3 pl-5 text-navPrimary font-medium tracking-wider">
              <MailOutlined /> butiashvilitornike18@gmail.com
            </h1>
            <h1 className="flex items-center gap-3 pl-5 text-navPrimary font-medium tracking-wider">
              <PhoneOutlined /> (+995) 598 78 83 00
            </h1>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default AboutAside;
