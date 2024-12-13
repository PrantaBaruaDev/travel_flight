import React, { useEffect, useState } from "react";
import useApiService from 'src/services/useApiService';


const initialState = {
  airport_id: "",
  airport_code: "",
  name: "",
  city: "",
  country: "",
  facilities: "",
};

const Airports = (props) => {
  const [formData, setFormData] = useState(initialState);

  const route = "/airports";
  const { data, loading, setLoading, error, fetchData, createData, updateData } = useApiService();

  (props.page === 'Edit') && (initialState.id = 0);

  useEffect(() => {
    // Fetch data when the component loads
    fetchData(route);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const createdItem = await createData(route, formData);
      console.log("Created:", createdItem);
    } catch (err) {
      console.error("Error creating item:", err);
    }
    setFormData(initialState);
    setLoading(false);
    console.log("Form Data Submitted.");
    console.log("Stored data", data);
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

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

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
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Airport Details</h3>
        {["airport_id", "airport_code", "name", "city", "country"].map((field) => (
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
          <label style={{ display: "block", marginBottom: "5px" }}>Facilities:</label>
          <textarea
            name="facilities"
            value={formData.facilities}
            onChange={handleChange}
            rows="3"
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              resize: "none",
            }}
          ></textarea>
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

export default Airports;
