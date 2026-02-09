import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Categorias = () => {
    return (
        <section className='container border rounded-4 border border-emphasis py-2 container-categorias'>
            <h3 className='text-center titulo-peliculas'>Categorias</h3>
            <div className="row g-2 justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Accion</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Drama</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Romatico</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Terror</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Fantasia</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Animada</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Belico</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Crimen</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Documental</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Comedia</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Ciencia Ficcion</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Suspenso</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Anime</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Aventura</Link>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <Link className='btn btn-categorias w-100'>Misterio</Link>
                </div>
            </div>
        </section >
    );
};

export default Categorias;