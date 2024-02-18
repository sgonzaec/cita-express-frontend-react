import toast from "react-hot-toast";
import environments from "../Environments/environments";

const citaExpressClient = {
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
  },

  updateImage: async (body: any) => {
    try {
      return await fetch(`${environments.baseURL}/api/clients/updateImage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`Se actualizó la imagen correctamente.`);
          return res.json();
        } else {
          toast.error(`Error actualizando la imagen`);
          return "Error actualizando la imagen.";
        }
      });
    } catch (error) {
      throw new Error()
    }
  }
};

export default citaExpressClient;
