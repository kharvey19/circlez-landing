import React, { useState } from 'react';

const Login = (props) => {
  const handleCloseLogin = props.handleCloseLogin;
  const handleLoginStatus = props.handleLoginStatus;

  const [user, setUser] = useState({
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { Email, Password } = user;
  
    if (!Email || !Password) {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (Password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
  
    try {
      // Check if the user exists in the "Blog-Verified" table
      const response = await fetch(
        `https://circlez-8e1cb-default-rtdb.firebaseio.com/Blog-Verified.json`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const data = await response.json();
  
      if (response.ok && data && Object.values(data).some((item) => item.Email === Email)) {
        // User exists in the "Blog-Verified" table
        alert('Login successful!');
        handleCloseLogin();
        handleLoginStatus(true);

      } else {
        // User does not exist in the "Blog-Verified" table
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.log(error);
      alert('Sorry, something went wrong. Please try again.');
    }
  };
  
  

  return (
    <>
      <div>
        <h1 className='text-xl md:inter font-bold'>Login</h1>
        <form method='POST'>
          <div className='grid grid-cols-2'>
            <input
              type='email'
              name='Email'
              className='input col-span-2'
              placeholder='Email Address'
              value={user.Email}
              autoCapitalize='off'
              autoComplete='off'
              required
              onChange={handleChange}
            />
            <input
              type='password'
              name='Password'
              className='input col-span-2'
              placeholder='Password'
              value={user.Password}
              autoCapitalize='off'
              autoComplete='off'
              minLength={8}
              required
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className='hover:cursor-pointer mt-2 rounded-md p-3 pr-10 text-sm text-black hover:text-blue-400 font-bold md:inter'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
