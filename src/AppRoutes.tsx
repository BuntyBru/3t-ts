import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Tilt from "./pages/Tilt";
import Pokemon from "./pages/Pokemon";
import UseCallbackHook from "./pages/useCallbackHook";
import HigherOrderStuff from "./pages/HigherOrderStuff";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/tilt" element={<Tilt />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/other-hook" element={<UseCallbackHook />} />
      <Route path="/hoc-stuff" element={<HigherOrderStuff />} />
    </Routes>
  );
};

export default AppRoutes;
