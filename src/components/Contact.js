import React from 'react';

const Contact = () => {
  return (
    <div className="text-white  bg-black b">
        <div className="grid grid-cols-2">
            <div className="ml-20 pt-20 ">
                <h1 className="text-6xl mb-6 font-bold text-white text-left inter">Contact Us</h1>
                <p className="text-md mb-6 text-white inter text-left text-zinc-500 mr-10">
                    We are always looking for new opportunities to partner with organizations and individuals who share our vision. If you are interested in working with us, please reach out to us at&nbsp;
                    <a href="mailto:development@circlez-online.com" className="text-blue-400"> development@circlez-online.com.</a>
                </p>
            
                <p> Sydney Wirdeu : <a href="mailto:sydneywiredu@circlez-online.com" className="text-blue-400"> sydneywiredu@circlez-online.com </a> </p>
                <p> Aiden Tahmazian : <a href="mailto:atahmazian@circlez-online.com" className="text-blue-400"> atahmazian@circlez-online.com </a> </p>

            </div> 
     <div className="contact-container bg-black mt-16 ">
      <div className=" contact-form col-span-1">
    <form>
          <div className="form-group flex ">
            <div className="ml-5 text-sm">
            <label htmlFor="name ">Name</label>
            </div>
            <input className="ml-5 w-screen mr-10 text-white" type="text" id="name" name="name" required />
          </div>
          <div className="form-group flex">
          <div className="ml-6 text-sm">
            <label htmlFor="email">Email</label>
            </div>
            <input className="ml-5 w-screen mr-10 text-white" type="email" id="email" name="email" required />
          </div>
          <div className="form-group flex text-sm">
            <label htmlFor="message">Message</label>
            <textarea className="ml-5 w-screen mr-10 text-white" id="message" name="message" rows="5" required></textarea>
          </div>
          <button className="mr-10 ml-20 hover:cursor-pointer" type="submit">Send Message</button>
        </form>
      </div>
    </div>  
            </div>
            </div>                 

  );
};

export default Contact;
