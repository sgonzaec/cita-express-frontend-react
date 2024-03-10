import toast from "react-hot-toast";
import environments from "../Environments/environments";

const citaExpressLocation = {
  getCountries: async () => {
    try {
      return await fetch(`${environments.baseURL}/countries`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`Información de paises obtenida correctamente`);
          return res.json();
        } else {
          toast.error(`Error intentando obetener la información de los paises`);
          return "Error intentando obetener la información de los paises.";
        }
      });
    } catch (error) {
      throw new Error();
    }
  },

  getStates: async (id: number) => {
    try {
      return await fetch(`${environments.baseURL}/countries/${id}/states`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`Información de Departamento/Provincia obtenida correctamente.`);
          return res.json();
        } else {
          toast.error(`Error obteniendo la información del Departamento/Provincia`);
          return "Error obteniendo la información del Departamento/Provincia.";
        }
      });
    } catch (error) {
      throw new Error();
    }
  },

};

export default citaExpressLocation;
