import React, { useEffect, useState } from 'react'
import { Use_r_state } from '../context/Store'
import Header from './Header';

const Product = () => {
    const { products: { serchkey }, dispatch } = Use_r_state()
    const { filter: { sort}, dis } = Use_r_state();

    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json()
                setProduct(data.products)
                // console.log(data);
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchProduct()
    }, [])
  


    const filtered_product = () => {
        let newProduct = product
        if (sort) {
            newProduct = newProduct.sort((a, b) => {
               return sort === "low" ? a.price - b.price : b.price - a.price
            })
        }
        return newProduct
    }

    return (
        <>
        <Header/>
            <div className='flex items-center justify-center bg-gray-800 p-4  gap-3'>
                <div className='flex items-center justify-center gap-3'>
                    <span>Ascending</span>
                    <input type="radio" value="low" name="radio-10" className="radio checked:bg-green-500" 
                        onChange={(e) => {
                            dis({
                                type: "Sort",
                                payload: e.target.value
                            })
                        }}

                    />
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <span>Descending</span>
                    <input type="radio" value="high" name="radio-10" className="radio checked:bg-red-500" 
                        onChange={(e) => {
                            dis({
                                type: "Sort",
                                payload: e.target.value
                            })
                        }}
                    />
                </div>

            </div>


            <div className=' flex flex-wrap gap-7 pl-[9vw] pt-[3vw]'>
                {filtered_product().filter(i => i.title.toLowerCase().includes(serchkey))
                    .map((item) => (


                        <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a className='flex items-center justify-center'>
                                <img className="p-8 rounded-t-lg h-[20vw]" src={item.images[0]} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a >
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                </a>

                                <div className="flex ">
                                    <span className="font-bold text-2xl text-gray-900 dark:text-white">${item.price}</span>
                                    <button className='btn w-[15vw]' onClick={() => {
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: item
                                        })
                                    }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>

                    ))}
            </div>
        </>
    )
}

export default Product