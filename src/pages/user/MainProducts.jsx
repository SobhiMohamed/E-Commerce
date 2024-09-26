import React from 'react'
import Product from '../../componants/product'

const MainProducts = ({allProducts}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-12 mb-14'>
      <h1 className='text-[3rem] font-bold mb-12'>Products</h1>
      <div className='flex flex-wrap gap-6 justify-center items-center  '>
        {allProducts&&allProducts.map(({id,title,price,description,image})=>(
          <Product key={id} title={title}  price={price} description={description} image={image} />

        ))}
      </div>
    </div>
  )
}

export default MainProducts