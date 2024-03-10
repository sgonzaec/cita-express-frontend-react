import AppoimentSkeleton from "./Skeleton/AppoimentSkeleton";
import "./AppoimentCard.scss";
import { Appoiment } from "../../Typings/Appoiments";

const AppoimentCard = ({
  loading,
  appoiment,
}: {
  loading: boolean;
  appoiment: Appoiment;
}) => {
  return (
    <>
      {loading ? (
        <AppoimentSkeleton />
      ) : (
        <article className="card appoiment_card">
          <div className="title_section">
            <p className="title">{appoiment.service_type}</p>
            <span className="id"># {appoiment.id_appoiment}</span>
          </div>
          <div className="conten_section">
            <div className="supplier_section">
              <img
                src="https://plomeroscercademi.com.mx/wp-content/uploads/2023/08/plomero3-768x768.jpg"
                alt="plomero"
              />
              <div className="info">
                <p className="name_supplier">
                  <strong>Nombre: </strong>
                  {appoiment.id_supplier}
                </p>
                <p className="type_supplier">
                  <strong>Servicio: </strong>
                  {appoiment.service_type}
                </p>
                <div className="note">
                  <strong>Descripción: </strong>
                  {appoiment.note}
                </div>
              </div>
            </div>
            <div className="service_section">
              <div className="location">
                {appoiment.city}, {appoiment.country} - Código Postal: 0555410
              </div>
              <div className="rate">
                Puntiación: &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
            </div>
          </div>
          <div className="contact_section">
            <button>
              <span className="material-symbols-outlined">smartphone</span>
              Whatsapp
            </button>
            <button>
              <span className="material-symbols-outlined">call</span>Llamar
            </button>
            <button>
              <span className="material-symbols-outlined">read_more</span>Ver
              Perfil
            </button>
          </div>
        </article>
      )}
    </>
  );
};

export default AppoimentCard;
