import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Contacto = () => {
    return (
        <section className='container border border-emphasis rounded-3 py-2 px-3 mt-5 mb-3 container-contacto fade-in'>
            <h2 className='text-center'>Contacto</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Juan Perez" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="ej: juanperez@gmail.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                    />
                </Form.Group>
                <p className='text-muted mt-1'>Solicita el contenido que te gustaria ver, reporta errores,etc.</p>
                <button type="submit" className='btn btn-categorias btn-contacto border-none'>
                    Enviar
                </button>
            </Form>
        </section>
    );
};

export default Contacto;