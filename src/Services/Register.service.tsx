import { useState } from "react";
import { citaExpressClient } from "../Clients";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterPayload } from "../Typings/Register";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface RegisterServiceResult {
  loading: boolean;
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
}

export const RegisterService = (): RegisterServiceResult => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>();

  const tryLogin = async (data: RegisterPayload) => {
    try {
      setLoading(true);
      const body: RegisterPayload = {
        user: data.user,
        password: data.password,
        user_type: (data.user_type)
      }
      
      const response = await citaExpressClient.RegisterUser(body);

      if (response.ok) navigate("/")
    } catch (error) {
      toast.error(`Error al registrarse`);
      console.error("Error al registrarse:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<RegisterPayload> = (data: RegisterPayload) =>
    tryLogin(data);

  return { loading, register, handleSubmit, errors, onSubmit };
};
