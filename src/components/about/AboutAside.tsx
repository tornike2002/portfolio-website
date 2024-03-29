/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useState } from "react";
import {
  DownOutlined,
  CaretDownOutlined,
  FolderOutlined,
  MailOutlined,
  PhoneOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { recoilPersonal, recoilProfessional } from "../recoilstate/state";

const AboutAside: React.FC = () => {
  const [chivToggle, setChivToggle] = useState<boolean>(false);
  const [conChivToggle, setConChivToggle] = useState<boolean>(false);

  const [aboutPersonalToggel, setAboutPersonalToggle] =
    useRecoilState<boolean>(recoilPersonal);
  const [aboutProffToggle, setAboutProffToggle] =
    useRecoilState<boolean>(recoilProfessional);
  const infoChivToggle = () => {
    setChivToggle((value) => !value);
  };
  const conChivTogglehandler = () => {
    setConChivToggle((value) => !value);
  };
  const aboutPerToggle = () => {
    setAboutPersonalToggle(true);
    setAboutProffToggle(false);
  };
  console.log(aboutPersonalToggel);
  const aboutProfToggle = () => {
    setAboutProffToggle(true);
    setAboutPersonalToggle(false);
  };
  console.log(aboutProffToggle);
  return (
    <Fragment>
      <aside
        className="text-white font-Fira border border-NavBorderColor min-w-[25%]
       min-h-[80vh] bg-MainPrimary"
      >
        <div className="border-b border-NavBorderColor ">
          <h1 className="p-5 font-medium">_about-me</h1>
        </div>
        <div className="flex flex-col gap-2">
          <span
            className="flex items-center gap-1 pl-5 bg-NavBorderColor font-medium cursor-pointer"
            onClick={infoChivToggle}
          >
            {chivToggle ? (
              <UpOutlined onClick={infoChivToggle} />
            ) : (
              <DownOutlined onClick={infoChivToggle} />
            )}
            info
          </span>
          {chivToggle && (
            <div className="flex flex-col items-start pl-7 cursor-pointer tracking-wider">
              <span
                className="flex items-center gap-2 font-bold"
                onClick={aboutPerToggle}
              >
                <CaretDownOutlined className="cursor-pointer" />
                <FolderOutlined className="cursor-pointer" /> Personal
              </span>
              <span
                className="flex items-center gap-2 cursor-pointer font-bold tracking-wider"
                onClick={aboutProfToggle}
              >
                <CaretDownOutlined className="cursor-pointer" />
                <FolderOutlined className="cursor-pointer" /> Proffesional
              </span>
            </div>
          )}
          <span
            className="flex items-center gap-1 pl-5 bg-NavBorderColor font-medium cursor-pointer"
            onClick={conChivTogglehandler}
          >
            {conChivToggle ? (
              <UpOutlined onClick={conChivTogglehandler} />
            ) : (
              <DownOutlined onClick={conChivTogglehandler} />
            )}
            contacts
          </span>
          {conChivToggle && (
            <div>
              <h1
                className="flex items-center gap-3 pl-5 text-navPrimary font-medium tracking-wider 
            hover:opacity-70"
              >
                <MailOutlined /> butiashvilitornike18@gmail.com
              </h1>
              <h1
                className="flex items-center gap-3 pl-5 text-navPrimary font-medium tracking-wider 
            hover:opacity-70"
              >
                <PhoneOutlined /> (+995) 598 78 83 00
              </h1>
            </div>
          )}
        </div>
      </aside>
    </Fragment>
  );
};

export default AboutAside;
