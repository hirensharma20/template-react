import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Sliders() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-1.png" alt="" style={{ width: "100%" }} />
          <Carousel.Caption className='text-start' style={{ marginRight: "500px", margin: "auto" }}  >
            <h3 style={{ fontSize: "4vw", color: "#253D4E", fontWeight: "600" }}>Don't  miss amazing <br />
              grocery deals</h3>
            <p style={{ fontSize: "2vw", color: "#7E7E7E" }}>Save up to 50% off on your order</p>
            <Form.Group className="mb-3 d-flex rounded-5" controlId="exampleForm.ControlInput1"  style={{backgroundColor:"white",width:"450px"}}>
              <SendIcon className='mt-3 ms-3' style={{color:"#7E7E7E",}}/>
            <Form.Control type="email" placeholder="Your email address"   style={{ backgroundColor:"transparent",width:"340px",height:"60px",border:"none"}}/>
            <Button variant="contained" className='rounded-5' style={{height:"60px",backgroundColor:"#3BB77E"}}>Contained</Button>
            </Form.Group>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-2.png" alt="" style={{ width: "100%" }} />
          <Carousel.Caption className='text-start' style={{ marginRight: "500px", margin: "auto " }}>
            <h3 style={{ fontSize: "4vw", color: "#253D4E", fontWeight: "600" }}>Fresh Vegetables <br />
              Big discount</h3>
            <p style={{ fontSize: "2vw", color: "#7E7E7E" }}>Sign up for the daily newsletter</p>
            <Form.Group className="mb-3 d-flex rounded-5" controlId="exampleForm.ControlInput1"  style={{backgroundColor:"white",width:"450px"}}>
            <SendIcon className='mt-3 ms-3' style={{color:"#7E7E7E",}}/>
            <Form.Control type="email" placeholder="  Your email address"   style={{ backgroundColor:"transparent",width:"340px",height:"60px",border:"none"}}/>
            <Button variant="contained" className='rounded-5' style={{height:"60px",backgroundColor:"#3BB77E"}}>Contained</Button>
            </Form.Group> 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Sliders