import React, { useState } from "react";

const Seats = () => {
  const [formData, setFormData] = useState({
    seat_id: "",
    flight_id: "",
    seat_number: "",
    class: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seat Data Submitted:", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(90deg, #f7f7f7, #e9f7f9)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Seat Details</h3>
        {["seat_id", "flight_id", "seat_number", "class"].map((field) => (
          <div key={field} style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>{field.replace("_", " ").toUpperCase()}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
        ))}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Availability:</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <option value="" disabled>
              Select Availability
            </option>
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Seats;
