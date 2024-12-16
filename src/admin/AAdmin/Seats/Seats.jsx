import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApiService from "src/services/useApiService";
import Notification from "src/hooks/Notification";

const initialState = {
  SEAT_ID: "",
  FLIGHT_ID: "",
  SEAT_NUMBER: "",
  CLASS: "",
  Availability: "",
};

const Seats = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = id ? parseInt(id, 10) : null;

  const [formData, setFormData] = useState(initialState);
  const [notificationMessage, setNotificationMessage] = useState("");

  const route = { seats: "/seats" };
  const {
    data: seatsData,
    fetchData: fetchSeatsData,
    createData: createSeatsData,
    updateData: updateSeatsData,
  } = useApiService();

  // Fetch data if editing
  useEffect(() => {
    if (numericId) {
      fetchSeatsData(`${route.seats}/${numericId}`).then((res) => {
        setFormData(res || initialState);
      });
    }
  }, [numericId, fetchSeatsData, route.seats]);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (numericId) {
        await updateSeatsData(`${route.seats}/${numericId}`, formData);
        setNotificationMessage("Seat updated successfully!");
      } else {
        await createSeatsData(route.seats, formData);
        setNotificationMessage("Seat created successfully!");
        setFormData(initialState);
      }
    } catch (err) {
      setNotificationMessage("Error saving seat data.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Seat Details
        </h3>

        {["SEAT_ID", "FLIGHT_ID", "SEAT_NUMBER", "CLASS"].map((field) => (
          <div key={field} style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              {field.replace("_", " ")}:
            </label>
            <input
              type="text"
              name={field}
              value={formData[field] || ""}
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

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Availability:
          </label>
          <select
            name="Availability"
            value={formData.Availability || ""}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <option value="">Select Availability</option>
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        {notificationMessage && (
          <p style={{ textAlign: "center", color: "green", marginTop: "10px" }}>
            {notificationMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Seats;
