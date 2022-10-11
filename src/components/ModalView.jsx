import React,{useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:300, sm:400} ,
  bgcolor: 'background.paper',
  border: '2px solid trasparent',
  borderRadius:'20px',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
  '& button': { m: 1 , mt:2}
};

export default function ModalView({modal,clear,onClose}) {
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    setOpen(modal);
 },[modal])

 const handleClose = () => {
  setOpen(false);
  if(onClose) onClose();
};

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ProductionQuantityLimitsIcon fontSize={"large"} color='warning'/>
            <Typography id="transition-modal-title" variant="h6" component="h2">
               Desea vaciar el carrito?
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              perdera todos los productos agregados.
            </Typography>
            <Button variant="outlined"  onClick={clear}>Vaciar</Button>
            <Button variant="outlined" onClick={handleClose}>Continuar compra</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
