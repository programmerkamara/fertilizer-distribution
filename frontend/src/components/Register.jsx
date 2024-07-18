import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    usertype: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    password1: "",
    password2: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/register/", formData);
      console.log("Registration successful:", response.data);
      setMessage(response.data?.message || "User created successfully");
      // Optionally, you can redirect the user after successful registration
      // Example: navigate('/login');
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      setMessage(error.response?.data?.error || "An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
        </div>
        <div>
          <label>Staff Type:</label>
          <select name="staff_type" value={formData.staff_type} onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Admin">Admin</option>
            <option value="Director">Director</option>
            <option value="FarmerRegistrationOfficer">Farmer Registration Officer</option>
            <option value="StoreKeeper">Store Keeper</option>
          </select>
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password1" value={formData.password1} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="password2" value={formData.password2} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
