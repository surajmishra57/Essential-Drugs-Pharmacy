import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setfiratname,
  setlastname,
  setemail,
  setpassword,
  setphone,
  setaddress,
  setpin,
} from "./signupSlice";

import {
  MdAlternateEmail,
  MdPassword,
  MdGpsFixed,
  MdPersonPinCircle,
} from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const clearAll = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setPin("");
  };
  const handelSubmit = (e) => {
    // dispatch(setfiratname(firstname));
    // dispatch(setlastname(lastname));
    // dispatch(setemail(email));
    // dispatch(setpassword(password));
    // dispatch(setphone(phone));
    // dispatch(setaddress(address));
    // dispatch(setpin(pin));
    navigate("/login");
    e.preventDefault();
  };

  return (
    <div className="container">
      <br />
      <h2 align="center">
        <AiOutlineUserAdd size={40} />
        SignUp
      </h2>
      <br />
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form
            className="shadow p-3 mb-5 bg-white rounded"
            onSubmit={(e) => {
              handelSubmit(e);
            }}
          >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <AiOutlineUser size={20} />
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                aria-describedby="emailHelp"
                required="required"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <AiOutlineUser size={20} /> Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                aria-describedby="emailHelp"
                required="required"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <MdAlternateEmail size={20} /> Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                <MdPassword />
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <BsTelephone size={20} />
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                aria-describedby="emailHelp"
                required="required"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <MdGpsFixed size={20} />
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                aria-describedby="emailHelp"
                required="required"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <MdPersonPinCircle size={20} /> Pin Code
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                aria-describedby="emailHelp"
                required="required"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-danger"
              onClick={() => clearAll()}
            >
              Reset
            </button>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};
export default Signup;
