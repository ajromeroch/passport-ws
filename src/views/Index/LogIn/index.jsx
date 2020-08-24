import React, { useState } from "react";
import { logIn } from "../../../store/actions";
import { useDispatch } from "react-redux";

export default (props) => {
  const dispatch = useDispatch();
  const [form, formChange] = useState({
    username: "",
    password: ""
  });
  const [validPass, isValidPass] = useState(true);
  const [validName, isValidName] = useState(true);
  const [message, setMessage] = useState("");
  const onChange = e => {
    formChange({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    form.password
      ? isValidPass(true)
      : (isValidPass(false), setMessage("Fill the blank"));
    form.username
      ? isValidName(true)
      : (isValidName(false), setMessage("Fill the blank"));
    form.username &&
      form.password &&
      (dispatch(logIn(form)).then(()=>props.history.push("/secret")).catch(() => {
        setMessage("Invalid username or password");
        isValidName(false);
        isValidPass(false);
      }),
      setMessage(""));
  };

  return (
    <div className="registerContainer">
      <form className="registerForm" onChange={onChange} onSubmit={onSubmit}>
        <div className="formTitle">LOG IN</div>
        <h3 className="formSubtitles">USERNAME</h3>
        <input
          type="text"
          name="username"
          className={validName ? "input" : "warningInput"}
        />
        <h3 className="formSubtitles">PASSWORD</h3>
        <input
          type="password"
          name="password"
          className={validPass ? "input" : "warningInput"}
        />
        <div style={{ color: "red" }}>{message}</div>
        <button className="submitButton">SUBMIT</button>
      </form>
    </div>
  );
};
