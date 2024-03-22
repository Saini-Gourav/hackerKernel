import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      localStorage.setItem("token", data.token);

      if (data.token) {
        navigate("/products");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5"
      style={{ background: "#ECE8EA", height: "80vh", borderRadius: "25px" }}
    >
      <div
        style={{
          height: "70%",
          width: "500px",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
          background: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>Login</h2>

        <Form
          onSubmit={handleFormSubmit}
          style={{ margin: "auto", width: "50%" }}
        >
          <Form.Group>
            <Form.Label style={{ fontSize: "18px" }}>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ fontSize: "18px", marginTop: "20px" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "20px", width: "100%" }}
          >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
