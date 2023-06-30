import { useState } from 'react';
import { Button, Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SignUp from './SignUp';

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

    return ( 
        <div className="text-white bg-black h-screen">
            <div className="flex justify-between">
                <p className="pt-44 text-5xl md:inter font-bold ml-20"> Blog </p>
                <div className="mt-32 mr-10">
                    <button onClick={handleOpenSignUp} className="bg-indigo-400 text-sm rounded-md p-2 pl-4 pr-4 mr-2">
                        Sign Up
                    </button>
                    <button className="bg-blue-400 text-sm rounded-md p-2 pl-4 pr-4 ml-2">
                        Login
                    </button>
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


        </div>

    );
}
 
export default Blog;