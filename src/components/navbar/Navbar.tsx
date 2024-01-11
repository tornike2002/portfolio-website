const Navbar = () => {
  return (
    <div className="text-navPrimary text-base flex items-center border p-3">
      <div className="w-52">
        <h1>tornike-butiashvili</h1>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-10">
          <h1>_hello</h1>
          <h1>_about_me</h1>
          <h1>_projects</h1>
        </div>
        <div>
          <h1>_contact_me</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
