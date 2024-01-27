import { useState } from "react";
import { LoginPayload } from "../Typings/Login";
import { citaExpressClient } from "../Clients";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

interface LoginServiceResult {
  loading: boolean;
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
}

export const LoginService = (): LoginServiceResult => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const tryLogin = async (data: LoginPayload) => {
    try {
      setLoading(true);

      const response = await citaExpressClient.login(data);
      
      if (response.ok) navigate("/");

    } catch (error) {
      toast.error(`Error al intentar iniciar sesión`);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<LoginPayload> = (data: LoginPayload) =>
    tryLogin(data);

  return { loading, register, handleSubmit, errors, onSubmit };
};
