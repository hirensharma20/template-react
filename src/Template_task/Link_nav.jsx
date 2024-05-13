import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Autocomplete from '@mui/joy/Autocomplete';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';


function Link_nav() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className='d-flex justify-content-between'>
                    <Navbar.Brand href="#" className='ms-3'><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex ms-5 me-4 w-75 rounded-2 " style={{ border: "solid 2px green" }} >
                            <Autocomplete
                                variant="plain"
                                placeholder="All Categories"
                                options={top100Films}
                                sx={{ width: 200, height: 50 }}
                            />
                            <Form.Control style={{ border: "none", backgroundColor: "transparent", outline: "none" }}
                                type="search"
                                placeholder="Search for items..."
                                className=" me-2"
                                aria-label="Search"
                            />
                            <SearchIcon className='mt-2 me-2' style={{ color: "grey", fontSize: 30 }} />
                        </Form>
                        <Nav
                            className=" ms-5 ps-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" >
                                <Badge badgeContent={3} color="success" className='me-2' >
                                    <DonutLargeOutlinedIcon color="action" />
                                </Badge>Compare</Nav.Link>
                            <Nav.Link href="#action2">
                                <Badge badgeContent={6} color="success" className='me-2' >
                                    <FavoriteBorderOutlinedIcon color="action" />
                                </Badge>Wishlist</Nav.Link>
                            <Nav.Link href="#action2">
                                <Badge badgeContent={4} color="success" className='me-2' >
                                    <ShoppingCartOutlinedIcon color="action" />
                                </Badge>Cart</Nav.Link>
                            <Nav.Link href="#action2">
                                <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                                    <span class="nav-item dropdown">
                                        <Badge color="success" className='me-1' >
                                            <AccountBoxOutlinedIcon color="action" />
                                        </Badge>
                                        <span>Account</span>
                                        <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                            <li><a class="dropdown-item" href="#!">My Acoount</a></li>
                                            <li><a class="dropdown-item" href="#!">Order Tracking</a></li>
                                            <li><a class="dropdown-item" href="#!">My Voucher</a></li>
                                            <li><a class="dropdown-item" href="#!">My Wishlist</a></li>
                                            <li><a class="dropdown-item" href="#!">Setting</a></li>
                                            <li><a class="dropdown-item" href="#!">Sign Out</a></li>
                                        </ul>
                                    </span>
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
        </div>

    )
}
const top100Films = [
    { label: 'Milks and Dairies', year: 1994 },
    { label: 'Wines & Alcohol', year: 1972 },
    { label: 'Clothing & Beauty', year: 1974 },
    { label: 'Pet Foods & Toy', year: 2008 },
    { label: 'Fast Food', year: 1957 },
    { label: "Baking material", year: 1993 },
    { label: 'Vegetables', year: 1994 },
    { label: 'Fresh Seafood', year: 1994 },
    { label: 'Noodles & Rice', year: 1994 },
    { label: 'Ice Cream', year: 1994 },
];

export default Link_navb