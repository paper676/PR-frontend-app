import React from 'react';
import MenueCard from './MenueCard';
import { Sub_Servces_Providers } from '../pagePart/asserts';

function ProvidersMenue({ Providercategory, Subservice, setcartItemslist, cartItemslist }) {
    const filteredProviders = Sub_Servces_Providers.filter(item =>
        item.service_category === Providercategory &&
        item.service_sub_name === Subservice
    );
    return (
        <div>
            {filteredProviders.length > 0 ? (
                <div className="flex gap-4 flex-wrap">
                    {filteredProviders.map((item, index) => (
                        <MenueCard
                            key={index}
                            params={{
                                provider_name: item.service_provider_name,
                                name: item.service_sub_name,
                                service: item.service_category,
                                IMGurl: item.service_image
                            }}
                            setcartItemslist={setcartItemslist}
                            cartItemslist={cartItemslist}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 min-h-screen flex justify-center pt-20">No near by providers available for {Subservice} in {Providercategory}.</p>
            )}
        </div>
    );
}

export default ProvidersMenue;