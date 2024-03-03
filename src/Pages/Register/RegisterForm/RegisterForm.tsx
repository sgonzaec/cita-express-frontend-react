import { useEffect, useState } from "react";
import { PassworVerify } from "../../../Helpers/Password.verify";
import { RegisterVerify } from "../../../Typings/Register";

const RegisterForm = ({ register, handleSubmit, errors, onSubmit }: any) => {
  const [originalPassword, setOriginalPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationPassword, setValidationPassword] = useState(true)

  useEffect(() => {
    const passwords: RegisterVerify = [originalPassword, confirmPassword];
    
    const responseVerify: boolean | undefined = PassworVerify(passwords)
    setValidationPassword(responseVerify ? responseVerify : false)
  }, [originalPassword, confirmPassword])
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <label htmlFor="user">Ingresa tu correo electronico</label>
        <input
          placeholder="Ingresa tu correo electronico"
          type="email"
          className={errors.user && "input-error"}
          {...register("user", { required: true })}
        />
        {errors.user && (
          <span className="input-error-text">verifica tu usuario</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="password">Ingresa tu contraseña</label>
        <input
          placeholder="Ingresa tu contraseña"
          type="password"
          onBlurCapture={(event) => setOriginalPassword(event.target.value)}
          className={errors.password && errors.repassword && "input-error"}
          {...register("password", { required: true })}
        />
        {errors.password && errors.repassword && (
          <span className="input-error-text">verifica tu contraseña</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="repassword">Repite tu contraseña</label>
        <input
          placeholder="Repite tu contraseña"
          type="password"
          onBlurCapture={(event) => setConfirmPassword(event.target.value)}
          className={errors.repassword && "input-error"}
          {...register("repassword", { required: true })}
        />
      </div>

      <input type="submit" value="Registarse" className={validationPassword ? '' : 'disabled-buttom'} />
    </form>
  );
};

export default RegisterForm;
