import { ClientResponse } from "../../../Typings/Client";

const UserDataList = ({response}: {response: ClientResponse}) => {
  return (
    <>
      <label htmlFor="name">Nombre</label>
      <input
        name="name"
        type="text"
        placeholder={response.client.name}
        disabled
      />

      <label htmlFor="lastname">Apellido</label>
      <input
        name="lastname"
        type="text"
        placeholder={response.client.lastname}
        disabled
      />

      <label htmlFor="email">Correo Electronico</label>
      <input
        name="email"
        type="text"
        placeholder={response.client.email}
        disabled
      />

      <label htmlFor="phone">Telefono</label>
      <input
        name="phone"
        type="text"
        placeholder={response.client.phone}
        disabled
      />

      <label htmlFor="cp">Codigo postal</label>
      <input name="cp" type="text" placeholder={response.client.cp} disabled />

      <label htmlFor="city">Ciudad</label>
      <input
        name="city"
        type="text"
        placeholder={response.client.city}
        disabled
      />

      <label htmlFor="country">Pais</label>
      <input
        name="country"
        type="text"
        placeholder={response.client.country}
        disabled
      />

      <label htmlFor="adress">Dirección</label>
      <input
        name="adress"
        type="text"
        placeholder={response.client.adress}
        disabled
      />
    </>
  );
};

export default UserDataList;
