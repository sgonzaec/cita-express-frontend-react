import { ClientResponse } from "../../../Typings/Client";
import { CountryList, State } from "../../../Typings/Countries";
import { ProfileLocationInputService } from "../../../Services/ProfileLocImputs.service";

const LocationImputs = ({
  openModalData,
  response,
  register,
  countryList,
}: {
  openModalData?: boolean;
  response: ClientResponse;
  register: any;
  countryList: CountryList;
}) => {
  const { filterCountry, states,filterState } = ProfileLocationInputService({response, countryList});

  return (
    <>
      {openModalData && (
        <>
          <label htmlFor="country">Pais</label>
          <select
            name="country"
            {...register("country")}
            defaultValue={String(filterCountry({response, countryList}))} //pendiente por crear onchange para actualizar lista de estados
            placeholder={response.client.country}
            disabled={!openModalData ? true : false}
          >
            {countryList.countries.map((item: State) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="city">Ciudad</label>
          <select
            name="city"
            {...register("city")}
            defaultValue={states && String(filterState({response, states}))} //pendiente organizar
            placeholder={response.client.city}
            disabled={!openModalData ? true : false}
          >
            {states && states.states.map((state: State) => {
                return <option value={state.id} key={state.id}>{state.name}</option>
            })}
            </select>
        </>
      )}
    </>
  );
};

export default LocationImputs;
