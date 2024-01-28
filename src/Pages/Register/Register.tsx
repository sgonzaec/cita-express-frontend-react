import Loading from "../../Components/Loading/Loading";
import "./Register.scss";
import { RegisterService } from "../../Services/Register.service";
import RegisterForm from "./RegisterForm/RegisterForm";
import InfoTemplate from "../../Templates/Info.template";
import { Link } from "react-router-dom";

const Register = () => {
  const { loading, register, handleSubmit, errors, onSubmit } =
    RegisterService();

  return (
    <InfoTemplate>
      {loading ? (
        <Loading />
      ) : (
        <article className="register-container">
          <div className="card">
            <h2 className="register_title">Crear usuario</h2>
            <RegisterForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmit={onSubmit}
            />
            <span className="general-text">
              ¿Ya tienes cuenta? <Link to={"/"}>Inicia Sesión</Link>
            </span>
          </div>
        </article>
      )}
    </InfoTemplate>
  );
};

export default Register;
