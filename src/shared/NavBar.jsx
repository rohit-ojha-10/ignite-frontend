import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import "./navbar.css";
import { Avatar } from "@material-tailwind/react";
import { SiFireship } from "react-icons/si";
import { NavLink } from "react-router-dom"
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="nav">
      {/* <div>
        <img src={'../assets/images/ignitelogo-png.png'} />
      </div> */}
      <div className="logo">
        <div style={{ display: "inline-block" }}>
          <SiFireship color="black" />
        </div>
        <span style={{ color: "#0443f2" }}>PROJECT IGNITE</span>
      </div>

      <div className="button">
        {isLoggedIn ? (
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
        ) : (
          <NavLink to={'/login'}>
          <Button className="button1" onClick={handleLogin}>
            Log In
          </Button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
