import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </>
  );
}
export default App;
