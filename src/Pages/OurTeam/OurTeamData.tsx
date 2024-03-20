import Simon from "./../../Assets/Simon G.jpg";
import Santiago from "./../../Assets/Santiago T.jpg";
import jean from "./../../Assets/Jean G.jpg"
import wilfer from "./../../Assets/Wilfer R.jpg"


const ourTeamData = () => {
    return [
        {
            "name": "Simon Gonzalez",
            "image": Simon,
            "description": "Simon Gonzalez. Creador inicial de CitaExpress. Experiencia de 10 años. full stack es la verga",
            "photoEvent":"boss",
            "title":"Full"
        },
        {
            "name": "Santiago Tonguino",
            "image": Santiago,
            "description": "Santiago tonguino. Alto bastard capacitado en el 2024 para meterle estilos a CitaExpress. Es un pro!",
            "photoEvent":"front-s",
            "title":"Front"
        },
        {
            "name": "Jean Angel G",
            "image":jean,
            "description": "Jean Angel Gomez AKA Cale. Genio detras del codigo, especialista en bases de datos y Excel",
            "photoEvent":"back-j",
            "title":"Back"
        },
        {
            "name":"Wilfer Rios",
            "image":wilfer,
            "description": "Wilfer Rios. Aprendiz que en pleno 2024 justo a Santiago Tonguino hacen que la pagina se vea linda para ustedes XD",
            "photoEvent":"front-w",
            "title":"Front"
        }
    ]
}

export default ourTeamData
