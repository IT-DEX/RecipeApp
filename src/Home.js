import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slideOne from './slide-one.jpg';
import slideTwo from './slide-two.jpg';
import slideThree from './slide-three.jpg';
import News from './News';
import Contacts from './Contacts';

function NoTransitionExample() {
    return (

        <div>

      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Cook with us!</h2>
            <p>Thousands of recipes from all over the world</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideTwo}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>Learn with us!</h2>
            <p>Discover new ingredients</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideThree}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>Rest with us!</h2>
            <p>Special holiday menus</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="heading">NEWS</h2>
        
        <News/>
      
      <h2 className="heading">CONTACT US</h2>

      <Contacts/>


      </div>
    );
  }
  
  export default NoTransitionExample;