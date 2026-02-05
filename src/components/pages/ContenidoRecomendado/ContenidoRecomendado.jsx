import "./ContenidoRecomendado.css";
import { Link } from "react-router-dom";

const ContenidoRecomendado = () => {
    return (
        <section className='container-fluid py-3 border border-light'>
            <h2 className="text-center">Contenido Destacado</h2>
            <div className="row">
                <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-light">
                    <Link className="text-decoration-none text-light">
                        <img src="https://es.web.img3.acsta.net/medias/nmedia/18/72/16/76/20065616.jpg" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2" />
                        <p className="text-center mt-2">Matrix</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-light">
                    <Link className="text-decoration-none text-light">
                        <img src="https://m.media-amazon.com/images/M/MV5BZmM4YWNmYzYtZjFmZS00MTQ5LWExZWEtNWEzYjY4NTBmZWUzXkEyXkFqcGc@._V1_.jpg" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2" />
                        <p className="text-center mt-2">El Justiciero</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-light">
                    <Link className="text-decoration-none text-light">
                        <img src="https://es.web.img3.acsta.net/pictures/14/03/06/10/13/369709.jpg" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2" />
                        <p className="text-center mt-2">Sherk</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-light">
                    <Link className="text-decoration-none text-light">
                        <img src="https://es.web.img2.acsta.net/pictures/14/05/28/11/24/435900.jpg" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2" />
                        <p className="text-center mt-2">Cars</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContenidoRecomendado;