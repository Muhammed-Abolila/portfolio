import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <BottomNavbar />
    </BrowserRouter>
  );
}

export default App;
