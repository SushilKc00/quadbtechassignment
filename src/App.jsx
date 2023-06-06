import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom/dist";
import { Home } from "./components/Home";
import { Summary } from "./components/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:id" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
