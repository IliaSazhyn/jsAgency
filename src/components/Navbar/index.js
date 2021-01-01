import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.apiKey) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              js.Agency
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth="linear"
                  duration={500}
                  exact="true"
                  offset={-80}
                  spy="true"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="extensions"
                  smooth="linear"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Extensions
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="marketing"
                  smooth="linear"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Marketing
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="values"
                  smooth="linear"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Values
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth="linear"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth="linear"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="signin"
                smooth="linear"
                duration={500}
                spy="true"
                exact="true"
                offset={-80}
              >
                {!isLogged ? "Sign In" : "Logout"}
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
