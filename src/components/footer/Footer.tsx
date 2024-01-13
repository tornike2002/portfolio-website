import {
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <div className="bg-MainPrimary text-white h-12 border border-NavBorderColor rounded-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1
            className="font-Fira text-base font-medium text-navPrimary border h-12 pt-3 px-4
         border-NavBorderColor"
          >
            find me in:
          </h1>
          <a
            target="_blank"
            href="https://www.facebook.com/Painoglu"
            className="border h-12 px-4 pt-1 border-NavBorderColor"
          >
            <FacebookFilled className="text-2xl text-navPrimary opacity-40" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tornike-butiashvili-4b3633226/"
            className="border h-12 px-4 pt-1 border-NavBorderColor"
          >
            <LinkedinFilled className="text-2xl text-navPrimary opacity-40" />
          </a>
        </div>
        <div className="border border-NavBorderColor h-12  flex items-center px-2">
          <a
            target="_blank"
            href="https://github.com/tornike2002"
            className="font-Fira text-base text-navPrimary font-medium"
          >
            tornike2002
            <span>
              <GithubFilled className="text-2xl pl-2 " />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
