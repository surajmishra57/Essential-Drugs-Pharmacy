import s5 from "../../images/s5.PNG";
import s8 from "../../images/s8.PNG";
import AllTest from "./AllTest";

const LabTest = () => {
  const Test = [
    {
      id: "0",
      title: "Complete Blood Count (CBC)",
      available: "Available at 1 certified labs",
      price: "299/ ",
    },
    {
      id: "1",
      title: "Fasting Blood Sugar (FBS)",
      available: "Available at 1 certified labs",
      price: "199/ ",
    },
    {
      id: "2",
      title: "Post Prandial Blood Sugar (PPBS)",
      available: "Available at 1 certified labs",
      price: "199/ ",
    },
    {
      id: "3",
      title: "Covid-19 RTPCR (Coronavirus SARS-CoV2)",
      available: "Available at 1 certified labs",
      price: "700/ ",
    },
    {
      id: "4",
      title: "Creatinine",
      available: "Available at 1 certified labs",
      price: "199/ ",
    },
    {
      id: "5",
      title: "Urine Routine and Microscopy (Urine R/M)",
      available: "Available at 1 certified labs",
      price: "199/ ",
    },
    {
      id: "6",
      title: "Uric Acid",
      available: "Available at 1 certified labs",
      price: "149/ ",
    },
    {
      id: "7",
      title: "HbA1c (Glycosylated Hemoglobin)",
      available: "Available at 1 certified labs",
      price: "300/ ",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img
              src={s5}
              alt=""
              srcset=""
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <img
              src={s8}
              alt=""
              srcset=""
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </div>
      </div>
      {Test.map((e) => {
        return (
          <AllTest
            key={e.id}
            id={e.id}
            title={e.title}
            available={e.available}
            price={e.price}
          />
        );
      })}
    </>
  );
};
export default LabTest;
