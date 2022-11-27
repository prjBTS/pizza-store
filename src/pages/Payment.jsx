import React, {useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getOrder } from '../actions/order'

const Payment = () => {
  const isUser = useSelector((state) => state.auth.authData);
  const orders = useSelector((state) => state.order.orderData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders)
      dispatch(getOrder());
  }, [dispatch, orders])
  let na = false;
  return (
    isUser ?
      <div div={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={9} md={9}>
              Your Payments:
            </Grid>
            <Grid item xs={12} lg={3} md={3}>
              All Payments Options:
            </Grid>
          </Grid>
        </Box>
      </div> :
      <Navigate to="/auth" />
  )
}

export default Payment