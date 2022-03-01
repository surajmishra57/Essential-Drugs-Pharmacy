import { NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

const L = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="/login"
          exact
        >
          <BiLogInCircle size={20} />
          Login
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="/signup"
          exact
        >
          <AiOutlineUserAdd size={20} />
          SignUp
        </NavLink>
      </li>
    </>
  );
};
export default L;
