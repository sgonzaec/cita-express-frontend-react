import MainTemplate from "../../Templates/Main.template"
import "./AboutUs.scss";
import mision from "./../../Assets/mision.png"
import vision from "./../../Assets/vision.png"


const AboutUs = () => {

  return (
    <MainTemplate>
      <div className="contenedor-qs">
        <h2>¿Quienes somos?</h2>
        <p>Somos una innovadora plataforma que busca revolucionar la forma en que las personas acceden y ofrecen servicios. En nuestra comunidad, conectamos a individuos que desean intercambiar habilidades y conocimientos de manera fácil y segura. Desde la reparación del hogar hasta lecciones de idiomas, nuestra aplicación ofrece una amplia gama de servicios disponibles en tiempo real. Nos esforzamos por crear una experiencia fluida y transparente, permitiendo a nuestros usuarios programar servicios futuros con confianza y ofrecer sus propias habilidades al resto de la comunidad. Con un enfoque en la colaboración y la comunidad, estamos comprometidos a facilitar interacciones positivas y enriquecedoras entre nuestros usuarios, creando así un ecosistema donde todos puedan prosperar.</p>
      </div>

      <div className="caja">
        <div className="left">
          <img className="mision" src={mision} alt="Mision"></img>
          <p>"Nuestra misión es empoderar a las personas al facilitar la conexión y el intercambio de servicios de manera accesible y confiable. Nos esforzamos por crear un entorno donde cada individuo pueda ofrecer sus habilidades únicas y acceder a servicios que satisfagan sus necesidades, promoviendo así la colaboración, el crecimiento personal y la construcción de una comunidad sólida. Estamos comprometidos a proporcionar una plataforma intuitiva y segura que fomente relaciones significativas y contribuya al bienestar general de nuestros usuarios y la sociedad en su conjunto."</p>
        </div>

        <div className="rigth">
          <img className="vision" src={vision} alt="" />
          <p>Transformar la manera en que las personas acceden y ofrecen servicios, creando un ecosistema digital que promueva la inclusión, la colaboración y el crecimiento personal. Visualizamos un futuro donde nuestra plataforma sea el puente que conecte a individuos de todo el mundo, permitiéndoles compartir sus habilidades, conocimientos y recursos de manera fácil y segura. Nos esforzamos por ser pioneros en la creación de una comunidad global en la que el intercambio de servicios sea una experiencia enriquecedora y gratificante para todos los involucrados.</p>
        </div>
      </div>

      <div className="contenedor2">
        <h3 className="ultimo">CitaExpress proyecto hecho en Colombia. 🇨🇴
        </h3>
      </div>



    </MainTemplate>
  )
}

export default AboutUs