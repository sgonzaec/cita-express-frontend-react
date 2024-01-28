import ItemsMenu from "./ItemsMenu.json"
import "./Menu.scss"

const Menu = () => {
  return (
    <nav>
      <ul>
        {ItemsMenu.map((item, index) => {
          return <li key={index}><a href={item.path}>{item.name}</a></li>
        })}
      </ul>
    </nav>
  )
}

export default Menu