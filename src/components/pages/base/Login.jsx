import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { BiLogInCircle } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setname } from "./loginSlice";
const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const f_name = useSelector((state) => state.signup.firstname);
  const f_email = useSelector((state) => state.signup.email);
  const f_password = useSelector((state) => state.signup.password);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [s, setS] = useState(0);

  const handelSubmit = (e) => {
    if (f_email === email && password === f_password) {
      dispatch(setname(f_name));
      navigate("/");
    } else if (email === "suraj@gmail.com" && password === "suraj123") {
      dispatch(setname("suraj"));

      navigate("/");
    } else if (email === "ram@gmail.com" && password === "ram123") {
      dispatch(setname("ram"));

      navigate("/");
    } else if (email === "rohan@gmail.com" && password === "rohan123") {
      dispatch(setname("rohan"));

      navigate("/");
    } else if (email === "rani@gmail.com" && password === "rani123") {
      dispatch(setname("rani"));

      navigate("/");
    } else {
      setS(1);
      navigate("/login");
      e.preventDefault();
    }
  };
  return (
    <div className="container">
      <br />
      <h2 align="center">
        <BiLogInCircle size={40} />
        Login
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
                <MdAlternateEmail size={20} />
                Email address
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
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                <FaUserSecret size={20} /> Password
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
            {s === 1 ? (
              <div
                id="emailHelp"
                className="form-text"
                style={{ color: "red" }}
              >
                *invalid password or username
              </div>
            ) : (
              ""
            )}

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div>
              <a href="#">Forgot Password ? </a>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default Login;
