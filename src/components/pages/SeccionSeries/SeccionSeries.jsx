import { Link } from "react-router-dom";

const SeccionSeries = () => {
    return (
        <section className='container-fluid py-3'>
            <h2 className='text-center titulo-peliculas'>Series</h2>
            <div className="row mt-3">
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-white">
                        <img src="https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg" alt="Portada de serie destacada" className="image-recomendado mt-2 rounded-3 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">Breaking Bad</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-white">
                        <img src="https://es.web.img3.acsta.net/r_1280_720/pictures/21/08/03/13/56/3572084.jpg" alt="Portada de serie destacada" className="image-recomendado mt-2 rounded-3 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">La Casa de Papel</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-white">
                        <img src="https://m.media-amazon.com/images/M/MV5BNzc1Y2JhY2EtMWZjZS00MmNhLWFlYTktMGM5NGYwNmIyYmUzXkEyXkFqcGc@._V1_.jpg" alt="Portada de serie destacada" className="image-recomendado mt-2 rounded-3 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">Yu-Gi-Oh! GX</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-white">
                        <img src="https://es.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52" alt="Portada de serie destacada" className="image-recomendado mt-2 rounded-3 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">The Boys</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SeccionSeries;