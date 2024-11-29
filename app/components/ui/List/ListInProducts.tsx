import DataReading from '@/app/hooks/data/DataReading'
import React from 'react'

function ListInProducts() {
    const { data, err, loading } = DataReading();
  return (
      <div className=' flex'>
          {data.map((products) => {
              return (
                  <div className=' flex-col mx-auto ' key={products._id}>
                      <h2>{products.productName}</h2>
                      <p>{products.description}</p>
                      <p>Price: {products.price}</p>
                      <p>Quantity: {products.image}</p>
                      <button>Add to Cart</button>
                  </div>
              )
          }) }
    </div>
  )
}

export default ListInProducts