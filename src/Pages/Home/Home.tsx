import MainTemplate from "../../Templates/Main.template"
import "./Home.scss";
const Home = () => {
  return (
    <MainTemplate>
      <div className="homeContainer">
        <div>
          <h2>cita Express</h2>
        </div>
        <div className="left">
          <div className="appointmentBox">
            <div className="box">
            </div>
            <div>
              <ul>
                <li>
                  <button></button>
                </li>
                <li>
                  <button></button>
                </li>
                <li>
                  <button></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <h2>Cita Express somos la verga agendando</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod assumenda odio eos quos dolore praesentium. Corrupti neque sequi itaque, accusamus aliquid distinctio, harum sapiente quam eius sit dolores, nesciunt perspiciatis.</p>
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}

export default Home