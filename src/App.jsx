import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import EducationPage from "./pages/Education";
import ExperiencesPage from "./pages/Experiences";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
      </Routes>
      <BottomNavbar />
    </BrowserRouter>
  );
}

export default App;
