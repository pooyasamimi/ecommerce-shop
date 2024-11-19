import React from "react";
import Input from "./Input";
import InputPassword from "./InputPassword";
import Submit from "./Submit";

export default function FormikControl(props) {
  switch (props.control) {
    case "input":
      return <Input {...props} />;

    case "inputPassword":
      return <InputPassword {...props} />;

    case "submit":
      return <Submit {...props} />;

    default:
      break;
  }
}
