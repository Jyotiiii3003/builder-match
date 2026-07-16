import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#FAF8FF]">
      <Outlet />
    </div>
  );
}

export default MainLayout;