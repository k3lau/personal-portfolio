import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../theme/GlobalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { Link } from 'react-scroll';
/*
<NavItem>
<Link to="Home" spy={true} smooth={true} duration={1000}>Home</Link>
</NavItem>
<NavItem>
<Link to="Projects" spy={true} smooth={true} duration={1000}>Projects</Link>
</NavItem>
<NavItem>
<Link to="Footer" spy={true} smooth={true} duration={1000}>Contact</Link>
</NavItem>
</NavMenu>
*/
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <Nav>
      <NavMenu onClick={handleClick} click={click}>
        <Link onClick={handleClick} to="Home" spy={true} smooth={true} duration={1000}><NavItem>Home</NavItem></Link>
        <Link onClick={handleClick} to="Projects" spy={true} smooth={true} duration={1000}><NavItem>Projects</NavItem></Link>
        <Link onClick={handleClick} to="Footer" spy={true} smooth={true} duration={1000}><NavItem>Contact</NavItem></Link>
      </NavMenu>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
    </Nav>
  );
};

export default Navbar;
