import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slideOne from './slide-one.jpg';
import slideTwo from './slide-two.jpg';
import slideThree from './slide-three.jpg';
import News from './News';


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

      <div>
              
              <p className="contacts-info">Sometimes the answer you’re looking for isn’t from a website — it’s from a real person. That’s why we’re happy to help you get in touch with 
                  the people who can answer your questions as fast as possible.</p>
                  
            <div className="contacts-container">
              <div className="request">
                  <p className="fill-in">Please fill in the form to ask your question</p>
  
  
            <form className="contact-form">
              
              <label className="label" htmlFor="email">First Name</label>
              <input id="inputField" type="text" name="text" placeholder="Enter your name..."/>
  
              <label className="label" htmlFor="email">Family Name</label>
              <input id="inputField" type="text" name="text" placeholder="Enter your surname..." />
  
              <label className="label" htmlFor="email">Email</label>
              <input id="inputField" type="email" name="email" placeholder="Enter your e-mail..." />
  
              <label className="label" htmlFor="email">Your question</label>
              <input id="inputField" type="text" name="text" placeholder="Enter your message..."/>
              <div className="submitButton-container">
              <button id="submitButton" type="submit">Sign up</button>
              </div>
  
            </form>
             </div>
                   </div>
            </div>


      </div>
    );
  }
  
  export default NoTransitionExample;