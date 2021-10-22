import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  let history = useHistory()
  const getUsername = (event) => {
    setUsername(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Username!",
      });
      return;
    }
    if (password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Password!",
      });
      return;
    }
    if(username=='admin' && password=='User@123')
    {
      Swal.fire(
        'Welcome admin',
        'login Successful',
        'success'
      )
     window.location.pathname = "/kitchen"
      localStorage.setItem("isAuthenticated", "true");
    
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check Your Credentials",
      });
      return;
    }
  };
  console.log("username", username);
  console.log("password", password);
  return (
    <main>
      <h1 className="heading">Welcome to Ola Gate Kitchen </h1>
      <form className="input-container" onSubmit={handleSubmit}>
        <h1 className="login-heading">LOGIN</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={getUsername}
        />
        <div style={{ position: "relative" }}>
          <input
            placeholder="Password"
            value={password}
            onChange={getPassword}
            type={isPasswordVisible ? "text" : "password"}
          />
          <span
            className="eye-icon"
            onClick={() => setisPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <i className="fas fa-eye "></i>
            ) : (
              <i className="fas fa-eye-slash "></i>
            )}
          </span>
        </div>
        <button className="button" type="submit" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
    </main>
  );
}
