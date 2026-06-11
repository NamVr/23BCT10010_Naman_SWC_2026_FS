import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const passwordValid =
    formData.password.length >= 8 &&
    /\d/.test(formData.password);

  const isFormInvalid = !(emailValid && passwordValid);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormInvalid) {
      alert("Login Successful!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <br />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
            }}
          />

          {formData.email && !emailValid && (
            <p style={{ color: "red", margin: "5px 0" }}>
              Enter a valid email address.
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <br />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
            }}
          />

          {formData.password && !passwordValid && (
            <p style={{ color: "red", margin: "5px 0" }}>
              Password must be at least 8 characters and contain a number.
            </p>
          )}
        </div>

        <button disabled={isFormInvalid}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;