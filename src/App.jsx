import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <BottomNavbar />
    </BrowserRouter>
  );
}

export default App;
