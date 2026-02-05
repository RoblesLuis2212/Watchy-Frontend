import "./SeccionPeliculas.css";
import { Link } from "react-router-dom";

const SeccionPeliculas = () => {
    return (
        <section className='container-fluid py-3'>
            <h2 className='text-center titulo-peliculas'>Peliculas</h2>
            <div className="row">
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-light">
                        <img src="https://es.web.img3.acsta.net/medias/nmedia/18/89/75/36/20065254.jpg" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">El Juego del Miedo</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-light">
                        <img src="https://es.web.img3.acsta.net/pictures/14/05/07/12/38/160972.jpg" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">Kill Bill</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-light">
                        <img src="https://es.web.img3.acsta.net/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">El Rey León</p>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center col-12 col-md-4 col-lg-3">
                    <Link className="text-decoration-none text-light">
                        <img src="https://pics.filmaffinity.com/La_teoraia_del_todo-567835219-mmed.jpg" alt="Contenido destacado" className="image-recomendado rounded-3 mt-2 shadow-lg" />
                        <p className="text-center mt-1 fs-4 fw-semibold">La Teoria del Todo</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SeccionPeliculas;