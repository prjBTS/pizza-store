
import React from 'react';
import { Avatar } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import './Card.css'
import Tooltip from '@mui/material/Tooltip';
import Button from "@mui/material/Button";


function OrderCard({ orders }) {

  console.log("orcard", orders);
  return (
    <div className="cardDiv" >
      <div className="upperHalf">
        <h2>Last Order Details:</h2>
        <div className='studentDetails'>
          {orders && <p>{orders[0]}</p>}
        </div>
      </div>
    </div>
  )
}

export default OrderCard
