import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadedData from "./pages/idados-carregados";
import Calculate from "./pages/icalcular";

export default function IApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadedData />} />
        <Route path="/input" element={<Calculate />} />
      </Routes>
    </Router>
  );
}
