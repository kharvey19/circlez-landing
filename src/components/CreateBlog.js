import React, { useState } from 'react';



const CreateBlog = () => {

        
    const [user, setUser] = useState({
        // Author: '',
        Title: '',
        Description: '',
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
          const { Title, Description, Message} = user;
          e.preventDefault();
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                   Title, Description, Message
              })
          }
          const res = fetch(
              'https://circlez-8e1cb-default-rtdb.firebaseio.com/Blogs.json',
              options
          )
          if (res) {
              alert('Thank you for posting a blog!')
          } else {
              alert('Sorry, something went wrong. Please try again.')
          }
  
      }


    return (
        <div className="bg-zinc-100 p-4 w-1/3 ">
            <h2 className='text-black ml'>Add a New Blog</h2>
            <div className='flex flex-col mt-5'>
            <input
                className="ml-5 mr-10 text-black mb-5 border-zinc-900" 
                type="text"
                name="Title"
                placeholder="Blog Title"
                value={user.Title}
                onChange={data}
                autoCapitalize='off'
                autoComplete='off'
                required 
                />
            <input
                className="ml-5 mr-10 text-black mb-5 border-zinc-900" 
                type="text"
                name="Description"
                placeholder="Short Description"
                value={user.Description}
                onChange={data}
                autoCapitalize='off'
                autoComplete='off'
                required 
                />
            <textarea
                required
                className="ml-5 mr-10 text-black" 
                name="Message"
                placeholder="Blog Body"
                value={user.Message}
                onChange={data}
            ></textarea>

            </div>

            <button onClick={getData} className="mr-10 ml-5 mt-5 hover:cursor-pointer text-black hover:text-indigo-400 " type="submit">Post</button>

        </div>

    );
}

export default CreateBlog;