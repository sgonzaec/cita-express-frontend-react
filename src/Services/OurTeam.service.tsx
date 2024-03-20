import { useState } from "react";

interface OurTeamResult {
    photoEvent: any,
    displayText: string
}

const OurTeamServices = (): OurTeamResult =>{
    const [displayText, setDisplayText] = useState("")
    const photoEvent = (person:string) => {
        switch (person) {
            case "boss":
                setDisplayText("Simon Gonzalez. Creador inicial de CitaExpress. Experiencia de 10 años. full stack es la verga")
                break;
            case "front-s":
                setDisplayText("Santiago tonguino. Alto bastard capacitado en el 2024 para meterle estilos a CitaExpress. Es un pro!")
                break;
            case "back-j":
                setDisplayText("Jean Angel Gomez AKA Cale. Genio detras del codigo, especialista en bases de datos y Excel")
                break;
            case "front-w":
                setDisplayText("Wilfer Rios. Aprendiz que en pleno 2024 justo a Santiago Tonguino hacen que la pagina se vea linda para ustedes XD")
                break;
            default:
                break;
        }
    }
    return{ photoEvent, displayText }
}

export default OurTeamServices