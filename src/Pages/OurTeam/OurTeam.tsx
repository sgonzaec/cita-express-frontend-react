import MainTemplate from "../../Templates/Main.template";
import "./OurTeam.scss"
import OurTeamServices from "../../Services/OurTeam.service";
import ourTeamData from "../../Pages/OurTeam/OurTeamData";
const OurTeam = () => {
const info = ourTeamData()
    const { photoEvent, displayText } = OurTeamServices()
    console.log(info)
    return (
        <MainTemplate>
            <body>
                <section>
                    <div className="left">
                        {info.map((item, index) => {
                            return <div>
                                <div>{item.title}</div>
                                <div onClick={() => photoEvent(item.photoEvent)}> <img className="style-team" src={item.image} alt="SimonG" /></div>
                                <div id="displayText">{item.description}</div>
                            </div>
                        })}
                        
                    </div>
                </section>
            </body>

        </MainTemplate>

    )
}
export default OurTeam
