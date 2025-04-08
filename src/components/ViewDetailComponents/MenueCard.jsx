import React, { useEffect,useState  } from 'react';
import { Star } from 'lucide-react';

function MenueCard({ params, setcartItemslist, cartItemslist }) {
    const [addedToCart, setAddedToCart] = useState(false);
    const addToCart = () => {
        setcartItemslist((prevItems) => [...prevItems, params]);
        setAddedToCart(true);

        setTimeout(() => {
            setAddedToCart(false);
        }, 1500);
    };

    // Debugging: Check if `cartItemslist` updates properly
    useEffect(() => {
        console.log("Updated cartItemslist:", cartItemslist);
    }, [cartItemslist]);  // Runs when `cartItemslist` changes
    return (
        <div className='transform transition duration-250 bg-zinc-100 rounded-md mb-5 mt-2'>
            <div className="p-4">
                <  div className='h-[12rem] w-[12rem] rounded-[1rem] overflow-hidden mb-2 mt-2'>
                    <img className='w-full h-full object-cover' src={params.IMGurl} alt="catgo" />
                </div>
                <div className='px-2 flex items-center justify-between mt-5'>
                    <h3 className='text-zinc-900 font-medium'>{params.provider_name}</h3>
                    <h3 className='text-zinc-400 font-tight flex w-[100px]'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </h3>
                </div>
                <h3 className='text-zinc-900 font-light text-xs mb-2 mt-2 flex gap-2 flex-wrap'>
                    <p className='bg-gray-100 px-2 py-1 rounded-[5rem] border-[1px] border-zinc-300 tracking-tighter'>{params.name}</p>
                    <p className='bg-gray-100 px-2 py-1 rounded-[5rem] border-[1px] border-zinc-300 tracking-tighter'>{params.service}</p>
                </h3>
                {
                    addedToCart ?
                    <div className="w-full h-[28px] mt-5 bg-green-600 text-gray-200 text-sm mt-2 transition duration-300 ease-in rounded-md">
                        <p className='p-[2px] flex items-center justify-center font-medium'>Added to cart!</p>
                    </div> :
                    <div className='flex items-center gap-2 mb-1 h-10'>
                        <button className='bg-red-400 rounded-md px-[2rem] py-[0.3rem] mt-1 text-sm tracking-tighter'>View</button>
                        <button className='bg-red-400 rounded-md px-[2rem] py-[0.3rem] mt-1 text-sm tracking-tighter hover:bg-zinc-400 hover:border-[0.5px] border-zinc-500 transition duration-300 ease-in-out' onClick={addToCart}>Add</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default MenueCard