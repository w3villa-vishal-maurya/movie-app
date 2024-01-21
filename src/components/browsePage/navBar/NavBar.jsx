import React, {useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import * as ROUTES from "../../../constants/routes";
import SearchForm from "../../Forms/SearchForm";
import "./navBar.scss";

function NavBar({ searchTerm, setSearchTerm }) {
  const [show, handleShow] = useState(false);
  const isTabletDesktopResolution = false;

  const transitionNavBar = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    //clean-up code, not always needed
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`nav ${show && "navBlack"}`}>
        <Container fluid className="py-0 px-3 navBar">
          <Navbar.Brand className="netflixLogo" to={ROUTES.HOME}>
            {isTabletDesktopResolution ? (
              <img
                className="navLogo"
                src="/images/misc/netflix_desktop_logo.png"
                alt="Netflix logo"
              />
            ) : (
              <img
                className="navMobileLogo"
                src="/images/misc/netflix_2015_n_logo.png"
                alt="Netflix Mobile logo"
              />
            )}
          </Navbar.Brand>
          <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
