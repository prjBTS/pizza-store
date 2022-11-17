import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';

const Payment = () => {
  let na = false;
  return (
    <div div={{ width: "100%" }}>
      {
        na ?
          <Box sx={{ display: 'flex', justifyContent: "space-around" }}>
            <CircularProgress color="inherit" />
          </Box> :
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={9} md={9}>
                abc
              </Grid>
              <Grid item xs={12} lg={3} md={3}>
                pqr
              </Grid>
            </Grid>
          </Box>
      }
    </div>
  )
}

export default Payment