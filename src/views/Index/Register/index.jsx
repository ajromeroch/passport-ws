import React, { useState } from "react";

export default (props) => {
  const [form, formChange] = useState({
    username: "",
    password: "",
    validatePassword: "",
  });
  const [valid, areValid] = useState(true);
  const [validName, isValidName] = useState(true);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    formChange({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // submit
  };
  return (
    <div className="registerContainer">
      <form className="registerForm" onChange={onChange} onSubmit={onSubmit}>
        <div className="formTitle">REGISTER</div>
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
          className={valid ? "input" : "warningInput"}
        />
        <h3 className="formSubtitles">VALIDATE PASSWORD</h3>
        <input
          type="password"
          name="validatePassword"
          className={valid ? "input" : "warningInput"}
        />
        <div style={{ color: "red" }}>{message}</div>
        <button className="submitButton">SUBMIT</button>
      </form>
    </div>
  );
};
