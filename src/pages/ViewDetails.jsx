import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProvidersMenue from '../components/ViewDetailComponents/providersMenue';

function ViewDetails({cartItemslist,setcartItemslist}) {
  const { service, name } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='p-10 min-h-screen'>
      <h1 className="text-xl font-bold mb-4">
        Service Providers for {service} - {name}
      </h1>
      <ProvidersMenue Providercategory={service} Subservice={name} setcartItemslist={setcartItemslist}/>
    </div>
  );
}

export default ViewDetails;