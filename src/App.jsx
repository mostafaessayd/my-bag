import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import MultiplySubtract from "./pages/MultiplySubtract";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/add" element={<Project />} />
      <Route path="/project/multiply-subtract" element={<MultiplySubtract />} />
    </Routes>
  );
}

export default App;