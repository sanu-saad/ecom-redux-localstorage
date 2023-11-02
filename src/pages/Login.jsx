import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const hadleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/product");
    } else {
      alert("wrong email or password");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={hadleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
      Dont have register? <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Login;
