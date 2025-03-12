import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ServicesComponent from "./components/ServicesComponent";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesComponent />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
