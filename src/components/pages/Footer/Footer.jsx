import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column border border-light">
                    <h5>Watchy</h5>
                    <Link>Inicio</Link>
                    <Link>Peliculas</Link>
                    <Link>Series</Link>
                    <Link>Novedades</Link>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column border border-light">
                    <h5>Tu Cuenta</h5>
                    <Link>Iniciar Sesion</Link>
                    <Link>Registrarse</Link>
                    <Link>Mi Perfil</Link>
                    <Link>Premium</Link>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column border border-light">
                    <h5>Ayuda</h5>
                    <Link>Politica de Privacidad</Link>
                    <Link>Contacto</Link>
                    <Link>Soporte Tecnico</Link>
                    <Link>Quienes Somos</Link>
                </div>
                <div className="col-12 col-md-6 col-lg-3 border border-light">
                    <h5>Siguenos en nuestras redes</h5>
                    <div className="d-flex ms-5">
                        <i className="bi bi-facebook me-3 fs-2"></i>
                        <i className="bi bi-instagram me-3 fs-2"></i>
                        <i className="bi bi-twitter-x me-3 fs-2"></i>
                        <i className="bi bi-tiktok me-3 fs-2"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;