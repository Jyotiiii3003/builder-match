import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Builders from "../pages/Builders/Builders";
import Scanner from "../pages/Scanner/Scanner";
import Team from "../pages/Team/Team";
import Settings from "../pages/Settings/Settings";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/builders" element={<Builders />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/team" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;