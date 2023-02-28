import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

const Newslettercontainer = styled.div`
background-color: pink;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5em;
`
const Newslettertitle = styled.h1`
font-size: 6em;
margin-bottom: 0;
`
const Newssend= styled.div`
    display: flex;
    border: 1px solid none;
    padding: .5em;
    width: 70%;
    justify-content: space-between;
    padding:0;
`
const Newsicon= styled.div`
    border:1px solid none;
    color: white;
    background-color: lightblue;
    display: flex;
    align-items: center;
    padding:10px;
    cursor: pointer;

    &: hover{
        background-color: #B1EAF1;
    }
`
const Newsletterbody = styled.p`
font-size: 1.9em;
margin-top: 1em;
font-weight: lighter;
letter-spacing: .12em;
`
const Newslettermail = styled.input`
padding: .8em;
border: none;
margin: 0;
flex:1;
`


const Newsletter = () => {
  return (
   <Newslettercontainer>
    <Newslettertitle>
        Newsletter
    </Newslettertitle>
    <Newsletterbody> 
Get updates about your latest fits from on here.
    </Newsletterbody>
    <Newssend>
        <Newslettermail placeholder="Enter your mail"/>
      <Newsicon> <SendIcon /></Newsicon>
    </Newssend>
    
   </Newslettercontainer>

  )
}

export default Newsletter
