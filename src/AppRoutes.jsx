import { Routes, Route } from "react-router-dom";
import Home from "./public_pages/home/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<></>} />
    </Routes>
  );
}
