import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function VehicleExit() {
  const [parking, setParking] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let storedParking = JSON.parse(localStorage.getItem("vehicleParking")) || [];
    setParking(storedParking);
  }, []);

  function handleUpdateParking(index, vehicleNum) {

    let updatedParking = parking.filter((_, i) => i !== index);
    localStorage.setItem("vehicleParking", JSON.stringify(updatedParking));
    setParking(updatedParking);


    let vehicleHistory = JSON.parse(localStorage.getItem("vehicleHistory")) || [];

 
    let found = false;
    let updatedHistory = vehicleHistory.map((data) => {
      if (data.vehicleNumber === vehicleNum && !data.exitTime) {
        found = true;
        return { ...data, exitTime: new Date().toLocaleString() };
      }
      return data;
    });

 
    if (!found) {
      updatedHistory.push({
        vehicleNumber: vehicleNum,
        exitTime: new Date().toLocaleString(),
      });
    }

    localStorage.setItem("vehicleHistory", JSON.stringify(updatedHistory));
  }

  return (
  <div className="exit_vehicle">
    <h2>Vehicle Parking Details</h2>
    <button className="back"onClick={() => navigate("/admin_dashbord")}>Back</button>

    {parking.length === 0 && <p className="p">No vehicles currently parked</p>}

    {/* 👇 naya wrapper add kiya */}
    <div className="vehicle-list">
      {parking.map((e, index) => (
        <div className="vehicle-row" key={index}>
          <p>{index + 1}.</p>
          <h3>{e.vehicleNumber}</h3>
          {e.vehicleType === "10" && <p>2 Wheeler</p>}
          {e.vehicleType === "20" && <p>3 Wheeler</p>}
          {e.vehicleType === "30" && <p>4 Wheeler</p>}
          {e.vehicleType === "50" && <p>Heavy Vehicle</p>}
          <p>Entry Time: {e.entryTime}</p>
          <button onClick={() => handleUpdateParking(index, e.vehicleNumber)}>
            Exit
          </button>
        </div>
      ))}
    </div>
  </div>
);

}

export default VehicleExit;
