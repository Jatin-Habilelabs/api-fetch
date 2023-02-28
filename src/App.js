import React, { useEffect, useState } from 'react'
import {ApiFetch} from './Component/ApiFetch'
import axios from 'axios'
import './Component/ApiFetch.css'

function App() {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const data = await axios.get('https://dummyjson.com/products/');
    if (data.status === 200) {
      setProduct(data.data.products)
    }
  };
  useEffect(() => {
    getProduct() 
  }, [])


    return (
      <div className='component'>
      
        <ApiFetch product={product} />
  

      </div>
      );

}

export default App;
