import { Link } from "react-router-dom";
import ItemsMenu from "./ItemsMenu.json";
import "./Menu.scss";

const Menu = () => {
  return (
    <nav id="menu">
      <div className="title">
        <h2>Menú</h2>
        <hr />
      </div>
      <div className="menuList">
        <ul>
          {ItemsMenu.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <span className="material-symbols-outlined">{item.icon}</span>
                {" "}
                <li>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <hr />
    </nav>
  );
};

export default Menu;
