import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kezdolap from "./components/pages/Kezdolap";
import Bejelentkezes from "./components/pages/Bejelentkezes";
import Regisztracio from "./components/pages/Regisztracio";
import VendegLayout from "./components/layouts/VendegLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendegLayout />}>
          <Route index element={<Kezdolap />} />
          <Route path="bejelentkezes" element={<Bejelentkezes />} />
          <Route path="regisztracio" element={<Regisztracio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
