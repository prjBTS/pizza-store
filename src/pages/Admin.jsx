import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PizzaItems from '../components/LeftSection/PizzaItems';
import Grid from '@mui/material/Grid';
import PizzaFilter from '../components/RightSection/Filter/PizzaFilter';
import ItemForm from '../components/Form/ItemForm';


const Admin = ({ pizza }) => {
    const location = useLocation();
    const isAdmin = useSelector((state) => state.admin.adminData);
    return (
        isAdmin
            ?
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                minHeight: "200px",
                flexWrap: "wrap",
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={9} md={9}>
                        <PizzaItems pizzas={pizza} />
                    </Grid>
                    <Grid item xs={12} lg={3} md={3}>
                        <ItemForm />
                    </Grid>
                </Grid>
            </div> :
            <Navigate to="/admin" />
    )
}

export default Admin