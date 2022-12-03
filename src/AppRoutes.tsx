import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Tilt from "./pages/Tilt";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/tilt" element={<Tilt />} />
    </Routes>
  );
};

export default AppRoutes;
