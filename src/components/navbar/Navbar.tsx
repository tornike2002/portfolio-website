const Navbar = () => {
  return (
    <div
      className="text-navPrimary text-base justify-center flex items-center border font-Fira h-10
     bg-MainPrimary font-medium border-NavBorderColor rounded-md"
    >
      <div className="w-1/6 border-r h-full border-NavBorderColor">
        <h1 className="pl-4 pt-2">tornike-butiashvili</h1>
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex gap-10 items-center justify-center text-center h-10">
          <h1 className="border-r border-NavBorderColor pl-5 pr-5 h-full pt-2">
            _hello
          </h1>
          <h1 className="border-r border-NavBorderColor pr-8 h-full pt-2">
            _about_me
          </h1>
          <h1 className="border-r border-NavBorderColor pr-8 h-full pt-2">
            _projects
          </h1>
        </div>
        <div className="h-10">
          <h1 className="pr-4 pl-4 border-l border-NavBorderColor h-full pt-2">
            _contact_me
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
