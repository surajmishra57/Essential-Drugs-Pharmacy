import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Carousel from "./carousel";
import k1 from "../../images/k1.PNG";
import k2 from "../../images/k2.PNG";
import k3 from "../../images/k3.PNG";
const Home = () => {
  return (
    <div>
      <Carousel />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/buyMedicin"
              activeStyle={{ fontWeight: "bold", color: "red" }}
              exact
            >
              <img src={k1} alt="" srcset="" className="pl-0" />
            </NavLink>
          </div>
          <div className="col-sm-4">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/buyProduct"
              activeStyle={{ fontWeight: "bold", color: "red" }}
              exact
            >
              <img src={k2} alt="" srcset="" />
            </NavLink>
          </div>
          <div className="col-sm-4">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/labTest"
              activeStyle={{ fontWeight: "bold", color: "red" }}
              exact
            >
              <img src={k3} alt="" srcset="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
