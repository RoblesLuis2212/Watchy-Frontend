import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registro = () => {
    return (
        <section className="container border border-emphasis rounded-4 py-3 px-3 mt-5 mb-3 container-contacto fade-in">
            <h2 className='text-center'>Crear Cuenta</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" placeholder="ej: juanperez21" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="text" placeholder="Ej: juanperez@gmail.com" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="minimo 8 caracteres" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type="password" placeholder='repetir contraseña' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <button className='btn btn-categorias w-100' type="submit">
                    Crear Cuenta
                </button>
            </Form>
        </section>
    );
};

export default Registro;