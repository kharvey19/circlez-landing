import { useState } from 'react';
import { Button, Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SignUp from './SignUp';
import Login from './Login';

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

    return ( 
        <div className="text-white bg-black h-screen">
            <div className="flex justify-between">
                <p className="pt-44 text-5xl md:inter font-bold ml-20"> Blog </p>
                <div className="mt-32 mr-10">
                    <button onClick={handleOpenSignUp} className="bg-indigo-400 text-sm rounded-md p-2 pl-4 pr-4 mr-2">
                        Sign Up
                    </button>
                    <button onClick={handleOpenLogin} className="bg-blue-400 text-sm rounded-md p-2 pl-4 pr-4 ml-2">
                        Login
                    </button>
                </div>
            </div>


            <div className='flex justify-center mt-16'>
                <div className='w-2/3 hover:text-indigo-400 text-left' style={{border: '1px solid white'}}>
                    <h1 className='text-4xl font-bold md:inter mt-10 ml-10 '> First Blog </h1>
                    <p className='ml-10 mt-5 mb-5 '> This is where the description will go </p>
                    <p className='ml-10 mt-5 mb-10 '> FirstName LastName </p>
                </div>
            </div>

            <Modal
                open={openSignUp}
                onClose={handleCloseSignUp}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box sx={style}>
                <SignUp handleCloseSignUp={handleCloseSignUp} />
                </Box>
            </Modal>

            <Modal
                open={openLogin}
                onClose={handleCloseLogin}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box sx={style}>
                <Login handleCloseSignUp={handleCloseLogin} />
                </Box>
            </Modal>


        </div>

    );
}
 
export default Blog;