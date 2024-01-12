import HeaderImages from "./HeaderImages";

const Header: React.FC = () => {
  return (
    <div className="min-h-[80vh] text-white bg-MainPrimary flex justify-around items-center">
      <div
        className=" bg-MainPrimary gap-10 flex flex-col"
      >
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-lg font-normal text-white font-Fira">
            Hi all. I am
          </p>
          <h1 className="font-Fira font-medium text-6xl text-white leading-[100%]">
            Tornike Butiashvili
          </h1>
          <h3 className="text-codeBlue font-bold text-4xl font-Fira">
            -- React Developer
          </h3>
        </div>

        <div className="flex flex-col gap-3 justify-center">
          <p className="font-medium text-navPrimary text-base font-Fira">
            // find my profile on Github:
          </p>
          <h1>
            <span className="text-codeBlue font-Fira font-bold text-base pr-3">
              const
            </span>
            <span className="font-Fira text-base font-medium text-codeGreen pr-3">
              githubLink
            </span>
            <span className="pr-3 font-fira text-base font-medium">=</span>
            <a
              href="https://github.com/tornike2002"
              target="_blank"
              className="font-Fira text-base font-medium text-codeRed"
            >
              https://github.com/tornike2002
            </a>
          </h1>
        </div>
      </div>
      <div>
        <HeaderImages />
      </div>
    </div>
  );
};

export default Header;
