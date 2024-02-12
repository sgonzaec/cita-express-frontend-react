import ItemsMenu from "./ItemsMenu.json"
import "./Menu.scss"

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
            return<a href={item.path}> <li key={index}>{item.name}</li></a>
          })}
        </ul>
      </div>
      <hr />
    </nav>
  )
}

export default Menu