import React from 'react'
import { useNavigate} from 'react-router-dom'

export const ApiFetch = (props) => {
    const { product } = props;
    let navigate = useNavigate();
   
    return (
        <>

            {product.map((data, index) => (
                <div className='productCard' key={index}>
                    <div className='productImage'>
                        <div className='Image' style={{ backgroundImage: `url(${data.thumbnail})` }}>

                        </div>
                    </div>
                    <div className='productInfo'>
                        <p className='productTitle'>{data.title}</p>
                        <div className='productDetails'>
                            <div className="productRating">
                                <span>{Array(Math.round(data.rating)).fill("").map((val)=>{
                                    return "⭐"

                                })}</span>
                                <span>{Math.round(data.rating)}</span>
                            </div>
                            <p className="productPrice">${data.price}</p>

                        </div>
                        <div className="button">
                            <button className="productBuy" onClick={() => (navigate(`/${data.id}`))}>BUY</button>
                        </div>

                    </div>

                </div>
            ))}
        </>
    )
}
