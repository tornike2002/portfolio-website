import { Route, Routes } from "react-router-dom";
import HelloLayout from "./pages/layout/HelloLayout";
import ProjectsLayout from "./pages/layout/ProjectsLayout";
import AboutLayout from "./pages/layout/AboutLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloLayout />} />
        <Route path="/projects" element={<AboutLayout />} />
        <Route path="/about" element={<ProjectsLayout />} />
      </Routes>
    </>
  );
}

export default App;
