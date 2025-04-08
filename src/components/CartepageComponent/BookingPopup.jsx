import React, { useState } from 'react';

function BookingPopup({ setShowBooking ,setcartItemslist}) {
    const [step, setStep] = useState(1);
    const [noofInfos, setnoofInfos] = useState(0);
    const [cantSubmit, setcantSubmit] = useState(false);
    const [cantSubmit2, setcantSubmit2] = useState(false);
    const [upiProvided, setupiProvided] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        expectedTime: '',
        paymentMode: '',
        UPIid: '',
    });

    const closeAndClearCart = () => {
        setcartItemslist([]); // Clear the cart
        setShowBooking(false); // Close the popup
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setnoofInfos((prev) => prev + 1);
    };
    const handleChange2 = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showAlerts=()=>{
        setcantSubmit(true)
    }
    const showAlerts2=()=>{
        setcantSubmit2(true)
    }
    const handlePaymentSelection = (mode) => {
        setFormData({ ...formData, paymentMode: mode });
        setStep(3); // Move to confirmation step
    };

    return (
        <div className='absolute inset-0 bg-zinc-900 bg-opacity-40 flex justify-center items-center rounded-lg'>
            <form className='w-[max(26vw,280px)] min-h-[50vh] bg-white flex flex-col gap-4 p-6 rounded-lg text-gray-700 relative'>
                
                {/* Close Button */}
                <i onClick={() => setShowBooking(false)} className="fa-solid fa-xmark text-xl hover:text-zinc-900 hover:cursor-pointer absolute top-4 right-4"></i>

                {/* Step 1: User Details */}
                {step === 1 && (
                    <>
                        <h2 className='text-lg font-semibold'>Enter Your Details</h2>
                        <input type="text" name="name" placeholder="*Full Name" value={formData.name} onChange={handleChange} className='border p-2 rounded' required/>
                        <input type="text" name="address" placeholder="*Address" value={formData.address} onChange={handleChange} className='border p-2 rounded' required />
                        <input type="tel" name="phone" placeholder="*Phone Number" value={formData.phone} onChange={handleChange} className='border p-2 rounded' required />
                        <h4 className='font-medium text-sm text-zinc-500'>*Expected Time to Reach:</h4>
                        <input type="time" name="expectedTime" placeholder="Expected Time" value={formData.expectedTime} onChange={handleChange} className='border p-2 rounded' required />
                        {cantSubmit && <p className='text-red-600 text-xs'>*Fill All Details</p>}
                        <button type="button" onClick={noofInfos>4?() => setStep(2):showAlerts} className='bg-blue-500 text-white py-2 rounded'>Next</button>
                    </>
                )}

                {/* Step 2: Payment Mode Selection */}
                {step === 2 && (
                    <>
                        <h2 className='text-lg font-semibold'>Select Payment Mode</h2>
                        <button type="button" onClick={() => handlePaymentSelection('Cash')} className='bg-green-500 text-white py-2 rounded'>Cash on Delivery</button>
                        <button type="button" onClick={() => handlePaymentSelection('Online')} className='bg-blue-500 text-white py-2 rounded'>Pay Online</button>
                    </>
                )}

                {/* Step 3: Payment & Confirmation */}
                {step === 3 && (
                    <>
                        <h2 className='text-lg font-semibold'>Confirm Order</h2>
                        {formData.paymentMode === 'Online' ? (
                            <>
                                <p>Scan the QR code below And submit UPI id to complete payment:</p>
                                <img src="https://via.placeholder.com/150" alt="QR Code" className="w-40 h-40 mx-auto" />
                                <input type="tel" name="UPIid" placeholder="*UPI Number" value={formData.UPIid} onChange={handleChange2} className='border p-2 rounded' required />
                                {cantSubmit2 && <p className='text-red-600 text-xs'>*Fill All Details</p>}
                            </>
                        ) : (
                            <>
                                <p>Pay in cash upon service delivery.</p>
                            </>
                        )}
                        <button type="button" onClick={formData.UPIid==='' && formData.paymentMode === 'Online'?showAlerts2:() => setStep(4)} className='bg-green-500 text-white py-2 rounded'>Confirm Booking</button>
                    </>
                )}

                {/* Step 4: Booking Confirmation */}
                {step === 4 && (
                    <>
                        <h2 className='text-lg font-semibold text-center text-green-600 mt-20'>🎉 Order Booked Successfully! 🎉</h2>
                        <button type="button" onClick={() =>closeAndClearCart()} className='bg-blue-500 text-white py-2 rounded'>Close</button>
                    </>
                )}
            </form>
        </div>
    );
}

export default BookingPopup;