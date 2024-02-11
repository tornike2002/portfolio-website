import ecomerceImg from "../../assets/projects/ecommerce-book.png";
import github from "../../assets/projects/github.svg";

const ProjectCards: React.FC = () => {
  return (
    <div className="text-white border bg-MainPrimary max-w-[30%] rounded-md hover:scale-[1.02] 
    transition-all duration-500 ease">
      <div>
        <img src={ecomerceImg} alt="ecomerceImg" className="max-w-[100%]" />
      </div>
      <div className="p-9">
        <h1 className="text-navPrimary font-Fira pb-4">Ecommerce-Book-Shop</h1>
        <div className="flex items-center justify-between">
          <button className="py-3 px-4 bg-NavBorderColor rounded-md font-Fira">
            view-project
          </button>
          <img src={github} alt="git" className="min-w-11" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
