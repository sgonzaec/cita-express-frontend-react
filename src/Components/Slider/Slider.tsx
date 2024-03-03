import Slider from "react-slick";
import dataImages from "./Image.json";

const Carrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true

    }
    return (
        <Slider {...settings}>
            {
                dataImages.map((item, index) => {
                    return <img src={item.img} alt={item.alt} key={index} />
                })
            }
        </Slider>
    )
}
export default Carrousel