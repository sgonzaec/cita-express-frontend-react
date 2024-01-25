import "./Error.scss";
import { Link } from "react-router-dom";
import InfoTemplate from "../../Templates/Info.template";

const Error = () => {
  return (
    <InfoTemplate>
      <article id="error-page">
        <h1>404</h1>
        <h2 className="login_title">Ops!! Este link no exite.</h2>
        <Link to={"/"}>
          <button>Volver al inicio</button>
        </Link>
      </article>
    </InfoTemplate>
  );
};

export default Error;
