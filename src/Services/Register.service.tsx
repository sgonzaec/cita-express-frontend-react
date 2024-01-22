import { useState } from "react";
import { citaExpressClient } from "../Clients";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterPayload, RegisterResponse } from "../Typings/Register";

interface RegisterServiceResult {
  loading: boolean;
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
  response: any;
}

export const RegisterService = (): RegisterServiceResult => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<RegisterResponse | undefined>();

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

      setResponse(response);
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<RegisterPayload> = (data: RegisterPayload) =>
    tryLogin(data);

  return { loading, register, handleSubmit, errors, onSubmit, response };
};
