import Footer from "../../components/footer/Footer";
import NavbarPage from "../navbar/NavbarPage";

const ProjectsLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <Footer />
    </div>
  );
};

export default ProjectsLayout;
