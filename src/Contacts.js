import React from "react";
import { useForm } from '@formspree/react';

function Contacts() {

    

        const [state, handleSubmit] = useForm('{your-form-id}');
        if (state.succeeded) {
          return <div>Thank you for signing up!</div>;
        }
        return (
            <div>
              
            <p className="contacts-info">Sometimes the answer you’re looking for isn’t from a website — it’s from a real person. That’s why we’re happy to help you get in touch with 
                the people who can answer your questions as fast as possible.</p>
                
          <div className="contacts-container">
            <div className="request">
                <p className="fill-in">Please fill in the form to ask your question</p>


          <form className="contact-form" onSubmit={handleSubmit}>
            
            <label className="label" htmlFor="email">First Name</label>
            <input id="inputField" type="text" name="text" placeholder="Enter your name..."/>

            <label className="label" htmlFor="email">Family Name</label>
            <input id="inputField" type="text" name="text" placeholder="Enter your surname..." />

            <label className="label" htmlFor="email">Email</label>
            <input id="inputField" type="email" name="email" placeholder="Enter your e-mail..." />

            <label className="label" htmlFor="email">Your question</label>
            <input id="inputField" type="text" name="text" placeholder="Enter your message..."/>
<div className="submitButton-container">
            <button id="submitButton" type="submit" disabled={state.submitting}>Sign up</button>
</div>

          </form>
           </div>
                 </div>
          </div>
        )
      }


export default Contacts;