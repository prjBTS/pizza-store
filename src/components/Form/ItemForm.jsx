import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, RadioGroup, Radio, FormLabel, FormControl } from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import { Divider } from "@mui/material";
// import DatePicker from '@mui/lab/DatePicker';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addPayment } from '../../actions/payment';
import { ADD_ITEM, FETCH_ITEMS } from '../../constants/actionTypes';


// "_id": "636ed76a6e71beb9a8c86c96",
//         "id": 3,
//         "name": "Pepper Barbecue & Onion",
//         "description": "A classic favorite with pepper barbeque chicken & onion",
//         "isVeg": false,
//         "rating": 4.5,
//         "price": 43,
//         "img_url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",

//     },

const initialState = {
    name: '', description: '', isVeg: false, rating: 4, price: 0, img_url: '', size: [
        {
            isRadio: true,
            title: "choose size",
            items: [
                {
                    size: "Regular"
                },
                {
                    size: "Medium"
                },
                {
                    size: "Large"
                }
            ]
        }
    ],
    toppings: [
        {
            isRadio: false,
            title: "choose topping(s)",
            items: [
                {
                    name: "Red Pepper"
                },
                {
                    name: "Onion"
                },
                {
                    name: "Grilled Mushroom"
                },
                {
                    name: "Extra Cheese"
                },
                {
                    name: "Black Olive"
                }
            ]
        }
    ]
};
const theme = createTheme();


const ItemForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState()
    const dispatch = useDispatch();
    const isUser = useSelector((state) => state.auth.authData);
    const isError = useSelector((state) => state.auth.errors);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch({ type: ADD_ITEM, payload: { item: formData } });
        setFormData(initialState)
    };
    useEffect(() => {
        if (isError)
            setError(isError);
    }, [isError])
    console.log("inAuth: ", error, isError, isUser);


    return (
        !isUser ?
            <Container component="main" maxWidth="xs">
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <h3>Add Pizza Items Here..</h3>
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Box component="form"
                                onSubmit={handleSubmit}
                                noValidate sx={{ mt: 1 }}>
                                <>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Enter Pizza Name"
                                        name="name"
                                        autoComplete=""
                                        type="text"
                                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="description"
                                        label="Enter Description "
                                        name="description"
                                        onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }}
                                        autoComplete=""
                                        type="text" />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="img_url"
                                        label="Enter Image Url"
                                        name="img_url"
                                        onChange={(e) => { setFormData({ ...formData, img_url: e.target.value }) }}
                                        autoComplete=""
                                        type="text" />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="price"
                                        label="Enter Item Price"
                                        name="price"
                                        onChange={(e) => { setFormData({ ...formData, price: e.target.value }) }}
                                        autoComplete=""
                                        type="number" />
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                            value={formData.isVeg}
                                            onChange={(e) => setFormData({ ...formData, isVeg: e.target.value })}
                                        >
                                            <FormControlLabel value={true} control={<Radio />} label="Veg" />
                                            <FormControlLabel value={false} control={<Radio />} label="Non-Veg" />
                                        </RadioGroup>
                                    </FormControl>

                                </>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    ADD AN ITEM
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Container >
            : <Navigate to="/auth" />
    );
};

export default ItemForm;
