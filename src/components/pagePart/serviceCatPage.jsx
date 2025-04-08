import React from 'react'
import ServiceCard from './serviceCard'
import { Sub_Servces_Categores } from './asserts';
function serviceCatPage(props) {
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        {Sub_Servces_Categores
          .filter(item => props.Category === "All" || item.service_category === props.Category) // Filtering by category
          .map((item, index) => (
            <ServiceCard
              key={index}
              IMGurl={item.service_image}
              name={item.service_sub_name}
              service={item.service_category}
            />
          ))
        }
      </div>
    </div>
  )
}
export default serviceCatPage