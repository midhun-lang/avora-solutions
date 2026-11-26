
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Projects", "/projects"],
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="brand">
        <span className="brand-mark">A</span>
        <span>AVORA<span className="brand-light">.</span></span>
      </Link>

      <nav className="nav-links">
        {links.map(([name, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact" className="nav-contact desktop-contact">
        Let's Talk <ArrowUpRight size={17} />
      </Link>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
              >
                {name}
              </NavLink>
            ))}

            <Link to="/contact" className="primary-btn">
              Let's Talk <ArrowUpRight size={17} />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
