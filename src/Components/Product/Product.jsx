import React from "react";
import './Product.css';
import partition from '../../assets/partition.jpg'; 
import ofa from '../../assets/ofa.jpeg'; 
import bed from '../../assets/bed.jpeg'; 

const Product = () => {
  return (
    <div className='Products'> 
      <div className="product"> 
        <img src={partition} alt="Partition" />
      </div>
      <div className="product">
        <img src={ofa} alt="ofa" /> 
      </div>
      <div className="product">
        <img src={bed} alt="Bed" />
      </div>
    </div>
  );
}

export default Product