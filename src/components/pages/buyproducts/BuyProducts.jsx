import { Card, Button } from "react-bootstrap";
import e from "../../images/e1.PNG";
import e1 from "../../images/e2.PNG";
import e2 from "../../images/e3.PNG";
import e3 from "../../images/e4.PNG";
const BuyProduct = () => {
  return (
    <>
      <br />
      <br />
      <div className="row">
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e} />
            <Card.Body>
              <Card.Title>Covid Essentials</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Add To Cart</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e1} />
            <Card.Body>
              <Card.Title>Mother and Baby</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Add To Cart</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e2} />
            <Card.Body>
              <Card.Title>Diabetic Care</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Add To Cart</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e3} />
            <Card.Body>
              <Card.Title>Sikn Care</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Add To Cart</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default BuyProduct;
