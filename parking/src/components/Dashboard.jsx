import React from "react";
import { useNavigate } from "react-router";

function Dashboard() {
  let navigate = useNavigate();
  return (
    <>
      <div className="dashbord">
        <div onClick={() => navigate("/admin_dashbord/vehicle_entry")}>
          Vehicle Entry
        </div>
        <div onClick={() => navigate("/admin_dashbord/vehicle_exit")}>
          Vehicle Exit
        </div>
        <div onClick={() => navigate("/admin_dashbord/vehicle_history")}>
          History
        </div>
      </div>
    </>
  );
}

export default Dashboard;
