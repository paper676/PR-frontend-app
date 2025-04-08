import React from 'react';

function CartPage({ cartItemslist, setcartItemslist,setShowBooking }) {

    // Function to remove an item from the cart
    const removeFromCart = (index) => {
        setcartItemslist(cartItemslist.filter((_, i) => i !== index));
    };

    return (
        <div className='p-10'>
            <div className='flex gap-4'>
                {/* Left Side - Cart Items */}
                <div className='p-4 w-3/4 bg-zinc-100 h-[30rem] rounded-md'>
                    <h2 className='text-xl font-medium'>Cart Items</h2>
                    <hr className='border-zinc-400 border-1 my-2'/>
                    <div className="h-[25rem] overflow-y-scroll scrollbar-hidden hover:scrollbar-custom">
                        {/* Check if cart is empty */}
                        {cartItemslist.length === 0 ? (
                            <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
                        ) : (
                            cartItemslist.map((item, index) => (
                                <div key={index} className='mt-1 mb-1 p-2 border-[0.5px] w-[50rem] h-[5rem] border-zinc-600 rounded-md flex justify-between items-center'>
                                    <div>
                                        <h3 className='text-lg font-semibold'>{item.provider_name}</h3>
                                        <p className='text-sm text-gray-600'>{item.name} - {item.service}</p>
                                    </div>
                                    <button 
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                                        onClick={() => removeFromCart(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Right Side - Order Summary */}
                <div className='p-4 w-1/4 bg-zinc-200 h-[30rem] rounded-md'>
                    <h1 className='text-xl font-medium'>Order Summary</h1>
                    <hr className='border-zinc-500 my-2' />
                    <div className='mt-2 h-[21.5rem]'>
                        <p className='text-zinc-800'>Total items: {cartItemslist.length}</p>
                    </div>
                    <button className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md hover:bg-blue-700'
                        onClick={()=>setShowBooking(true)}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;