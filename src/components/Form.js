import { useState } from 'react';





const Form = (props) => {
    const handleClose = props.handleClose;
    const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      Email: '',
      Role: '',
      OtherRole: ''
    })
    let name, value
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
        console.log(user);
    }

    const getData = (e) => {
        const {firstName, lastName, Email, Role, OtherRole} = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName, lastName, Email, Role, OtherRole
            })
        }
        const res = fetch(
            'https://circlez-8e1cb-default-rtdb.firebaseio.com/Premium.json',
            options
        )
        if (res) {
            alert('Thank you for signing up for our mailing list!')
            handleClose();
        } else {
            alert('Sorry, something went wrong. Please try again.')
        }

    }


  return (
    <>
    <div>
    <h1 className='text-xl md:inter font-bold '> Sign Up Below!</h1>
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
        {/* selector for role, parent or student */}
        <select 
            className="col-span-2 ml-2 mr-2 rounded-lg p-2 mt-4" 
            style={{border: '1px solid black'}}
            name="Role" 
            value={user.Role} 
            onChange={data} 
            required >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="other">Other</option>
        </select>


      {user.Role === 'other' && (
        <div className="col-span-2 rounded-lg p-2 mt-2">
          <label htmlFor="otherRole">Specify Role:</label>
          <input
            type="text"
            name="OtherRole"
            className="ml-2"
            style={{borderBottom: '1px solid black', width: 210, outline: 'none'}}
            value={user.OtherRole}
            onChange={data}
          />
        </div>
      )}
        </div>

        <button onClick={getData} className="hover:cursor-pointer mt-5 ml-2 border-2 rounded-md p-2 pl-6 pr-6 bg-indigo-400	 text-sm text-white border-indigo-400 hover:bg-white hover:text-indigo-400 font-bold md:inter">Submit</button>

  </form>
  </div>

  </>

    )

}
export default Form;
