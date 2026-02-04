import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import elConjuro from "../../../assets/elConjuro.jpg";
import breakingBad from "../../../assets/breakingBad.jpg";
import RayayelDragon from "../../../assets/rayayelultimodragon.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <section className='banner-section'>
            <Carousel controls={false} indicators={false} interval={4000}>
                <Carousel.Item>
                    <img src={elConjuro} className='d-block w-100 banner-image image-conjuro' alt="Imagen de portada de pelicula el conjuro" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={breakingBad} className='d-block w-100 banner-image' alt="Imagen de portada de pelicula volver al futuro 3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={RayayelDragon} className='d-block w-100 banner-image' alt="Imagen de portada de pelicula Raya y el ultimo dragon" />
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Banner;