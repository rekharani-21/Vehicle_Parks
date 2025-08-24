import React from "react";
import { useNavigate } from "react-router";

function VehicleHistory() {
  let navigate = useNavigate();
  let vehicleParking = JSON.parse(localStorage.getItem("vehicleHistory")) || [];
  console.log(vehicleParking);

  return (
    <>
      <div className="vehicle_history">
        <h2>Vehicle All Details</h2>
        <button onClick={() => navigate("/admin_dashbord")}>Back</button>
        {vehicleParking.map((e, index) => {
          return (
            <div key={index}>
              <p>{index + 1}.</p>
              <h3>{e.vehicleNumber}</h3>
              {e.vehicleType == "10" && <p>2 Wheeler</p>}
              {e.vehicleType == "20" && <p>3 Wheeler</p>}
              {e.vehicleType == "30" && <p>4 Wheeler</p>}
              {e.vehicleType == "50" && <p>Heavy Vehicle</p>}
              <p>Entry: {e.entryTime}</p>
              <p>Exit: {e.exitTime}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default VehicleHistory;
