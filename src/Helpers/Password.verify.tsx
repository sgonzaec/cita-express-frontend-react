import { RegisterVerify } from "../Typings/Register";

export const PassworVerify = (passwords: RegisterVerify) => {
  if (passwords.every((password) => password === "")) return false;

  if (passwords[0] === passwords[1]) {
    return true;
  } else {
    return false;
  }
};
