import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./ModalLogin.css";

const FormularioLogin = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control className='form-login' type="email" placeholder="ingresar email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control className='form-login' type="password" placeholder="Minimo 8 caracteres" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-between mb-3">
                <Form.Check type="checkbox" label="Recordarme" />
                <Link>¿Olvidaste tu contraseña?</Link>
            </Form.Group>
            <button className='btn btn-categorias w-100' type="submit">
                Ingresar
            </button>
            <p className='text-center mt-3 p-0'>¿No tienes una cuenta? <Link to={"/registro"}>Registrate</Link></p>
        </Form>
    );
};

export default FormularioLogin;