import React, { useState } from "react";
import { useNavigate } from "react-router";

function VehicleEntryForm() {
  let [vehicleNumber, setVehicleNumber] = useState("");
  let [vehicleType, setVehicleType] = useState("");
  let navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    let entryTime = new Date().toLocaleString();

    let data = {
      vehicleNumber,
      vehicleType,
      entryTime,
      exitTime: "",
    };
    localStorage.setItem("vehicleEntry", JSON.stringify(data));

    navigate("/admin_dashbord/vehicle_entry/billingpage");
  }

  return (
    <div className="vehicle_entry_form">
      <form action="" onSubmit={handleForm}>
        <h3>Enter Vehicle Information</h3>
        <input
          type="text"
          placeholder="Enter Vehicle number"
          value={vehicleNumber}
          onInput={(e) => setVehicleNumber(e.target.value.toUpperCase())}
          autoCapitalize="true"
          required
          maxLength="10"
        />
        <select
          name=""
          id=""
          required
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">Select Vehicle</option>
          <option value="10">2 Wheeler</option>
          <option value="20">3 Wheeler</option>
          <option value="30">4 Wheeler</option>
          <option value="50">Heavy Vehicle</option>
        </select>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default VehicleEntryForm;
