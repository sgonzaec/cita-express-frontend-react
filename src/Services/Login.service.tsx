import { useState } from "react";
import { LoginPayload, LoginResponse } from "../Typings/Login";
import { citaExpressClient } from "../Clients";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from 'react-hot-toast';

interface LoginServiceResult {
  loading: boolean;
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
  response: any;
}

export const LoginService = (): LoginServiceResult => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<LoginResponse | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const tryLogin = async (data: LoginPayload) => {
    try {
      setLoading(true);

      const response = await citaExpressClient.login(data);

      toast.success(`Se inicio sesion correctamente`);
      setResponse(response);
    } catch (error) {
      toast.error(`Error al intentar iniciar sesión`);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<LoginPayload> = (data: LoginPayload) =>
    tryLogin(data);

  return { loading, register, handleSubmit, errors, onSubmit, response };
};
