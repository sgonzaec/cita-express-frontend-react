import { useMemo, useState } from "react";
import { citaExpressClient } from "../Clients";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";
import { ClientResponse } from "../Typings/Client";

interface ProfileServiceResult {
  loading: boolean;
  response: ClientResponse;
}

const defaultData: ClientResponse = {
  client: {
    adress: "",
    city: "",
    country: "",
    cp: "",
    email: "",
    id_client: 0,
    image: "",
    lastname: "",
    name: "",
    phone: "",
  },
};

export const ProfileService = (): ProfileServiceResult => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ClientResponse>(defaultData);

  const auth = useAuth();

  const getDataUser = async (data: string) => {
    try {
      setLoading(true);

      const response: ClientResponse = await citaExpressClient.getUserData(
        data
      );
      setResponse(response);
    } catch (error) {
      toast.error(`Error intentando obetener la información del perfil`);
      console.error(
        "Error intentando obetener la información del perfil:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useMemo(() => {
    getDataUser(auth.userEmail);
  }, [auth.userEmail]);

  return { loading, response };
};
