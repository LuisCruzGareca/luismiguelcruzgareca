import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import SobreMi from "./pages/SobreMi.jsx";
import "./app.css";
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
