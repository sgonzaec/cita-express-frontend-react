import ItemsMenu from "./ItemsMenu.json"
import "./Menu.scss"

const Menu = () => {
  return (
    <nav>
      <div className="title">
        <h2>Menú</h2>
        <hr />
      </div>
      <div className="menuList">
        <ul>
          {ItemsMenu.map((item, index) => {
            return <li key={index}><a href={item.path}>{item.name}</a></li>
          })}
        </ul>
      </div>
      <hr />
    </nav>
  )
}

export default Menu