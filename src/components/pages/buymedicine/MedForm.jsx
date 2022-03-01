import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import MyVerticallyCenteredModal from "./MyVerticallyCentereModal";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MedForm = () => {
  const uname = useSelector((state) => state.uname.username);
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [prescription, setPrescription] = useState("");
  const heandelSubmit = (e) => {
    if (uname === "user") {
      navigate("/login");
    } else {
      setModalShow(true);
      e.preventDefault();
    }
  };
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">PHARMACY</div>
        <div className="card-body">
          <h5 className="card-title">Upload Prescription</h5>
          <p className="card-text">
            Medicines are only available on prescription.
          </p>
          <form
            onSubmit={(e) => {
              heandelSubmit(e);
            }}
          >
            <div>
              <label for="formFileLg" className="form-label">
                Large file input in 'pdf-format'
              </label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
                required="required"
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-success">
              <FiUpload size={20} />
              Upload Prescription
            </button>
          </form>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            prescription={prescription}
          />
        </div>
        <div className="card-footer text-muted">ESSENTIAL DRUGS PHARMACY</div>
      </div>
    </div>
  );
};
export default MedForm;
