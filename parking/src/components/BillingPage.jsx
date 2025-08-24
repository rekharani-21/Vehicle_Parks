import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router";

function BillingPage() {
  let navigate = useNavigate();
  let vehicleData = JSON.parse(localStorage.getItem("vehicleEntry"));

  
  let [isPaid, setIsPaid] = useState(false);

  function handleStoreData() {
    let StoreData = JSON.parse(localStorage.getItem("vehicleHistory")) || [];
    let vehicleParking =
      JSON.parse(localStorage.getItem("vehicleParking")) || [];

    if (StoreData.length === 0) {
      StoreData.push(vehicleData);
      localStorage.setItem("vehicleHistory", JSON.stringify(StoreData));
      vehicleParking.push(vehicleData);
      localStorage.setItem("vehicleParking", JSON.stringify(vehicleParking));
    } else {
      let exists = vehicleParking.some(
        (e) => e.vehicleNumber === vehicleData.vehicleNumber
      );

      if (!exists) {
        StoreData.push(vehicleData);
        localStorage.setItem("vehicleHistory", JSON.stringify(StoreData));
        vehicleParking.push(vehicleData);
        localStorage.setItem("vehicleParking", JSON.stringify(vehicleParking));
      } else {
        alert("Already Vehicle Parking Entry");
        return; 
      }
    }

    setIsPaid(true);
  }

  let upi = "enter your UPI ID here";
  let paymateURL = `upi://pay?pa=${upi}&pn=Parking%20Lot&am=${vehicleData.vehicleType}&cu=INR`;

  return (
    <div className="billing">
      <div className="billing_section">
        <h1>Billing For vehicle</h1>
        <h3>Vehicle Number: {vehicleData.vehicleNumber} </h3>
        <p>Entry Time: {vehicleData.entryTime} </p>
        <p>Parking Fee: {vehicleData.vehicleType} Rupees </p>

        <h4>Scan To Pay</h4>

        <div>
          <QRCode className="qr" value={paymateURL} size={200} /> <br />
          <div className="buttons">
            <button
              className="button"
              style={{ background: "green" }}
              onClick={handleStoreData}
              disabled={isPaid} // 
            >
              {isPaid ? "Payment Completed" : "Payment Done"}
            </button>

            <button
              className="button"
              style={{ background: "black", color: "white" }}
              onClick={() => navigate("/admin_dashbord")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
