import Projects from "../../components/projects/Projects";
import ProjectsSidebar from "../../components/projects/ProjectsSidebar";

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex">
      <ProjectsSidebar />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
