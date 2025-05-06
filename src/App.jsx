import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <BottomNavbar/>
    </BrowserRouter>
  );
}

export default App;
