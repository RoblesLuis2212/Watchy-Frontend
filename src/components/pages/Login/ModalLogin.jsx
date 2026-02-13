import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioLogin from './FormularioLogin';
import "./ModalLogin.css";

const ModalLogin = ({ handleShow, handleClose, show }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} className='modal-login'>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioLogin></FormularioLogin>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalLogin;