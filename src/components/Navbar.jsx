import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { GiMedicalDrip, GiMedicines } from "react-icons/gi";
import { FaMicroscope } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useSelector } from "react-redux";
import L from "./pages/base/L";
import Lo from "./pages/base/Lo";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const [search, setSearch] = useState("");
  const uname = useSelector((state) => state.uname.username);
  const heandelSubmit = (e) => {
    handleShow();
    e.preventDefault();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            to="/"
            className="navbar-brand"
            style={{ color: "red", fontWeight: "bold" }}
            exact
          >
            Essential Drugs Pharmacy
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/buyMedicin"
                  exact
                >
                  <GiMedicines size={20} />
                  Buy Medicines
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/buyProduct"
                  exact
                >
                  <MdProductionQuantityLimits size={20} />
                  Buy Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/labTest"
                  exact
                >
                  <FaMicroscope size={20} />
                  Lab Tests
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/findDoner"
                  style={{ marginRight: "10px" }}
                  exact
                >
                  <GiMedicalDrip size={20} />
                  Find Blood Donner
                </NavLink>
              </li>
              {uname !== "user" ? <Lo /> : <L />}
            </ul>
            <form
              className="d-flex"
              onSubmit={(e) => {
                heandelSubmit(e);
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Search show={show} onHide={() => setShow(false)} title={search} />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
