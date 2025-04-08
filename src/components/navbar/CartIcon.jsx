import React from 'react';
import { Link } from 'react-router-dom';

function CartIcon({ cartItemslist }) {
    return (
        <div className="relative">
            {/* Cart Icon */}
            <Link to="/Cart">
                <i className="fa-solid fa-cart-shopping text-xl"></i>
            </Link>

            {/* Red Dot Notification */}
            {cartItemslist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center select-none">
                    {cartItemslist.length}
                </span>
            )}
        </div>
    );
}

export default CartIcon;