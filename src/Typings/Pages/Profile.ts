import { ClientResponse } from "../Client";
import { CountryList, StateList } from "../Countries";

export interface ProfileServiceResult {
  loading: boolean;
  response: ClientResponse;
  isOpenModalData: any;
  openModalData: boolean;
  openModalImage: boolean;
  isOpenModalImage: any;
  onSubmit: any;
  handleSubmit: any;
  register: any;
  onSubmitImage: any;
  binaryToImage: any;
  countryList: CountryList;
  // getStates: GetStatesFunction;
}

export interface GetStatesFunction {
  (countryId: number): Promise<StateList | undefined>;
}


