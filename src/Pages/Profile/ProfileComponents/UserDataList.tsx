import { ClientResponse } from "../../../Typings/Client";

const UserDataList = ({
  openModalData,
  response,
  onSubmit,
  handleSubmit, 
  register
}: {
  openModalData?: boolean
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
          disabled={!openModalData ? true : false}
        />

        <label htmlFor="lastname">Apellido</label>
        <input
          name="lastname"
          type="text"
          {...register("lastname")}
          defaultValue={response.client.lastname}
          placeholder={response.client.lastname}
          disabled={!openModalData ? true : false}
        />

        <label htmlFor="email">Correo Electronico</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          defaultValue={response.client.email}
          placeholder={response.client.email}
          disabled={!openModalData ? true : false}
        />

        <label htmlFor="phone">Telefono</label>
        <input
          name="phone"
          type="text"
          {...register("phone")}
          defaultValue={response.client.phone}
          placeholder={response.client.phone}
          disabled={!openModalData ? true : false}
        />

        <label htmlFor="cp">Codigo postal</label>
        <input
          name="cp"
          type="text"
          {...register("cp")}
          defaultValue={response.client.cp}
          placeholder={response.client.cp}
          disabled={!openModalData ? true : false}
        />

        <label htmlFor="city">Ciudad</label>
        <input
          name="city"
          type="text"
          {...register("city")}
          defaultValue={response.client.city}
          placeholder={response.client.city}
          disabled={!openModalData ? true : false}
        />

        <label htmlFor="country">Pais</label>
        <input
          name="country"
          type="text"
          {...register("country")}
          defaultValue={response.client.country}
          placeholder={response.client.country}
          disabled={!openModalData ? true : false}
        />

        <label htmlFor="address">Dirección</label>
        <input
          name="address"
          type="text"
          {...register("address")}
          defaultValue={response.client.address}
          placeholder={response.client.address}
          disabled={!openModalData ? true : false}
        />

        {openModalData && (
          <input type="submit" value={'Actualizar'} />
        )}
      </form>
    </>
  );
};

export default UserDataList;
