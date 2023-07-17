import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserForm.css";

const UserForm = ({ typeForm }) => {
  return (
    <div className="conteiner-user-form">
      <form className="user-form">
        <h3>{typeForm}</h3>
        <input type="text" name="" id="" placeholder="User/Email" />
        <input type="text" name="" id="" placeholder="Password" />
        <input type="button" value={typeForm} />
        {typeForm.match(/login/i) && <Link>Register</Link>}
        <h3>Login with</h3>
        <img src="logoML.svg" className="user-form__img" alt="" />
      </form>
    </div>
  );
};

UserForm.propTypes = {
  typeForm: PropTypes.string,
};

export default UserForm;
