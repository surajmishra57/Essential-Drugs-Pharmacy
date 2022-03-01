import s4 from "../../images/s4.PNG";
import MedForm from "./MedForm";
const BuyMedicin = () => {
  return (
    <div>
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-sm-12">
            <img src={s4} alt="" srcset="" />
          </div>
        </div>
        <br />
        <div className="row">
          <MedForm />
        </div>
      </div>
    </div>
  );
};
export default BuyMedicin;
