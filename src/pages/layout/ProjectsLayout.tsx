import Footer from "../../components/footer/Footer";
import NavbarPage from "../navbar/NavbarPage";
import ProjectsPage from "../projects/ProjectsPage";

const ProjectsLayout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full p-11 m-auto">
      <NavbarPage />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default ProjectsLayout;
