import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="text-navPrimary text-base justify-center flex items-center border font-Fira h-14
     bg-MainPrimary font-medium border-NavBorderColor rounded-md"
    >
      <div className="w-1/6 border-r h-full border-NavBorderColor pt-4">
        <NavLink to="/" className="pl-4">
          tornike-butiashvili
        </NavLink>
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex gap-10 items-center justify-center text-center h-14 active-navlink">
          <NavLink
            to="/hello"
            className="border-r border-NavBorderColor pl-5 pr-5 h-full pt-4"
          >
            _hello
          </NavLink>
          <NavLink
            to="/about"
            className="border-r border-NavBorderColor pr-8 h-full pt-4 "
          >
            _about_me
          </NavLink>
          <NavLink
            to="/projects"
            className="border-r border-NavBorderColor pr-8 h-full pt-4"
          >
            _projects
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/contact"
            className="pr-4 pl-4 border-l border-NavBorderColor min-h-full "
          >
            _contact_me
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
