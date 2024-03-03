import MainTemplate from "../../Templates/Main.template"

const OurServices = () => {
    return (
        <MainTemplate>
            <div style={{margin:"0 2em"}}>
                <h1>Agenda, gestiona, controla tus citas de la mejor forma</h1>
                <h2>Tanto si eres cliente como proveedor, nuestra plataforma te ofrece una solución completa:</h2>
                <h3>Para clientes:</h3>
                <ul>
                    <li><p><b>Reserva citas para una amplia variedad de servicios:</b> desde belleza y bienestar hasta reparaciones y mantenimiento, clases y talleres, ¡y mucho más!</p></li>
                    <li><p><b>Encuentra proveedores en tu zona:</b> utiliza nuestro buscador avanzado para filtrar por ubicación, especialidad, precio, valoraciones y disponibilidad.</p></li>
                    <li><p><b>Recibe recordatorios automáticos:</b> no te pierdas ninguna cita y mantén tu agenda organizada.</p></li>
                    <li><p><b>Compara precios y servicios:</b> elige la mejor opción para tus necesidades y presupuesto, leyendo opiniones de otros clientes y comparando diferentes ofertas.</p></li>
                </ul>
                <h3>Para proveedores:</h3>
                <ul>
                    <li><p><b>Crea un perfil profesional para tu negocio:</b> destaca tus servicios, experiencia y habilidades para atraer a nuevos clientes</p></li>
                    <li><p><b>Ofrece tus servicios a una amplia red de clientes potenciales:</b> aumenta tu visibilidad y maximiza tus oportunidades de negocio.</p></li>
                    <li><p><b>Gestiona tu calendario de citas de forma eficiente:</b> organiza tu tiempo, evita confusiones y optimiza tu productividad.</p></li>
                    <li><p><b>Recibe notificaciones de nuevas solicitudes de citas:</b> no te pierdas ninguna oportunidad y responde a tus clientes de forma inmediata.</p></li>
                </ul>
            </div>
        </MainTemplate>

    )

}

export default OurServices