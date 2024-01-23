import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="text-navPrimary text-base justify-center flex items-center border font-Fira h-14
     bg-MainPrimary font-medium border-NavBorderColor rounded-md"
    >
      <div className="w-1/6 border-r h-full border-NavBorderColor pt-4">
        <Link to="/" className="pl-4">
          tornike-butiashvili
        </Link>
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex gap-10 items-center justify-center text-center h-14">
          <Link
            to="/"
            className="border-r border-NavBorderColor pl-5 pr-5 h-full pt-4"
          >
            _hello
          </Link>
          <Link
            to="/about"
            className="border-r border-NavBorderColor pr-8 h-full pt-4"
          >
            _about_me
          </Link>
          <Link
            to="/projects"
            className="border-r border-NavBorderColor pr-8 h-full pt-4"
          >
            _projects
          </Link>
        </div>
        <div className="">
          <Link
            to="/contact"
            className="pr-4 pl-4 border-l border-NavBorderColor min-h-full "
          >
            _contact_me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
