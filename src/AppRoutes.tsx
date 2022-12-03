import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Tilt from "./pages/Tilt";
import Pokemon from "./pages/Pokemon";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/tilt" element={<Tilt />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
  );
};

export default AppRoutes;
