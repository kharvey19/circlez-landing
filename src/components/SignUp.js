import React, {useState} from 'react';


const SignUp = (props) => {
    const handleCloseSignUp = props.handleCloseSignUp;
    const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      Email: '',
      Password: '',
      ConfirmPassword: ''
    })
    let name, value
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
        console.log(user);
    }

    const getData = (e) => {
        const {firstName, lastName, Email, Password, ConfirmPassword} = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName, lastName, Email, Password, ConfirmPassword
            })
        }
        const res = fetch(
            'https://circlez-8e1cb-default-rtdb.firebaseio.com/Blog-Register.json',
            options
        )
        if (res) {
            alert('You will be sent an email when you are approved!')
            handleCloseSignUp();
        } else {
            alert('Sorry, something went wrong. Please try again.')
        }

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
            type='text'
            name='Password'
            className="input col-span-2" placeholder="Password"
            value={user.Password}
            autoCapitalize="off"
            autoComplete='off'
            required
            onChange={data} 
        />
        <input 
            type='text'
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