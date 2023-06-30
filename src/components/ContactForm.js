import { useState } from 'react';





const ContactForm = () => {

    
    const [user, setUser] = useState({
      Name: '',
      Email: '',
      Message: '',
    })
    let name, value
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
        console.log(user);
    }

    const getData = (e) => {
        const {Name, Email, Message} = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name, Email, Message
            })
        }
        const res = fetch(
            'https://circlez-8e1cb-default-rtdb.firebaseio.com/Contact.json',
            options
        )
        if (res) {
            alert('Thank you for sending us a message!')
        } else {
            alert('Sorry, something went wrong. Please try again.')
        }

    }


  return (
    <div className="contact-container bg-black md:mt-16 ">
      <div className=" contact-form col-span-1 md:mb-20 lg:mb-0 ">
    <form>
          <div className="form-group flex ">
            <div className="ml-5 text-sm">
            <label htmlFor="name ">Name</label>
            </div>
            <input 
                className="ml-5 w-screen mr-10 text-white" 
                type="text" 
                name="Name"
                value={user.Name}
                onChange={data}
                autoCapitalize='off'
                autoComplete='off'
                required 
            />
          </div>
          <div className="form-group flex">
          <div className="ml-6 text-sm">
            <label htmlFor="email">Email</label>
            </div>
            <input 
                className="ml-5 w-screen mr-10 text-white" 
                type="email" 
                name="Email" 
                value={user.Email}
                onChange={data}
                autoCapitalize='off'
                autoComplete='off'
                required 
            />
          </div>
          <div className="form-group flex text-sm">
            <label htmlFor="message">Message</label>
            <textarea 
                className="ml-5 w-screen mr-10 text-white" 
                name="Message"
                value={user.Message}
                onChange={data}
                autoCapitalize='off'
                autoComplete='off'
                rows="5" 
                required>
            </textarea>
          </div>
          <button onClick={getData} className="mr-10 ml-20 hover:cursor-pointer " type="submit">Send Message</button>
        </form>
      </div>
    </div>  


  );
};

export default ContactForm;