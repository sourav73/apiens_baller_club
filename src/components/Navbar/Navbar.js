import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const navItems = [
    { title: "About", target: "about" },
    { title: "Features", target: "features" },
    { title: "Roadmap", target: "roadmap" },
    { title: "Artists", target: "artists" },
    { title: "FAQ", target: "faq" },
  ];

  return (
    <div className="main-header">
      <header className={`${styles.header}`}>
        <nav className="d-flex justify-content-between align-items-center h-100">
          <div className={`${styles.navBrand} text-center`}>
            <Link offset={-100} to="intro" className={styles.navLink}>
              APIENS BALLER
              <br />
              CLUB
            </Link>
          </div>
          <div className={styles.mainNav}>
            <ul className="d-flex ps-0 mb-0">
              {navItems.map((item, index) => (
                <li key={index} className="me-4">
                  <Link
                    offset={-100}
                    to={item.target}
                    className={styles.navLink}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${styles.socials} d-flex align-items-center d-none d-sm-block`}
          >
            <a href="discord.gg" className="me-3">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="twitter.com" className="me-3">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="instagram.com" className="me-3">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#nolink" className="me-3 cbtn-sm">
              APIENS
            </a>
          </div>
          <div className={styles.navToggle}>
            <i className="fa-solid fa-2x fa-bars" onClick={handleNavToggle}></i>
          </div>
        </nav>
      </header>
      {/* Navbar for smaller screens */}
      <div className={`${styles.mobileNav} ${isOpen ? "show" : ""}`}>
        <div className={styles.navClose}>
          <i className="fa-solid fa-2x fa-x" onClick={closeNav}></i>
        </div>
        <nav className="cpt-16 cpe-40 cpb-40 cps-40">
          <ul className="ps-0 mb-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  offset={-100}
                  to={item.target}
                  className={styles.navLink}
                  onClick={closeNav}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`${styles.socials} d-flex align-items-center`}>
          <a href="discord.gg" className="me-3">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="twitter.com" className="me-3">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="instagram.com" className="me-3">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#nolink" className="cbtn-sm">
            APIENS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
