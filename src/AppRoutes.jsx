import { Routes, Route } from "react-router-dom";
import Home from "./public_pages/home/home";
import Demonlist from "./public_pages/demonlist/Demonlist";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demonlist" element={<Demonlist demonlistType="main" />} />
      <Route
        path="/demonlist/extended"
        element={<Demonlist demonlistType="extended" />}
      />
      <Route
        path="/demonlist/legacy"
        element={<Demonlist demonlistType="legacy" />}
      />
      <Route path="/demonlist/:id" element={<></>} />
      <Route path="/packs" element={<></>} />
      <Route path="/stats" element={<></>} />

      <Route path="/player" element={<></>} />
      <Route path="/player/:id" element={<></>} />
      <Route path="/submitrecord" element={<></>} />
      <Route path="/roulette" element={<></>} />
      <Route path="/info" element={<></>} />

      <Route path="/admin" element={<></>}>
        <Route path="home" element={<></>} />

        <Route path="level/add" element={<></>} />
        <Route path="level/edit/info/:id" element={<></>} />
        <Route path="level/edit/position/:id" element={<></>} />

        <Route path="player/add" element={<></>} />
        <Route path="player/edit/:id" element={<></>} />

        <Route path="pack/packrank/add" element={<></>} />
        <Route path="pack/packrank/edit/:id" element={<></>} />
        <Route path="pack/add" element={<></>} />
        <Route path="pack/edit/:id" element={<></>} />

        <Route path="record/add" element={<></>} />
        <Route path="record/edit/:id" element={<></>} />
      </Route>
    </Routes>
  );
}
