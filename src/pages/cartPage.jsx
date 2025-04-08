import React, { useState } from 'react';
import CartItems from '../components/CartepageComponent/cartItems';
import BookingPopup from '../components/CartepageComponent/BookingPopup';

function CartPage({ cartItemslist, setcartItemslist }) {
  const [ShowBooking, setShowBooking] = useState(false);

  return (
    <div className="p-5 min-h-screen relative">
      {ShowBooking && cartItemslist.length > 0 && (
        <BookingPopup setShowBooking={setShowBooking} setcartItemslist={setcartItemslist}/>
      )}
      <CartItems 
        cartItemslist={cartItemslist} 
        setcartItemslist={setcartItemslist} 
        setShowBooking={setShowBooking} 
      />
    </div>
  );
}

export default CartPage;