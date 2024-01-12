const Header: React.FC = () => {
  return (
    <div className="min-h-[80vh] text-white bg-MainPrimary">
      <div>
        <p className="text-lg font-normal text-white font-Fira">Hi all. I am</p>
        <h1 className="font-fira font-medium text-5xl text-white">
          Tornike Butiashvili
        </h1>
        <h3 className="text-codeBlue font-bold text-base font-Fira">
          {" "}
          -- React Developer
        </h3>
      </div>
      <div>
        <p className="font-medium text-navPrimary text-base font-Fira">
          // find my profile on Github:
        </p>
        <h1>
          <span className="text-codeBlue font-Fira font-bold text-base">
            const
          </span>
          <span className="font-Fira text-base font-medium text-codeGreen">githubLink</span> =
          <span className="font-Fira text-base font-medium">https://github.com/beqa200</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
