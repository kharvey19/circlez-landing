import React, {useState} from 'react';


const SignUp = (props) => {
    const handleCloseSignUp = props.handleCloseSignUp;
    const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
      id: '',
    });
  
    const data = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
      console.log(user);
    };
  
    const getData = (e) => {
      e.preventDefault();
      const { firstName, lastName, Email, Password, ConfirmPassword } = user;
  
      // Validation checks...
  
      const id = generateRandomId(8); // Generate a random ID
      setUser({ ...user, id: id }); // Set the generated ID in the user state
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          Email,
          Password,
          ConfirmPassword,
          id: id, // Pass the generated ID in the request body
        }),
      };
  
      fetch('https://circlez-8e1cb-default-rtdb.firebaseio.com/Blog-Register.json', options)
        .then((response) => {
          if (response.ok) {
            alert('You will be sent an email when you are approved!');
            handleCloseSignUp();
          } else {
            alert('Sorry, something went wrong. Please try again.');
          }
        })
        .catch((error) => {
          console.log(error);
          alert('Sorry, something went wrong. Please try again.');
        });
    };
  

    function generateRandomId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          id += characters[randomIndex];
        }
      
        return id;
      }


  return (
    <>
    <div>
    <h1 className='text-xl md:inter font-bold '> Sign Up </h1>
    <form method='POST'>
        <div className='grid grid-cols-2'>
        <input 
            type='text'
            name='firstName'
            className="input"
            placeholder="First Name"
            value={user.firstName}
            autoCapitalize="off"
            autoComplete='off'
            required
            onChange={data} 
        />
        <input 
            type='text'
            name='lastName'
            className="input" placeholder="Last Name"
            value={user.lastName}
            autoCapitalize="off"
            autoComplete='off'
            required
            onChange={data} 
        />

        <input 
            type='email'
            name='Email'
            className="input col-span-2" placeholder="Email Address"
            value={user.Email}
            autoCapitalize="off"
            autoComplete='off'
            required
            onChange={data} 
        />
        <input 
            type='password'
            name='Password'
            className="input col-span-2" placeholder="Password"
            value={user.Password}
            autoCapitalize="off"
            autoComplete='off'
            minLength={8}
            required
            onChange={data} 
        />
        <input 
            type='password'
            name='ConfirmPassword'
            className="input col-span-2" placeholder="Confirm Password"
            value={user.ConfirmPassword}
            autoCapitalize="off"
            autoComplete='off'
            required
            onChange={data} 
        />
       
        </div>

        <button onClick={getData} className="hover:cursor-pointer mt-2 rounded-md p-3 pr-10 text-sm text-black   hover:text-blue-400 font-bold md:inter">Submit</button>

  </form>
  </div>

  </>
  )

}

export default SignUp;