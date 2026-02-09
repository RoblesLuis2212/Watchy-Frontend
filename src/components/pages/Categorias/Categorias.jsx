import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Categorias = () => {
    return (
        <section className='container border border-light'>
            <h3 className='text-center'>Categorias</h3>
            <div className="row">
                <div className="d-flex justify-content-between align-items-between col-12 col-md-3 col-lg-12 border border-light">
                    <Link className='text-decoration-none btn btn-primario'>Accion</Link>
                    <Link className='text-decoration-none btn btn-primario'>Drama</Link>
                    <Link className='text-decoration-none btn btn-primario'>Romantico</Link>
                    <Link className='text-decoration-none btn btn-primario'>Comedia</Link>
                    <Link className='text-decoration-none btn btn-primario'>Terror</Link>
                    <Link className='text-decoration-none btn btn-primario'>Fantasia</Link>
                    <Link className='text-decoration-none btn btn-primario'>Belico</Link>
                    <Link className='text-decoration-none btn btn-primario'>Crimen</Link>
                </div>
                <div className="d-flex justify-content-between col-12 col-md-12 col-lg-12">
                    <Link className='text-decoration-none btn btn-primario'>Anime</Link>
                    <Link className='text-decoration-none btn btn-primario'>Documental</Link>
                    <Link className='text-decoration-none btn btn-primario'>Comedia</Link>
                    <Link className='text-decoration-none btn btn-primario'>Suspenso</Link>
                    <Link className='text-decoration-none btn btn-primario'>Infantil</Link>
                    <Link className='text-decoration-none btn btn-primario'>Animado</Link>
                </div>
            </div>
        </section>
    );
};

export default Categorias;