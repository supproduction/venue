import React from 'react';
import Slider from 'react-slick';

const Carrousel = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    const {imageList: images} = props;

    const imagesList = images.map(item => {
        return <div key={item}>
            <div
                className="carrousel_image"
                style={{
                    background: `url(${item})`,
                    height: "100vh"
                }}
            >
            </div>
        </div>

    })

    return (
        <div
            className="carrousel_wrapper"
            style={{
                backgroundColor: 'blue',
                height: "100vh",
                overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                {imagesList}
            </Slider>

        </div>
    );
};

export default Carrousel;