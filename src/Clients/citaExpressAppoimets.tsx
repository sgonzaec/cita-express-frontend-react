import toast from "react-hot-toast";
import environments from "../Environments/environments";

const citaExpressAppoiments = {
  getAllApoimetns: async (isLoading: any) => {
    isLoading(true);
    try {
      return await fetch(`${environments.baseURL}/api/appoiments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`Citas obtenidas correctamente`);
          isLoading(false);
          return res.json();
        } else {
          toast.error(`Error intentando obetener la información de las citas`);
          isLoading(false);
          return "Error intentando obetener la información de las citas.";
        }
      });
    } catch (error) {
      isLoading(false);
      throw new Error();
    }
  },
};

export default citaExpressAppoiments;
