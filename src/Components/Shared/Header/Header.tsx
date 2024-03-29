import { Link, useLocation } from "react-router-dom";
import Logo from "../../../Assets/Logo_recortado.png";
import "./Header.scss";
import { useAuth } from "../../../Context/AuthContext";
import { useEffect, useState } from "react";
import Menu from "../../Menu/Menu";
import SearchBar from "../../SearchBar/SearchBar";

const Header = () => {
  const [openMenu, isOpenMenu] = useState<boolean>(false);

  let location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <>
      <header>
        {openMenu && <Menu />}
        <div className="firstGroup">
          <span
            className="material-symbols-outlined"
            onClick={() => isOpenMenu(!openMenu)}
          >
            {openMenu ? "close" : "menu"}
          </span>
          <Link to={"/"}>
            <img src={Logo} alt="Cita Express Logo" />
          </Link>
        </div>
        {location.pathname !== "/" && window.innerWidth >= 768 && <SearchBar />}
        <div className="buttons">
          <ul>
            <li>
              <Link to={"/profile"}>
                <span className="material-symbols-outlined">person</span>Perfil
              </Link>
            </li>
            <li onClick={auth.logout} className="exit_app">
              <span className="material-symbols-outlined">exit_to_app</span>
              Salir
            </li>
          </ul>
        </div>
      </header>
      {location.pathname !== "/" && window.innerWidth <= 768 && (
        <div className="header_searchbar_container">
          <SearchBar />
        </div>
      )}
    </>
  );
};

export default Header;
