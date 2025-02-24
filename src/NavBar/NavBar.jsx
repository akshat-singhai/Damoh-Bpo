import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import NavLogo from "../assets/NavLogo.png";
import "./NavBar.css";
import { Link, Links } from "react-router-dom";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
        <div className="ham-menu">
            <button onClick={handleButtonToggle} className="ham-menu-button">
              <GiHamburgerMenu  />
            </button>
          </div>
          <div className="logo">
            <img src={NavLogo} alt="NavLogo" className="NavLogo" />
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              
               <Link to="/">Home</Link>
             
                <Link to="/About">About</Link>
                      
            </ul>
          </nav>

         
          <div className="whatsappLogoBox">
            <button className="whatsappLogo" ><h1><FaWhatsapp /> Join Us </h1>  </button>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;