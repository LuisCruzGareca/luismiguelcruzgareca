import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import SobreMi from "./components/SobreMi.jsx";
import ToolsAll from "./components/ToolsAll.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/tools_all" element={<ToolsAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
