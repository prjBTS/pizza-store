import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PizzaStoreContext } from '../../context/Context'
import Typography from '@mui/material/Typography';
import nonVeg from '../../assets/non-veg.png'
import veg from '../../assets/veg.png'
import placed from '../../assets/placed.png'
import './Dialog.scss'
import Gbutton from './Gbutton';
import { useDispatch } from 'react-redux';
import { setOrder, getOrder } from '../../actions/order';
import { useNavigate } from 'react-router-dom';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {

  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ openCart, setopenCart }) {
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false)
  const navigate = useNavigate();
  const {
    state: { cartItem },
    PizzaStoreContextDispatch,
  } = React.useContext(PizzaStoreContext);
  const subTotal = cartItem.map(item => item.finalAmount).reduce((prev, curr) => prev + curr, 0);


  const handleClose = () => {
    setopenCart(false);
    setOrderPlaced(false);
  };


  const emptyCart = () => {
    const formData = {
      items: cartItem,
      amount: subTotal,
      discount: 0,
      paymentUsed: "UPI"
    }
    dispatch(setOrder(formData));
    dispatch(getOrder());
    PizzaStoreContextDispatch({
      type: "setEmptyCart",
    });
    setOrderPlaced(true)
    // setopenCart(false);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openCart}
      // 
      >
        {!orderPlaced ?
          <>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
              <h3 style={{ lineHeight: "1rem" }}>Checkout</h3>
            </BootstrapDialogTitle>
            <DialogContent dividers>
              {subTotal === 0 ? <div style={{ width: "400px" }}>Please Select Pizza to Add in the Cart</div>
                : cartItem.map((item, index) =>
                  <div className='outer' key={index}>
                    <div className='itemDiv'>
                      <div className="Itype">
                        <img src={item.isVeg ? veg : nonVeg} alt="veg" />
                      </div>
                      <div className='rightSec'>
                        <div className='first'>
                          <div className='div1'>
                            <h3>{item.name}</h3>
                            <h5>{item.quantity} X ${item.amount}  :  ${item.finalAmount}</h5>
                            <p>Size: {item.size.size}</p>
                            <p>Toppings: {item.toppings.name} </p>
                          </div>
                          <div className='div2'>
                            <Gbutton pizza={item} />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              }
            </DialogContent>
            <DialogActions style={{ flexDirection: "column", textAlign: "left", justifyContent: "left", alignItems: "left" }}>
              <Typography variant='h6'>SubTotal: ${subTotal}</Typography>
              {/* <Button variant="primary" fullWidth style={{ width: "100%", background: "#ff9e00", color: "#fff", margin: "10px" }}>Pay - ${subTotal}</Button> */}
              <Button
                onClick={emptyCart}
                variant="primary"
                style={{ border: "none", backgroundColor: "black", width: "100%", color: "#fff" }}
                fullWidth
                disabled={subTotal === 0 ? true : false}
              >
                place your order

              </Button>
            </DialogActions>
          </> :
          <>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
              <h3 style={{ lineHeight: "1rem" }}>Checkout</h3>
            </BootstrapDialogTitle>
            <DialogContent dividers style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
              <img src={placed} alt="placed" style={{ height: "90px", width: "90px" }} />
              <h2>Order Placed</h2>
              <p>
                check your placed orders in order page..
              </p>
              <Button onClick={() => { navigate('/order'); setopenCart(false) }}>Order Page</Button>
            </DialogContent>

          </>}
      </BootstrapDialog>
    </div>
  );
}
