import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import "../index.css"
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import ModalLogin from './pages/Login/ModalLogin';
import { useState } from 'react';

const NavbarPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar expand="lg" className="navbar-watchy">
                <Container fluid>
                    <Navbar.Brand className='ms-2'>Watchy<i className="bi bi-camera-reels-fill ms-2"></i></Navbar.Brand>
                    <Form className='mx-auto d-md-none' style={{ width: "40%" }}>
                        <InputGroup>
                            <Form.Control
                                placeholder="buscar pelicula o serie"
                            />
                        </InputGroup>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        {/* Buscador */}
                        <Form className='mx-auto d-none d-md-block' style={{ width: "40%" }}>
                            <InputGroup>
                                <Form.Control
                                    className='input-search'
                                    placeholder="buscar pelicula o serie"
                                />
                            </InputGroup>
                        </Form>
                        <Nav className='d-flex gap-3 me-5'>
                            <Nav.Link as={Link} to={"/registro"} className='text-white'>Crear Cuenta</Nav.Link>
                            <Nav.Link className='text-white' onClick={handleShow}>Iniciar Sesion</Nav.Link>
                            <Nav.Link className='text-white'>Mi Lista</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalLogin show={show} handleClose={handleClose} handleShow={handleShow}></ModalLogin>
        </>
    );
};

export default NavbarPage;