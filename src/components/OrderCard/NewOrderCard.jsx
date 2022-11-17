import React from 'react'
import nonVeg from '../../assets/veg.png';
import veg from '../../assets/non-veg.png';

const NewOrderCard = ({ allItems }) => {
    return (
        <div>
            {allItems.items.map((item, index) =>
                <div className='outer' key={index}>
                    <div className='itemDiv'>
                        <div className="Itype">
                            <img src={item.isVeg ? veg : nonVeg} alt="veg" />
                        </div>
                        <div className='rightSec'>
                            <div className='first'>
                                <div className='div1'>
                                    <h3>{item.name}</h3>
                                    <p>Size: {item.size.size}</p>
                                    <p>Toppings: {item.toppings.name} </p>
                                </div>
                                <div className='div2'>
                                    <h5>{item.quantity} X ₹{item.amount}  :  ₹{item.finalAmount}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default NewOrderCard