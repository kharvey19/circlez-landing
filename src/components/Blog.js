import { useEffect, useState } from 'react';
import { Button, Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SignUp from './SignUp';
import Login from './Login';
import CreateBlog from './CreateBlog';
import { ref, onValue } from 'firebase/database';
import { db } from './config.js';
import OpenBlog from './OpenBlog';

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


// collect the date and the user id and name, so the user can see their own posts + first and last name go on the card 
// maybe a user can save blogs 

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
    const [userFirst, setUserFirst] = useState(null);
    const [userLast, setUserLast] = useState(null);
    const [userId, setUserId] = useState(null);
    const [open, setOpen] = useState(false);
    const [blogTitle, setBlogTitle] = useState(null);
    const [blogMessage, setBlogMessage] = useState(null);
    const [blogFirst, setBlogFirst] = useState(null);
    const [blogLast, setBlogLast] = useState(null);
  
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
  
    const handleLoginStatus = (status, userFirst, userLast, userId) => {
      setIsLoggedIn(status);
      setUserFirst(userFirst);
      setUserLast(userLast);
      setUserId(userId);
  
      console.log(`User logged in: ${isLoggedIn}`);
      console.log(`First Name: ${userFirst}`);
      console.log(`Last Name: ${userLast}`);
      console.log(`User ID: ${userId}`);
    };
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    const openPost = (title, message, first, last) => {
        setBlogTitle(title);
        setBlogMessage(message);
        setBlogFirst(first);
        setBlogLast(last);
        console.log(`Title: ${title}`);

    };
  
 
    return (
      <div className="text-white bg-black min-h-screen">
        <div className="flex justify-between">
          <p className="pt-44 text-5xl md:inter font-bold ml-20">Blog</p>
          <div className="mt-32 mr-10">
            {!isLoggedIn && (
              <>
                <button onClick={handleOpenSignUp} className="bg-indigo-400 text-sm rounded-md p-2 pl-4 pr-4 mr-2">
                  Sign Up
                </button>
                <button onClick={handleOpenLogin} className="bg-blue-400 text-sm rounded-md p-2 pl-4 pr-4 ml-2">
                  Login
                </button>
              </>
            )}
            {isLoggedIn && (
              <>
                <div className="flex justify-end items-center">
                  <p className="text-white font-bold mr-3">
                    {userFirst} {userLast}
                  </p>
                  <button
                    onClick={() => 
                    {handleLoginStatus(false, null, null, null); 
                    setOpen(false);
                    handleTabChange('all');}}
                    className="bg-red-400 text-sm rounded-md p-2 pl-4 pr-4 ml-2"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
  
        <div className="flex justify-center flex-col mt-8 ">
          {!open && (
            <>
              {!openSignUp && (
                <div className="space-x-4 flex justify-center items-center">
                  <button
                    onClick={() => handleTabChange('all')}
                    className={`px-4 py-2 rounded-md ${
                      activeTab === 'all' ? 'bg-indigo-400 text-white rounded-lg' : 'bg-gray-200 text-black'
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
              )}

        
  
              {activeTab === 'all' && (
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ml-10 mr-10 pb-20">
                  {users.length === 0 ? (
                    <p>Loading...</p>
                  ) : (
                    users.map((user) => {
                      if (user.Title && user.Description) {
                        return (
                          <div
                            key={user.id}
                            className="text-left rounded-lg bg-white text-black shadow-white mb-10 lg:mb-5 hover:bg-gray-200"
                            style={{ border: '1px solid white' }}
                            onClick={() => {setOpen(true); openPost(user.Title, user.Message, user.userFirst, user.userLast)}}
                          >
                            <h1 className="text-2xl font-bold md:inter mt-10 mx-7 border-b pb-3">{user.Title}</h1>
                            <p className="mx-7 mt-5 mb-5 ">{user.Description}</p>
                            <p className="mx-7 mt-5 mb-10 font-bold">
                              {user.userFirst} {user.userLast}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    })
                  )}
                </div>
              )}
  
              {activeTab === 'my' && (
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ml-10 mr-10 pb-20">
                  {users.length === 0 ? (
                    <p>Loading...</p>
                  ) : (
                    users
                      .filter((user) => user.AuthorId === userId)
                      .map((user) => {
                        if (user.Title && user.Description) {
                          return (
                            <div
                              key={user.id}
                              className="text-left rounded-lg bg-white text-black shadow-white mb-10 lg:mb-5 hover:bg-gray-200"
                              style={{ border: '1px solid white' }}
                            >
                              <h1 className="text-2xl font-bold md:inter mt-10 mx-7 border-b pb-3">{user.Title}</h1>
                              <p className="mx-7 mt-5 mb-5">{user.Description}</p>
                              <p className="mx-7 mt-5 mb-5 font-bold">
                                {userFirst} {userLast}
                              </p>
                              <div className="mt-5 mb-5 mr-3 flex justify-center">
                                <button className="bg-zinc-500 hover:bg-zinc-600 text-white py-2 px-4 rounded text-sm mr-3">
                                  Archive
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm">
                                  Delete
                                </button>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })
                  )}
                </div>
              )}
  
              {activeTab === 'upload' && (
                <div className="flex justify-center mt-10">
                  <CreateBlog
                    handleTabChange={handleTabChange}
                    userId={userId}
                    userFirst={userFirst}
                    userLast={userLast}
                  />
                </div>
              )}
            </>
          )}

          {open && (
            <div className="flex justify-center">
            <OpenBlog title={blogTitle} message={blogMessage} first={blogFirst} last={blogLast} setOpen={setOpen} openPost={openPost} />
            </div>
          )}
          </div>
  
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
  