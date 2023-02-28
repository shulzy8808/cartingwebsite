import styled from "styled-components"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footercontain = styled.div`
display: flex;
background-color: #E3E8ED;
padding: 2em;
padding-top:1em;
align-items: center
`
const About = styled.div`
flex:1;
`
const Aboutheader = styled.h1`

`
const Abouticons = styled.div`
border: 1px solid none;
padding: .4em;
border-radius: 50%;
margin-right: 1em;
background-color:#${props=> props.bg};
color: white;
&: hover{
    cursor: pointer;
    background-color:#${props=>props.bgs};
    transition: all 0.5s ease-in;
    transform: scale(1.1)
}
`
const Aboutbody = styled.p`
 cursor: pointer;

 &: hover{
    color: grey;
 }
`
const Icons = styled.div`
display: flex;
align-items: center;
`
const Links = styled.div`
flex:1;
`
const Linkhead= styled.h3`

`
const Linklist = styled.ul`
flex: 1;
padding: 0;
`

const Linklists = styled.ul`
padding: 0;
flex: 1;
`
const Linkcontains = styled.div`
display: flex;
`


const Linkbody = styled.li`
    list-style: none;
    margin-bottom: 10px;
    cursor: pointer;
    
    &: hover{
        color: grey;
     
    }
  
`

const Contact = styled.div`
flex:1;
`
const Contacthead = styled.h3``
const Contactbody = styled.p`
    display: flex;
    cursor: pointer;

    &: hover{
        color: grey;
    }
`
const Contactimg = styled.img`
width: 50%;
margin-top:0em;
cursor: pointer;
`


const Footer = () => {
  return (
   <Footercontain>
<About>
    <Aboutheader>
    OLIVIA&MARCUS.
    </Aboutheader>
    <Aboutbody>
    About us
    </Aboutbody>
    <Aboutbody>
    Careers at OLIVIA&MARCUS
    </Aboutbody>
    <Aboutbody>
    Corporate responsibility
    </Aboutbody>
    <Aboutbody>
    Investors' site
    </Aboutbody>
    <Icons>
    <Abouticons bg='5069AB' bgs='7698FF'>
        <FacebookIcon/>
        </Abouticons>
        <Abouticons bg='5DADDE' bgs='69C8FF'>
        <TwitterIcon />
        </Abouticons>
        <Abouticons bg='53A449' bgs='7FFF6B'>
        <WhatsAppIcon/>
        </Abouticons>
        <Abouticons bg='3577B0' bgs='4CACFF'>
        <LinkedInIcon/>
    </Abouticons>
    </Icons>
    </About>
    <Links>
        <Linkhead>Useful Links</Linkhead>
        <Linkcontains>
         <Linklist>
    <Linkbody>
    Home
    </Linkbody>
    <Linkbody>
    Man Fashion
    </Linkbody>
    <Linkbody>
    Accesories
    </Linkbody>
    <Linkbody>
    Order Tracking
    </Linkbody>
    <Linkbody>
    Wishlist
    </Linkbody>
    </Linklist>
    <Linklists>
    <Linkbody>
    Cart
    </Linkbody>
    <Linkbody>
    Woman Fashion
    </Linkbody>
    <Linkbody>
    My Account
    </Linkbody>
    <Linkbody>
    Wishlist
    </Linkbody>
    <Linkbody>
    Terms
    </Linkbody>
    </Linklists>
    </Linkcontains>
    </Links>
<Contact>
   <Contacthead>Contact</Contacthead>
   <Contactbody>
    <LocationOnIcon style={{marginRight:'.2em', marginBottom: '.1em'}}/> 5B Fire Corpoartion Rd, Victoria Island.
   </Contactbody>
   <Contactbody>
<PhoneEnabledIcon style={{marginRight:'.2em', marginBottom: '.1em'}}/>  +234 806 818 2118
   </Contactbody>
   <Contactbody>
<EmailOutlinedIcon style={{marginRight:'.2em', marginBottom: '.1em'}}/> isholaolivia@gmail.com
   </Contactbody>
   <Contactimg src='/img/credit card.jpeg' />
    </Contact>
   </Footercontain>
  )
}

export default Footer
