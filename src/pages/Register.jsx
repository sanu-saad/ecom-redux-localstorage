import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(input.name && input.email && input.password)) {
      alert("All fields are required");
    } else {
      localStorage.setItem("user", JSON.stringify(input));
      // console.log('register')
      navigate("/");
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />

        <button>Register</button>
      </form>
      already register ?<NavLink to="/">login</NavLink>
    </div>
  );
};

export default Register;
