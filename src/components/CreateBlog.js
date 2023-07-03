import React, { useState } from 'react';



const CreateBlog = (props) => {
    const handleTabChange = props.handleTabChange;
    const userId = props.userId;
    const userFirst = props.userFirst;
    const userLast = props.userLast;

    const generateUniqueBlogId = () => {
        const authorId = userId; // Assuming you have the author's ID available
        const randomId = Math.random().toString(36).substring(2, 8); // Generate a random string
    
        return `${authorId}_${randomId}`; // Combine author ID and random string
      };

        
    const [user, setUser] = useState({
        AuthorId: generateUniqueBlogId(),
        userFirst: userFirst,
        userLast: userLast,
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
          const {AuthorId, userFirst, userLast, Title, Description, Message} = user;
          e.preventDefault();

          if (!user.Title || !user.Description || !user.Message ) {
            alert('Please fill in all required fields.');
            return;
          }

          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                AuthorId, userFirst, userLast, Title, Description, Message
              })
          }
          const res = fetch(
              'https://circlez-8e1cb-default-rtdb.firebaseio.com/Blogs.json',
              options
          )
          if (res) {
              alert('Thank you for posting a blog!')
              handleTabChange('all');
          } else {
              alert('Sorry, something went wrong. Please try again.')
          }
  
      }


    return (
        <div className="bg-zinc-100 p-8 w-3/4 md:w-2/3 rounded-lg">
            <h2 className='text-black ml font-bold text-2xl'>Add a New Blog</h2>
            <div className='flex flex-col mt-5'>
            <input
                className="md:ml-5 md:mr-10 text-black mb-5 border-zinc-900 rounded-md p-3" 
                style={{outline: 'none'}}
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
                className="md:ml-5 md:mr-10 text-black mb-5 border-zinc-900 rounded-md p-3"
                style={{outline: 'none'}} 
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
                className="md:ml-5 md:mr-10 text-black rounded-md p-3"
                style={{outline: 'none'}} 
                name="Message"
                placeholder="Blog Body"
                value={user.Message}
                onChange={data}
            ></textarea>

            </div>
            <div className='flex justify-end'>
            <button onClick={getData} className="mr-10 mt-5 hover:cursor-pointer text-white hover:bg-blue-500 p-3 pl-5 pr-5 bg-blue-400 rounded-lg text-sm font-bold  " type="submit">Post</button>
            </div>
        </div>

    );
}

export default CreateBlog;