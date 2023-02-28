import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {slideItems} from '../data'
import { useState } from "react";
const Slidecontainer = styled.div`
width: 100%;
height: 100vh;
position: relative;
display: flex;
overflow: hidden;
`
const Arrow = styled.div`
border: 1px solid none;
border-radius: 50%;
background-color: grey;
height: 40px;
width: 40px;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.3;
z-index: 2;
`
const Slidewrapper = styled.div`
height:100%;
display: flex;
transform: translateX(${(props)=>props.slideIndex * -100}vw);
transition: all 1.5s ease;

`
const Slideshow = styled.div`
    display: flex;
    height: 100vh;
    width:100vw;
    align-items: center;
    background-color: #${props=> props.bg};
    
`

const Image = styled.div`
flex: 1;
height: 100%;
background-color: #${props=> props.bg};
align-items: center;
`
const Imgcontainer = styled.img`
height: 90%;
padding-left: 5em;
padding-top: 0em;
`
const Textcontainer = styled.div`
flex: 1;
background-color:#${props=> props.bg};
text-align: center;

padding-right: 2.5em ;
letter-spacing: .2em;
`
const Texthead = styled.h1`
font-weight: bold;
font-size: 2em;
`
const Textparagraph = styled.p`
font-weight: light;
font-size: 1.5em;
`
const Textbtn = styled.button`
    padding:1em;
    background-color: transparent;
    cursor: pointer;
`


const Slides = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setslideIndex (slideIndex > 0?  slideIndex-1: 2)
        }else{
            setslideIndex (slideIndex < 2?  slideIndex+1: 0)
        }
    }

  return (
  <Slidecontainer>
  
  <Arrow  direction= "left" onClick={() => {handleClick('left')}}>
    <ArrowLeftIcon fontSize="large"/>
  </Arrow>
  <Slidewrapper slideIndex={slideIndex}>
    {slideItems.map((item) => (
        <Slideshow bg={item.bg}>
        <Image bg={item.bg}> 
        <Imgcontainer src= {item.img} /></Image>
        <Textcontainer bg= {item.bg}>
        <Texthead>
           {item.texthead}
        </Texthead>
        <Textparagraph>
        {item.textp}   
        </Textparagraph>
        <Textbtn>
            SHOP NOW
        </Textbtn>
        </Textcontainer>
        </Slideshow>
    ))}


</Slidewrapper>

  <Arrow  direction= "right" onClick={() => {handleClick('right')}}>
    <ArrowRightIcon fontSize="large"/>
  </Arrow>


  </Slidecontainer>
  )
}

export default Slides
