import { Link } from "react-router-dom" 
import {useState, useEffect} from "react"

const Products = () => {

    const [products , setproducts] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {console.log(data)
      setproducts(data)})
    },[])
  
  return (

    <div>
        <h1>Products</h1>
        {products.map((product) => (
            <div key = {product.id}>
            <h4>{product.title}</h4>    
            <h4>{product.price}</h4>
            <Link to ={`/products/${product.id}`}>View Details</Link>
            </div>
        ))}
    </div>
  )
}

export default Products