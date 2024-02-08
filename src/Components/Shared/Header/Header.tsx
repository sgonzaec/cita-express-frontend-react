import { Link } from "react-router-dom";
import Logo from "../../../Logo.svg";
import "./Header.scss";
import { useAuth } from "../../../Context/AuthContext";
import { useState } from "react";
import Menu from "../../Menu/Menu";

const Header = () => {
  const [openMenu, isOpenMenu] = useState<boolean>(false)
  const auth = useAuth();

  return (
    <header>
      {openMenu && <Menu />}
      <div className="firstGroup">
        <span className="material-symbols-outlined" onClick={() => isOpenMenu(!openMenu)} >{openMenu ? "close" : "menu"}</span>
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
