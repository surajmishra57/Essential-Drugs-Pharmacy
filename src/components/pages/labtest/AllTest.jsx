import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AllTest = (props) => {
  const uname = useSelector((state) => state.uname.username);
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const buttonClicked = (e) => {
    if (uname === "user") {
      navigate("/login");
    } else {
      setModalShow(true);
      e.preventDefault();
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br />
            <div
              className="card w-75"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text">{props.available}</p>
                <h5 className="card-title">
                  {props.price}
                  <small>onwards</small>
                </h5>

                <Button variant="success" onClick={(e) => buttonClicked(e)}>
                  Book Test
                </Button>
                {/* <Button variant="danger" onClick={(e) => buttonClicked(e)}>
                  Cancel Test
                </Button> */}
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  testname={props.title}
                  testid={props.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllTest;
