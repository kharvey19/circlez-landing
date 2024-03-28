import { useState } from 'react';
import home from '../static/Circlez_logo.png'
import lift from '../static/Gym_Circle.png'
import appStoreButton from '../static/appstore.png'
import { Button, Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { firebase } from './config.js';
import Form from './Form.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '1px solid #fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  color: 'black'
  
};

const input = {
  width: '33ch'
}



const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/circlez-shared-goals/id6477159436', '_blank');
  };

  return (
    <main className="bg-black w-screen">
      <p className="text-white text-6xl md:inter font-bold pt-44 text-center "> A <span className='text-indigo-400'> hub </span> for motivation.</p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
        <div className="mr-10 lg:mr-0 lg:ml-40 lg:pt-20 col-span-1 mb-20 lg:mb-36 pt-16">
          <p className="ml-12 text-white text-center lg:text-left lg:mt-24 text-3xl md:text-4xl font-bold">A social productivity app helping young adults achieve their biggest goals.</p>
          <p className="ml-12 text-zinc-500 text-center lg:text-left text-2xl mt-5">Get started by downloading the app and creating an account today!</p>
          <div className='ml-12 flex justify-center items-center'>
            <img 
              src={appStoreButton} 
              alt='Download on the App Store'
              onClick={handleAppStoreClick}
              className="hover:cursor-pointer mt-5 md:mt-7"
            />
          </div>
        </div>
        <div className="lg:pt-10 md:pb-12 lg:pb-0 flex justify-center flex-col md:flex-row items-center md:col-span-1">
          <div className='md:-mt-10 md:mr-5 mb-10 '>
            <img src={home} alt='' className="h" />
          </div>
          <div className='md:mt-20 mb-10 md:mr-5 '>
            <img src={lift} alt='' className="h" />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form handleClose={handleClose} />
        </Box>
      </Modal>
    </main>
  );
}

export default Home;
