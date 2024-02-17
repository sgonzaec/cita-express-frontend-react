import { useEffect, useState } from "react";
import { citaExpressClient } from "../Clients";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { ClientResponse } from "../Typings/Client";

interface ProfileServiceResult {
  loading: boolean;
  response: ClientResponse;
  isOpenModal: any;
  openModal: any;
  onSubmit: any;
  handleSubmit: any;
  register: any;
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
  const [openModal, isOpenModal] = useState(false);
  const [userEmail, ] = useState(localStorage.getItem('userEmail') ? localStorage.getItem('userEmail') : null);
  const [response, setResponse] = useState<ClientResponse>(defaultData);

  const {
    register,
    handleSubmit,
  } = useForm<any>();

  const auth = useAuth();

  useEffect(() => {
    if (userEmail && userEmail !== response.client.email) {
      getDataUser(userEmail);
    } else if (!userEmail) {
      auth.logout();
    }
    // eslint-disable-next-line
  }, [auth, userEmail]);

  const getDataUser = async (data: string) => {
    try {
      setLoading(true);
      const response: ClientResponse = await citaExpressClient.getUserData(data);
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

  const onSubmit: SubmitHandler<any> = (data: any) => {
    citaExpressClient.updateClient(data)
    isOpenModal(false)
  }

  return { loading, response, isOpenModal, openModal, onSubmit, handleSubmit, register };
};
