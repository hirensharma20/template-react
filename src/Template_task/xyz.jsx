import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LocalFireDepartment } from '@mui/icons-material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function xyz() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        <LocalFireDepartment style={{ color: '#40b982' }} /> Deals
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        Home
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        About <KeyboardArrowDown />
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        Shop <KeyboardArrowDown />
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        Vendors <KeyboardArrowDown />
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        Mega menu <KeyboardArrowDown />
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        Blog <KeyboardArrowDown />
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        Pages <KeyboardArrowDown />
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="me-3 text-dark">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        Contact <KeyboardArrowDown />
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 3</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 4</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 5</a></li>
                                            <li><a class="dropdown-item" href="#!">Home 6</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default xyz