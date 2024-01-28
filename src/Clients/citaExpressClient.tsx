import toast from "react-hot-toast";
import environments from "../Environments/environments";
import { LoginPayload } from "../Typings/Login";
import { RegisterPayload } from "../Typings/Register";

const citaExpressClient = {
  login: async (body: LoginPayload) => {
    return await fetch(`${environments.baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        toast.success(`Se inicio sesion correctamente`);
        return res.json();
      } else {
        toast.error(`Error intentando iniciar sesion`);
        return "Error intentando iniciar sesion";
      }
    });
  },

  RegisterUser: async (body: RegisterPayload) => {
    try {
      return await fetch(`${environments.baseURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`Registro Exitoso!!`);
          return res.json();
        } else {
          toast.error(`Error intentando registrar el usuario`);
          return "Error intentando registrar el usuario.";
        }
      });
    } catch (error) {
      throw new Error()
    }
  },
};

export default citaExpressClient;
