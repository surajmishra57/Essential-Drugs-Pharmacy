import { Button, Modal } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          successfully uploaded <FiCheckCircle size={30} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ color: "green" }}>Success</h4>
        <p>
          prescription <b>" {props.prescription} "</b> has been uploaded
          successfully. Our team will call you soon at your register phone
          number for confirmation .
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;
