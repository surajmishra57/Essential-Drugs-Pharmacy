import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/homepage/Home";
import BuyMedicin from "./components/pages/buymedicine/BuyMedicin";
import BuyProduct from "./components/pages/buyproducts/BuyProducts";
import LabTest from "./components/pages/labtest/LabTest";
import FindDoner from "./components/pages/finddonner/FindDoner";
import Navbar from "./components/Navbar";
import Signup from "./components/pages/base/Signup";
import Login from "./components/pages/base/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyMedicin" element={<BuyMedicin />} />
          <Route path="/buyProduct" element={<BuyProduct />} />
          <Route path="/labTest" element={<LabTest />} />
          <Route path="/findDoner" element={<FindDoner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
