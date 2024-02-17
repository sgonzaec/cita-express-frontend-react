import { ClientResponse } from "../../../Typings/Client";

const UserDataList = ({
  openModal,
  response,
  onSubmit,
  handleSubmit, 
  register
}: {
  openModal?: boolean
  response: ClientResponse;
  onSubmit?: any;
  handleSubmit: any;
  register: any;
}) => {
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          type="text"
          {...register("name")}
          defaultValue={response.client.name}
          placeholder={response.client.name}
          disabled={!openModal ? true : false}
        />

        <label htmlFor="lastname">Apellido</label>
        <input
          name="lastname"
          type="text"
          {...register("lastname")}
          defaultValue={response.client.lastname}
          placeholder={response.client.lastname}
          disabled={!openModal ? true : false}
        />

        <label htmlFor="email">Correo Electronico</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          defaultValue={response.client.email}
          placeholder={response.client.email}
          disabled={!openModal ? true : false}
        />

        <label htmlFor="phone">Telefono</label>
        <input
          name="phone"
          type="text"
          {...register("phone")}
          defaultValue={response.client.phone}
          placeholder={response.client.phone}
          disabled={!openModal ? true : false}
        />

        <label htmlFor="cp">Codigo postal</label>
        <input
          name="cp"
          type="text"
          {...register("cp")}
          defaultValue={response.client.cp}
          placeholder={response.client.cp}
          disabled={!openModal ? true : false}
        />

        <label htmlFor="city">Ciudad</label>
        <input
          name="city"
          type="text"
          {...register("city")}
          defaultValue={response.client.city}
          placeholder={response.client.city}
          disabled={!openModal ? true : false}
        />

        <label htmlFor="country">Pais</label>
        <input
          name="country"
          type="text"
          {...register("country")}
          defaultValue={response.client.country}
          placeholder={response.client.country}
          disabled={!openModal ? true : false}
        />

        <label htmlFor="adress">Dirección</label>
        <input
          name="adress"
          type="text"
          {...register("adress")}
          defaultValue={response.client.adress}
          placeholder={response.client.adress}
          disabled={!openModal ? true : false}
        />

        {openModal && (
          <input type="submit" value={'Actualizar'} />
        )}
      </form>
    </>
  );
};

export default UserDataList;
