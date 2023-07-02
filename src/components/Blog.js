import { useEffect, useState } from 'react';
import { Button, Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SignUp from './SignUp';
import Login from './Login';
import CreateBlog from './CreateBlog';
import { ref, onValue } from 'firebase/database';
import { db } from './config.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '1px solid #fff',
    boxShadow: 24,
    p: 4,
    color: 'black'
    
  };


const Blog = () => {
    const [openSignUp, setOpenSignUp] = useState(false);
    const handleOpenSignUp = () => setOpenSignUp(true);
    const handleCloseSignUp = () => setOpenSignUp(false);
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // New state variable
    const [activeTab, setActiveTab] = useState('all');



    useEffect(() => {
      const dbRef = ref(db, 'Blogs');
  
      onValue(dbRef, (snapshot) => {
        const users = [];
        snapshot.forEach((childSnapshot) => {
          users.push(childSnapshot.val());
        });
  
        console.log(users); // Add this console log statement to inspect the users data
  
        setUsers(users);
      });
    }, []);


    const handleLoginStatus = (status) => {
        setIsLoggedIn(status);
      };

      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

      return (
        <div className="text-white bg-black h-screen">
        <div className="flex justify-between">
          <p className="pt-44 text-5xl md:inter font-bold ml-20">Blog</p>
          <div className="mt-32 mr-10">
            {!isLoggedIn && (
              <>
                <button
                  onClick={handleOpenSignUp}
                  className="bg-indigo-400 text-sm rounded-md p-2 pl-4 pr-4 mr-2"
                >
                  Sign Up
                </button>
                <button
                  onClick={handleOpenLogin}
                  className="bg-blue-400 text-sm rounded-md p-2 pl-4 pr-4 ml-2"
                >
                  Login
                </button>
              </>
            )}
            {isLoggedIn && (
              <>
                <button
                  onClick={() => handleLoginStatus(false)}
                  className="bg-red-400 text-sm rounded-md p-2 pl-4 pr-4 ml-2"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
  
        <div className="flex justify-center mt-8">
          <div className="space-x-4">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'all' ? 'bg-indigo-400 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              All Blogs
            </button>
            {isLoggedIn && (
              <>
                <button
                  onClick={() => handleTabChange('my')}
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'my' ? 'bg-indigo-400 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  My Blogs
                </button>
                <button
                  onClick={() => handleTabChange('upload')}
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'upload' ? 'bg-indigo-400 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  Upload Blog
                </button>
              </>
            )}
          </div>
        </div>
  
        {activeTab === 'all' && (
          <div className="flex justify-center mt-8">
            {users.length === 0 ? (
              <p>Loading...</p>
            ) : (
              users.map((user) => {
                if (user.Title && user.Description) {
                  return (
                    <div
                      key={user.id}
                      className="w-2/3 hover:text-indigo-400 text-left"
                      style={{ border: '1px solid white' }}
                    >
                      <h1 className="text-4xl font-bold md:inter mt-10 ml-10">{user.Title}</h1>
                      <p className="ml-10 mt-5 mb-5">{user.Description}</p>
                      <p className="ml-10 mt-5 mb-10">FirstName LastName</p>
                    </div>
                  );
                }
                return null;
              })
            )}
          </div>
        )}
  
        {activeTab === 'my' && (
          <div className="flex justify-center mt-8">
            {users.length === 0 ? (
              <p>Loading...</p>
            ) : (
              users
                .filter((user) => user.userId === 'currentUserId') // Replace 'currentUserId' with the actual ID of the logged-in user
                .map((user) => {
                  if (user.Title && user.Description) {
                    return (
                      <div
                        key={user.id}
                        className="w-2/3 hover:text-indigo-400 text-left"
                        style={{ border: '1px solid white' }}
                      >
                        <h1 className="text-4xl font-bold md:inter mt-10 ml-10">{user.Title}</h1>
                        <p className="ml-10 mt-5 mb-5">{user.Description}</p>
                        <p className="ml-10 mt-5 mb-10">FirstName LastName</p>
                      </div>
                    );
                  }
                  return null;
                })
            )}
          </div>
        )}
  
        {activeTab === 'upload' && 
            <div className='flex justify-center mt-10'>
                <CreateBlog />

            </div>}
  
        <Modal
          open={openSignUp}
          onClose={handleCloseSignUp}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SignUp handleCloseSignUp={handleCloseSignUp} />
          </Box>
        </Modal>
  
        <Modal
          open={openLogin}
          onClose={handleCloseLogin}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Login handleCloseLogin={handleCloseLogin} handleLoginStatus={handleLoginStatus} />
          </Box>
        </Modal>
      </div>
    );
  };
  
  export default Blog;
  