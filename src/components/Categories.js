import styled from "styled-components";
import { Link } from "react-router-dom";
import { categories } from "../data";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



const Categorycontainer = styled.div`
display: flex;
width: 100%;
height:70vh;

`
const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`
const Categorytitle = styled.h1`
color: white;
`

const Categorybtn = styled.button`
padding: 1em;
border: none;
cursor: pointer;

background-color: white;
color: grey;

&: hover{
  background-color: #D8E1E3;
  transform: scale(1.1);
  transition: all .3s ease-in
}
`

const Categorybox = styled.div`
flex: 1;
align-items: center;
margin: 3px; 
position: relative;
`

const Categorydesc = styled.div`
position: absolute;
text-align: center;
justify-content: center;
display:flex;
align-items: center;
top:0;
left:0;
width: 100%;
height: 100%;
flex-direction: column;

`


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getCategories = async () => {
    try {
      setLoading(true);
      const categoriesData = await axios.get("http://localhost:3001/api/categories");
        setLoading(false);
        setCategories(categoriesData.data);
      console.log(categories);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories()
  }, []);

  return (
    <Categorycontainer>
      {
      isLoading ? <> PLEASE WAIT... </> 
      :
      categories.map((category)=>(
        <Categorybox>
          <Image src={category.img}/>
          <Categorydesc>
            <Categorytitle>
              {category.name}
            </Categorytitle>
            <Link to={category.link}>
              <Categorybtn>
                SHOP NOW
              </Categorybtn>
            </Link>
          </Categorydesc>
        </Categorybox>
                
    ))}
</Categorycontainer>
  )
}

export default Categories
