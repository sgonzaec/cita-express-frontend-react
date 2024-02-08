import LinkList from "./LinkList.json";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div id="columns">
        <div>
          <p>
            <strong key={LinkList.services.title}>
              {LinkList.services.title}
            </strong>
          </p>
          <ul>
            {LinkList.services.list.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <p>
            <strong key={LinkList.aboutUs.title}>
              {LinkList.aboutUs.title}
            </strong>
          </p>
          <ul>
            {LinkList.aboutUs.list.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <p>
            <strong key={LinkList.contact.title}>
              {LinkList.contact.title}
            </strong>
          </p>
          <ul>
            {LinkList.contact.list.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div id="copyright">
        <span>{new Date().getFullYear()}</span> &copy; Copyright CitaExpress.
      </div>
    </footer>
  );
};

export default Footer;
