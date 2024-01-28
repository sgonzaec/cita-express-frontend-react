import "./Login.scss";
import { LoginService } from "../../Services/Login.service";
import Loading from "../../Components/Loading/Loading";
import InfoTemplate from "../../Templates/Info.template";
import { Link } from "react-router-dom";

const Login = () => {
  const { loading, register, handleSubmit, errors, onSubmit } = LoginService();

  return (
    <InfoTemplate>
      {loading ? (
        <Loading />
      ) : (
        <article className="login-container">
          <div className="card">
            <h2 className="login_title">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-container">
                <label htmlFor="user"></label>
                <input
                  placeholder="Ingresa tu usuario"
                  type="text"
                  className={errors.user && "input-error"}
                  {...register("user", { required: true })}
                />
                {errors.user && (
                  <span className="input-error-text">verifica tu usuario</span>
                )}
              </div>

              <div className="input-container">
                <label htmlFor="password"></label>
                <input
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  className={errors.password && "input-error"}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="input-error-text">
                    verifica tu contraseña
                  </span>
                )}
              </div>

              <input type="submit" value="Iniciar Sesion" />
            </form>
            <span className="general-text">
              ¿No tienes cuenta? <Link to={"/register"}>Registrate aqui</Link>
            </span>
          </div>
        </article>
      )}
    </InfoTemplate>
  );
};

export default Login;
