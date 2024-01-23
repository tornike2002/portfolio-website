import { Route, Routes } from "react-router-dom";
import HelloLayout from "./pages/layout/HelloLayout";
import ProjectsLayout from "./pages/layout/ProjectsLayout";
import AboutLayout from "./pages/layout/AboutLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloLayout />} />
        <Route path="/hello" element={<HelloLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/projects" element={<ProjectsLayout />} />
      </Routes>
    </>
  );
}

export default App;
