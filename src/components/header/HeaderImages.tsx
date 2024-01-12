import codeBg from "../../assets/header/code-snippet-no-opacity.svg";
const HeaderImages: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-[560px] min-h-44 rounded-lg opacity-40 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${codeBg})` }}
      ></div>
      <div
        className="w-[560px] min-h-44 rounded-lg bg-no-repeat bg-center bg-cover filter drop-shadow-2xl"
        style={{ backgroundImage: `url(${codeBg})` }}
      ></div>
      <div
        className="w-[560px] min-h-44 rounded-lg opacity-40 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${codeBg})` }}
      ></div>
    </div>
  );
};

export default HeaderImages;
