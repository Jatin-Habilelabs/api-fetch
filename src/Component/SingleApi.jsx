import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

export const SingleApi = () => {
    const { id } = useParams();
    const [singleproduct, setSingleProduct] = useState([]);
    const getSingleProduct = async () => {
        const singledata = await axios.get(`https://dummyjson.com/products/${id}`).then((val) => {
            console.log(val);
            if (val.status === 200) {
                setSingleProduct(val.data)
            }
        })

    };
    useEffect(() => {
        getSingleProduct()
    }, [])

    return (
        <>
            <div className='product'>

                <div className='productCard' key={id}>
                    <div className='productImage'>
                        <div className='Image' style={{ backgroundImage: `url(${singleproduct.thumbnail})` }}>

                        </div>
                    </div>
                    <div className='productInfo'>
                        <p className='productTitle'>{singleproduct.brand}</p>
                        <div className='productDetails'>
                            <div className="productRating">
                                

                                <span>Rating : {(Math.round(singleproduct.rating))}⭐</span>
                            </div>
                            <p className="productPrice">${singleproduct.price}</p>

                        </div>
                        <div className="button">
                            <button className="productBuy">BUY</button>
                        </div>

                    </div>

                </div>

                <div className='aboutData'>
                    <div className='brandName'>
                        <span> Our Product Name :</span>
                        <span>
                            {singleproduct.brand}
                        </span>
                    </div>
                    <div className='aboutBrand'>
                        <div><p className='aboutProductTitle'>About Our Product : </p>
                           
                                </div>
                        <div> <p>{singleproduct.description}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
