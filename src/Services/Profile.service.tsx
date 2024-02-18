import { useEffect, useState } from "react";
import { citaExpressClient } from "../Clients";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { ClientResponse } from "../Typings/Client";

interface ProfileServiceResult {
  loading: boolean;
  response: ClientResponse;
  isOpenModalData: any;
  openModalData: boolean;
  openModalImage: boolean;
  isOpenModalImage: any;
  onSubmit: any;
  handleSubmit: any;
  register: any;
  onSubmitImage: any;
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
  const [openModalImage, isOpenModalImage] = useState(false);
  const [openModalData, isOpenModalData] = useState(false);
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
    isOpenModalData(false)
  }

  const onSubmitImage = async (data: any) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('user', "test@test.com");

    fetch("http://127.0.0.1:5000/api/clients/updateImage", {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    })
      .then((r) => r.json())
      .then((e) => console.log(e));
  };

  return { loading, response, openModalData, isOpenModalData, openModalImage, isOpenModalImage, onSubmit, handleSubmit, register, onSubmitImage };
};
