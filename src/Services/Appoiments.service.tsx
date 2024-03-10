import { useEffect, useState } from "react";
import citaExpressAppoiments from "../Clients/citaExpressAppoimets";
import { AppoimentResult } from "../Typings/Pages/Appoiments";
import { AppoimentList } from "../Typings/Appoiments";

const DefaultData: AppoimentList = {
  appoiments: [
    {
      city: "",
      country: "",
      id_appoiment: 0,
      id_client: "",
      supplier_cp: "",
      id_supplier: "",
      note: "",
      service_type: "",
    }
  ],
}

const AppoimentServices = (): AppoimentResult => {
  const [loading, isLoading] = useState(false);
  const [appoimentsData, setAppoimentsData] = useState(DefaultData);

  useEffect(() => {
    const getAppoimets = async () => {
      const appoimentsResponse = await citaExpressAppoiments.getAllApoimetns(
        isLoading
      );
      setAppoimentsData(appoimentsResponse);
    };
    getAppoimets();
  }, []);

  return {
    loading,
    appoimentsData,
  };
};

export default AppoimentServices;
