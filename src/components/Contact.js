import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="text-white  bg-black b ">
        <div className="md:grid md:grid-cols-2">
            <div className="md:ml-20 pt-20 ">
                <h1 className="text-5xl md:text-6xl mb-6 font-bold text-white text-center md:text-left md:inter">Contact Us</h1>
                <p className="text-md mb-6 text-white md:inter text-left text-zinc-500 mr-36 ml-10 md:ml-0">
                    We are always looking for new opportunities to partner with organizations and individuals who share our vision. If you are interested in working with us, please reach out! </p>
                   
            </div> 
     <ContactForm />
            </div>
            </div>                 

  );
};

export default Contact;
