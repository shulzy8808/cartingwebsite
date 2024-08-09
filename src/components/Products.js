
import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import {products} from '../data';
import axios from "axios";
import { useEffect } from "react";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Productdesc= styled.div`
opacity: 0;
position: absolute;
top:0;
left:0;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: rgba(0,0,0,0.3);
width:100%;
height:100%;

`
const Productcontainer = styled.div`
flex: 1;
display: flex;
min-width: 300px;
height: 450px;
margin:1em;
position:relative;


&:hover ${Productdesc}{
    cursor: pointer;
    opacity: 1;
}
`
const Icon = styled.div`
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-items: center;
margin: 4px;
padding:1em;


&: hover{
    cursor: pointer;
    background-color: #D8E1E3;
    transition: all .5s ease-in-out;
    transform: scale(1.1);
    
}


`

const Productimg = styled.img`
width: 100%;
object-fit: cover;
height: 100%;
`

const Productname = styled.h1`
text-align: center;
color: white;`

const Iconic = styled.div`
display:flex;
align-items: center;
justify-content: center;

`


const Products = () => {
    const getProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/products");
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
    }

    useEffect(() => {
        getProducts()
}, [])
    return (
    <Container>
        {products.map((item)=> (
                <Productcontainer>
                    <Productimg src={item.img} />
                        <Productdesc>
                                <Productname>
                                    {item.title}
                                </Productname>
                            <Iconic>
                                <Icon>
                                    <ShoppingCartOutlinedIcon />
                                </Icon>
                                <Icon>
                                    <FavoriteBorderIcon />
                                </Icon>
                                <Icon>
                                    <SearchIcon />
                                </Icon>
                            </Iconic>
                        </Productdesc>
                </Productcontainer>
            ))}
        </Container>
    )
}

export default Products
