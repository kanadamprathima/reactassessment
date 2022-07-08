import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import HouseDetailsPage from "./pages/HouseDetailsPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Building react app</h1>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/character" element={<CharacterDetailsPage />} />
        <Route path="/house" element={<HouseDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
