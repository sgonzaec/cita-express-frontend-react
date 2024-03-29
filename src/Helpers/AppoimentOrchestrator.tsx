import { useLocation } from "react-router-dom";
import AppoimentServices from "../Services/MyAppoiments.service";

const AppoimentOrchestrator = () => {
  let location = useLocation();

  switch (location.pathname) {
    case "/my-appoiments":
      const { loading, appoimentsData } = AppoimentServices();
      return { loading, appoimentsData };

    default:
      return null;
  }
};

export default AppoimentOrchestrator;
