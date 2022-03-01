import { NavLink } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { unsetname } from "./loginSlice";
const Lo = () => {
  const dispatch = useDispatch();
  const uname = useSelector((state) => state.uname.username);
  return (
    <>
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="/"
          style={{ marginRight: "0px" }}
          exact
        >
          <b>Hello {uname}</b>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="/login"
          style={{ marginRight: "0px" }}
          exact
          onClick={() => {
            dispatch(unsetname());
          }}
        >
          <BiLogOutCircle
            size={20}
            onClick={() => {
              dispatch(unsetname());
            }}
          />
          Logout
        </NavLink>
      </li>
    </>
  );
};
export default Lo;
