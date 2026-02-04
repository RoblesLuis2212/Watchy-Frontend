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
                <div className="col-12 col-md-6 col-lg-3 border border-light">1234</div>
                <div className="col-12 col-md-6 col-lg-3 border border-light">1234</div>
            </div>
        </footer>
    );
};

export default Footer;