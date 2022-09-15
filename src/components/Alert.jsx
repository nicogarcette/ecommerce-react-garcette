import React, { useEffect, useState } from 'react';

import Snackbar from '@mui/material/Snackbar';


export default function Alert({onClose,isOpen,message}) {
  const [open, setOpen] = useState();

 useEffect(()=>{
    setOpen(isOpen);
 },[isOpen])

  const handleClose = () => {
    setOpen(false);
    if(onClose) onClose();
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
        anchorOrigin ={{vertical: 'top', horizontal: 'right'}}
      />
    </div>
  );
}
