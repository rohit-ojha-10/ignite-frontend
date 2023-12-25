import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripfire } from "@fortawesome/free-brands-svg-icons"; // Import the specific icon
import { Avatar } from "@material-tailwind/react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="nav">
      <div className="logo">
        PROJECT <span style={{ color: "#0443f2" }}>IGNITE</span>
        <FontAwesomeIcon icon={faGripfire} style={{ color: "#0443f2" }} />
      </div>

      <div className="button">
        {isLoggedIn ? (
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
        ) : (
          <Button className="button1" onClick={handleLogin}>
            Log In
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
