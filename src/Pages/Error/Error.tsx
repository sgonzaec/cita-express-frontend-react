import "./Error.scss";
import Background from "../../Components/Background/Background";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Background />
      <article id="error-page">
        <h1>404</h1>
        <h2 className="login_title">Ops!! Este link no exite.</h2>
        <Link to={"/"}>
          <button>Volver al inicio</button>
        </Link>
      </article>
    </>
  );
};

export default Error;
