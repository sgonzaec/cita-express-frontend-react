import { useState } from "react";

interface HomeServicesResult {
    circleEvent: any,
    displayText: string
}
const HomeServices = (): HomeServicesResult => {
    const [displayText, setDisplayText] = useState("")
    const circleEvent = (color: string) => {
        switch (color) {
            case "brown":
                setDisplayText("Ofline")
                break;
            case "orange":
                setDisplayText("Servicio")
                break;
            case "blue":
                setDisplayText("Cliente")
                break;
            default:
                break;
        }
    }
    return { circleEvent, displayText }
}
export default HomeServices   
