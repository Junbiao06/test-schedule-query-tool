import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Details from "@/pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:classId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
