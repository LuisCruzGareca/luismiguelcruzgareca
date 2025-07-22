import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import SobreMi from "./components/SobreMi.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobreMi" element={<SobreMi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
