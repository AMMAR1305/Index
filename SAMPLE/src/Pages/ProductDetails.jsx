import {useParams} from 'react-router-dom'
const ProductDetails = () => {

     const products = [
        {id : 1 , name : "Laptop" , price : "50000", description :"High-performance laptop with latest processor and graphics"},
        {id : 2 , name : "Mobile" , price : "20000", description :"Latest smartphone with advanced camera and features"},
        {id : 3 , name : "Tv" , price : "30000", description :"Smart TV with 4K resolution and streaming apps"},
        {id : 4 , name : "Fridge" , price : "25000", description :"Energy-efficient refrigerator with large storage capacity"}
    ]
    const {id} = useParams()
    const  product = products.find((p) => p.id === Number(id))
  return (
    <div>
          <h1>Products Details</h1>
          <h2>Name :{product.name}</h2>
          <h4>price : {product.price}</h4>
          <h4>Description : {product.description}</h4
          
          >
    </div>
  )
}

export default ProductDetails