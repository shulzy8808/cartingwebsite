import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";
const Productcontainer=styled.div`
display: flex;
flex-wrap: wrap;

`



const Products = () => {
  return (
   <Productcontainer>
    {products.map(item=>(
        <Product item= {item} />

    ))}
   </Productcontainer>
  )
}

export default Products
