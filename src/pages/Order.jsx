// import React from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import { CircularProgress } from '@mui/material';
// import { useSelector } from 'react-redux';

// const Order = () => {
//   const orders  = useSelector((state)=> state.order.orderData);
//   let len = false;
//   return (
//     <div div={{ width: "100%" }}>
//       {
//         len ?
//           <Box sx={{ display: 'flex', justifyContent: "space-around" }}>
//             <CircularProgress color="inherit" />
//           </Box> :
//           <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} lg={9} md={9}>
//                 <>
//                   {subTotal === 0 ? <div style={{ width: "400px" }}>Please Select Pizza to Add in the Cart</div>
//                     : cartItem.map((item, index) =>
//                       <div className='outer' key={index}>
//                         <div className='itemDiv'>
//                           <div className="Itype">
//                             <img src={item.isVeg ? veg : nonVeg} alt="veg" />
//                           </div>
//                           <div className='rightSec'>
//                             <div className='first'>
//                               <div className='div1'>
//                                 <h3>{item.name}</h3>
//                                 <h5>{item.quantity} X ₹{item.amount}  :  ₹{item.finalAmount}</h5>
//                                 <p>Size: {item.size.size}</p>
//                                 <p>Toppings: {item.toppings.name} </p>
//                               </div>
//                               <div className='div2'>
//                                 <Gbutton pizza={item} />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                       </div>
//                     )
//                   }
//                 </>
//               </Grid>
//               <Grid item xs={12} lg={3} md={3}>
//                 def
//               </Grid>
//             </Grid>
//           </Box>
//       }
//     </div>
//   )
// }

// export default Order