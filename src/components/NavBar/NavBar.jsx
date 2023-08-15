
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

import'../NavBar/NavBar.css'


const NavBarComponent = () => {
    return (
        <Navbar expand="lg"  className="NavbarContainer">
            <Container>
                <Navbar.Brand href="#home">Electra-Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-2 navbar">
                        <Nav.Link href="#Audio" className='' > |  Audio</Nav.Link>
                        <Nav.Link href="#SmarTv" className=''>  | Smart Tv</Nav.Link>
                        <Nav.Link href="#Gaming" className=''> | Gaming</Nav.Link>
                        <Nav.Link href="#Celulares" className=''>  | Celulares</Nav.Link>
                        <Nav.Link href="#Smartwatch" className=''>| Smartwatch</Nav.Link>
                        <Nav.Link href="#ComponentesPc"className=''>| Componentes Pc</Nav.Link>
                        <Nav.Link href="#NotebookTablets" className=''> | Notebook y Tablets</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget  />
        </Navbar>
    );
}

export default NavBarComponent;