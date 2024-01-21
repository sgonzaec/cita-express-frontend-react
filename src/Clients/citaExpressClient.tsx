import environments from "../Environments/environments";
import { LoginPayload } from "../Typings/Login";

const citaExpressClient = {
  login: async (body: LoginPayload) => {
    return await fetch(`${environments.baseURL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
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
};

export default citaExpressClient;
