import LinkList from './LinkList.json'
import './Footer.scss'


const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          <strong>{LinkList.services.title}</strong>
        </p>
        <ul>
          {LinkList.services.list.map((service) => {
            return <li>{service.name}</li>
          })}
        </ul>
      </div>
      <div>
        <p>
          <strong>{LinkList.aboutUs.title}</strong>
        </p>
        <ul>
          {LinkList.aboutUs.list.map((item) => {
            return <li>{item.name}</li>
          })}
        </ul>
      </div>
      <div>
        <p>
          <strong>{LinkList.contact.title}</strong>
        </p>
        <ul>
          {LinkList.contact.list.map((item) => {
            return <li>{item.name}</li>
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer 