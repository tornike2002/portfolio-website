import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="text-navPrimary text-base justify-center flex items-center border font-Fira h-10
     bg-MainPrimary font-medium border-NavBorderColor rounded-md"
    >
      <div className="w-1/6 border-r h-full border-NavBorderColor pt-2">
        <Link to="/" className="pl-4">
          tornike-butiashvili
        </Link>
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex gap-10 items-center justify-center text-center h-10">
          <Link
            to="/"
            className="border-r border-NavBorderColor pl-5 pr-5 h-full pt-2"
          >
            _hello
          </Link>
          <Link
            to="/"
            className="border-r border-NavBorderColor pr-8 h-full pt-2"
          >
            _about_me
          </Link>
          <Link
            to=""
            className="border-r border-NavBorderColor pr-8 h-full pt-2"
          >
            _projects
          </Link>
        </div>
        <div className="h-10 pt-2">
          <Link
            to="/"
            className="pr-4 pl-4 border-l border-NavBorderColor h-full"
          >
            _contact_me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
