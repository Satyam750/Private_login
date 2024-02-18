import React from 'react'
import { Use_r_state } from '../context/Store'
import Header from './Header'

const Cart = () => {
  const {products:{cart}, dispatch} =  Use_r_state()
//   console.log(cart);

 const Subtotal = (a,b) =>{
    return a*b;
 }

 const {totalitems,totalprice} = cart.reduce((acc,cur) =>{
     acc.totalitems += cur.qty;
     acc.totalprice += cur.price*cur.qty;
     
    return acc;
 },{
    totalitems:0,
    totalprice:0,
 })


  return (

  <>
     
     <Header/>

    <section class="h-[100%] bg-gray-100 py-12 sm:py-16 lg:py-20 ">
        {cart.length > 0 ? 
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>

    <div class="mx-auto mt-8 max-w-md md:mt-12">
      <div class="rounded-3xl bg-white shadow-lg">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
                        {cart.map((item) => (

                          <li key={item.id} class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
                  <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">{item.qty}</span>
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={item.images[0]} alt="" />
                </div>
                     
                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{item.title}</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${(Subtotal(item.price,item.qty))}</p>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900" onClick={()=>{
                        dispatch({
                            type:"REMOVE_CART",
                            payload:item
                        })
                    }}>
                      <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <hr class="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />
              </li>
              
                        ))}
            </ul>
          </div>

            


          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400"></span>{totalitems}</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span> {totalprice}</p>
          </div>

      
        </div>
      </div>
    </div>
  </div>
       :  <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900 bg-gray-500 px-[3vw] rounded-2xl py-[2vw]">Your Cart Empty</h1>
    </div>
 }
</section>

  </>
  )
}

export default Cart