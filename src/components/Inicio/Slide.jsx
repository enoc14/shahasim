import React from 'react';
//"https://picsum.photos/900/300?random=1"
import Slider from 'react-slick';

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoPlaySpeed: 1000,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        className: 'inicio-slide'
    }

    return(
        <Slider {...settings}>
            <div>
                <img className="img-fluid" src="https://picsum.photos/900/300?random=1" alt=""/>
            </div>
            <div>
                <img className="img-fluid" src="https://picsum.photos/900/300?random=1" alt=""/>
            </div>
            <div>
                <img className="img-fluid" src="https://picsum.photos/900/300?random=1" alt=""/>
            </div>
            <div>
                <img className="img-fluid" src="https://picsum.photos/900/300?random=1" alt=""/>
            </div>
        </Slider>
    );
}

export default Slide;