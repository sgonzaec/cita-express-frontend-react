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

  getUserData:async (email:string) => {
    try {
      return await fetch(`${environments.baseURL}/api/clients?user=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`Información obtenida correctamente`);
          return res.json();
        } else {
          toast.error(`Error intentando obetener la información del perfil`);
          return "Error intentando obetener la información del perfil.";
        }
      });
    } catch (error) {
      throw new Error()
    }
  },

  updateClient: async (body: any) => {
    try {
      return await fetch(`${environments.baseURL}/api/clients/updateUserData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`Se actualizó la información correctamente.`);
          return res.json();
        } else {
          toast.error(`Error actualizando la información`);
          return "Error actualizando la información.";
        }
      });
    } catch (error) {
      throw new Error()
    }
  }
};

export default citaExpressClient;
