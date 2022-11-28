import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PizzaItems from '../components/LeftSection/PizzaItems';


const Admin = ({ pizza }) => {
    const isAdmin = useSelector((state) => state.admin.adminData);
    return (
        isAdmin ?
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                minHeight: "200px",
                flexWrap: "wrap",
            }}>
                <h2>All Items:</h2>
                <PizzaItems pizzas={pizza} />
            </div> :
            <Navigate to="/admin" />
    )
}

export default Admin