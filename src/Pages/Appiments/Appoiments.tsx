import AppoimentCard from "../../Components/AppoimentCard/AppoimentCard"
import AppoimentServices from "../../Services/Appoiments.service"
import MainTemplate from "../../Templates/Main.template"
import { Appoiment } from "../../Typings/Appoiments"

const Appoiments = () => {
  const {loading, appoimentsData} = AppoimentServices()
  return (
    <MainTemplate>
      {appoimentsData.appoiments.map((appoiment: Appoiment, index: number) => {
        return <AppoimentCard loading={loading} appoiment={appoiment} key={index}/>
      })}
    </MainTemplate>
  )
}

export default Appoiments