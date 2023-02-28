import styled from "styled-components"
import { categories } from "../data"



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


const category = () => {
  return (
    <Categorycontainer>
        {categories.map((item)=>(
    <Categorybox>
<Image src={item.img}/>
<Categorydesc>
    <Categorytitle>
    {item.title}
</Categorytitle>
<Categorybtn>SHOP NOW</Categorybtn>
</Categorydesc>
 </Categorybox>
    
    ))}
</Categorycontainer>
  )
}

export default category
