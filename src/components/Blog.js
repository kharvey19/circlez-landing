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

      return (
        <div className="text-white bg-black h-screen">
          <div className="flex justify-between">
            <p className="pt-44 text-5xl md:inter font-bold ml-20"> Blog </p>
            <div className="mt-32 mr-10">
              {isLoggedIn ? (
                <button onClick={() => {
                    handleLoginStatus(false)}
                    } className="bg-indigo-400 text-sm rounded-md p-2 pl-4 pr-4 mr-2">
                  Logout
                </button>
              ) : (
                <>
                  <button onClick={handleOpenSignUp} className="bg-indigo-400 text-sm rounded-md p-2 pl-4 pr-4 mr-2">
                    Sign Up
                  </button>
                  <button onClick={handleOpenLogin} className="bg-blue-400 text-sm rounded-md p-2 pl-4 pr-4 ml-2">
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
    
          {/* Rest of the code */}
    
          <Modal
            open={openSignUp}
            onClose={handleCloseSignUp}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <SignUp handleCloseSignUp={handleCloseSignUp}  />
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