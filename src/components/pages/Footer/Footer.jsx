import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center align-items-md-start">
                    <h5 className="mt-2">Watchy</h5>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Inicio</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Peliculas</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Series</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Novedades</Link>
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center align-items-md-start">
                    <h5 className="mt-2">Tu Cuenta</h5>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Iniciar Sesion</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Registrarse</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Mi Perfil</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Premium</Link>
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center align-items-md-start">
                    <h5 className="mt-2">Ayuda</h5>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Politica de Privacidad</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Contacto</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Soporte Tecnico</Link>
                    <Link className="text-secondary-emphasis link-underline-secondary link-underline-opacity-50">Quienes Somos</Link>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <h5 className="mt-2 d-none d-lg-block text-center">Siguenos en nuestras redes</h5>
                    <div className="d-flex justify-content-center ms-4">
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