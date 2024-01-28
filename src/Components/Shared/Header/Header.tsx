import { Link } from "react-router-dom";
import Logo from "../../../Logo.svg";
import "./Header.scss";
import { useAuth } from "../../../Context/AuthContext";

const Header = () => {
  const auth = useAuth();

  return (
    <header>
      <div className="firstGroup">
        <span className="material-symbols-outlined">menu</span>
        <Link to={'/'}><img src={Logo} alt="Cita Express Logo" /></Link>
      </div>
      <div className="buttons">
        <ul>
          <li>
            <Link to={"/profile"}>
              <span className="material-symbols-outlined">person</span>Perfil
            </Link>
          </li>
          <li onClick={auth.logout}>
            <span className="material-symbols-outlined">exit_to_app</span>Salir
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
