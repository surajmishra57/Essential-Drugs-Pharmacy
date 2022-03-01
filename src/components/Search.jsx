import { Modal, Button } from "react-bootstrap";
const Search = (props) => {
  return (
    <>
      <Modal
        {...props}
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title} Not Found</Modal.Title>
        </Modal.Header>
        <Modal.Body>Currently Not Working We Will Fix Soon.Sorry</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Search;
