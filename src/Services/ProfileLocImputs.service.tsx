import citaExpressLocation from "../Clients/citaExpressLocation";
import { CountryList, State, StateList } from "../Typings/Countries";
import { ClientResponse } from "../Typings/Client";
import { useEffect, useState } from "react";

export interface ProfileLocationInputServiceResult {
  filterCountry: ({ response, countryList, }: { response: ClientResponse; countryList: CountryList; }) => number;
  filterState: ({ response, states, }: { response: ClientResponse; states: StateList; }) => number;
  states: StateList | undefined;
}

const filterCountry = ({
  response,
  countryList,
}: {
  response: ClientResponse;
  countryList: CountryList;
}): number => {
  const result = countryList.countries
    .filter((country: State) => country.name === response.client.country)
    .map((foundCountry: State) => foundCountry.id)
    .shift();

  return result !== undefined ? result : 0;
};

const filterState = ({
    response,
    states,
  }: {
    response: ClientResponse;
    states: StateList;
  }): number => {
    const result = states.states
      .filter((state: State) => state.name === response.client.city)
      .map((foundState: State) => foundState.id)
      .shift();
  
    return result !== undefined ? result : 0;
  };

export const ProfileLocationInputService = ({
  response,
  countryList,
}: {
  response: ClientResponse;
  countryList: CountryList;
}): ProfileLocationInputServiceResult => {
  const [states, setStates] = useState<StateList | undefined>();
  const [filteredCountry, ] = useState<number>(
    filterCountry({ response, countryList })
  );

  useEffect(() => {
    if (filteredCountry) {
      getStates(filteredCountry);
    }
  }, [filteredCountry]);

  const getStates = async (countryId: number) => {
    if (countryId === 0) return;
    const statesResponse: StateList = await citaExpressLocation.getStates(
      countryId
    );
    setStates(statesResponse)
  };

  return {
    filterCountry,
    states,
    filterState
  };
};
