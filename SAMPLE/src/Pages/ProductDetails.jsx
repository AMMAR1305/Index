import {useParams} from 'react-router-dom'
import {useState , useEffect} from "react"
const ProductDetails = () => {

    const [product , setProduct] = useState({})

    const {id} = useParams()

    // const  product = products.find((p) => p.id === Number(id))
    
    useEffect(() =>{
          fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => {console.log(data)
              setProduct(data)})
            },[])
  return (
    <div>
          <h1>Products Details</h1>
          <h3>Name :{product.title}</h3>
          <h3>price : {product.price}</h3>
          <h3>Category : {product.category}</h3>
          <h3>Description : {product.description}</h3>
    </div>
  )
}

export default ProductDetails