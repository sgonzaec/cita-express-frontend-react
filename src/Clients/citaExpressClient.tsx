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
        return res.json();
      } else {
        return "Error intentando iniciar sesion.";
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
          return res.json();
        } else {
          return "Error intentando registrar el usuario.";
        }
      });
    } catch (error) {
      throw new Error()
    }
  },
};

export default citaExpressClient;
