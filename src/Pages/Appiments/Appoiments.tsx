import AppoimentCard from "../../Components/AppoimentCard/AppoimentCard";
import AppoimentOrchestrator from "../../Helpers/AppoimentOrchestrator";
import MainTemplate from "../../Templates/Main.template";
import { Appoiment } from "../../Typings/Appoiments";
import { Navigate } from "react-router-dom";

const Appoiments = () => {
  const orchestratorResult = AppoimentOrchestrator();

  if (!orchestratorResult) {
    return Navigate({to: '/404'})
  }

  const { loading, appoimentsData } = orchestratorResult;

  if (!appoimentsData) {
    return <div>No hay datos de citas disponibles.</div>; 
  }

  return (
    <MainTemplate>
      {appoimentsData.appoiments.map((appoiment: Appoiment, index: number) => (
        <AppoimentCard loading={loading} appoiment={appoiment} key={index} />
      ))}
    </MainTemplate>
  );
};

export default Appoiments;
