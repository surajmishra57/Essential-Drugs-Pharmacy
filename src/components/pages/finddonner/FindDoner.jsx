import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import s7 from "../../images/s7.PNG";
import s8 from "../../images/s8.PNG";
import { NavLink } from "react-router-dom";
import { Table } from "react-bootstrap";
const FindDoner = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12"></div>
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="/labTest"
          activeStyle={{ fontWeight: "bold", color: "red" }}
          exact
        >
          <img src={s7} alt="" srcset="" className="pl-0" />
        </NavLink>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>City</th>
                <th>Name(Organisation,NGOs)</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delhi</td>
                <td>lifeOrganistion</td>
                <td>lifesaver@gmail.com</td>
                <td>9856472145</td>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>savelifeGroups</td>
                <td>savelife@gmail.com</td>
                <td>9863515478</td>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>youcare</td>
                <td>caresaver@gmail.com</td>
                <td>9857472145</td>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>givelifeGroups</td>
                <td>givelife@gmail.com</td>
                <td>9863545478</td>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>lifeAddGroups</td>
                <td>savelife@gmail.com</td>
                <td>9866315478</td>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>freengo</td>
                <td>ngoaver@gmail.com</td>
                <td>9857478445</td>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>HerosGroups</td>
                <td>hero@gmail.com</td>
                <td>9863545478</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default FindDoner;
