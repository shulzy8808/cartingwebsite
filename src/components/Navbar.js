import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';


const Navcontainer = styled.div`
display: flex;
margin-bottom: -1em;
padding: .4em;

`
const Left = styled.div`
flex: 1;

padding: 10px 0px;
`
const Center = styled.div`
flex: 1;
text-align: center;


`
const Logo= styled.h1`
font-weight: bold;
margin-top: 0em;

`
const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`
const Language = styled.div`
    margin-left: 10px;
    
`
const Searchbar = styled.div`
    border: .5px solid black;
    margin-left: 3em;
    padding:.2em;
    display:flex;
    align-items: center;
    color: grey;
    cursor: pointer;
`
const Leftwrapper = styled.div`
    display: flex;
    align-items: center;
    
`
const Searchtext = styled.input`
    border: none ;
    padding: .3em
`

const Navregister = styled.p`
margin-right:5em;
`
const Navsignup = styled.p`
margin-right:4em;
`
const Rightwrapper = styled.div`
 display: flex;
 align-items: center;
 padding-right: 1.3em;
 cursor: pointer;
 margin-top: -.8em;

`


const Navbar = () => {
return (
<Navcontainer>
<Left>
<Leftwrapper> 
<Language>
    <select>
    <option>EN </option>
    <option>ES</option>
    </select>
    </Language>
    <Searchbar>
        <Searchtext placeholder='Search'/>
    <SearchIcon/>
    </Searchbar>
    </Leftwrapper>
</Left>
<Center>
 
 <Logo>Olivia&Marcus.</Logo>  
</Center>
<Right>
   <Rightwrapper>
    <Navregister>
    REGISTER
    </Navregister>
    <Navsignup>
        SIGNUP
        </Navsignup>
       <Badge badgeContent={2} color='primary'>
        <ShoppingCartOutlinedIcon/>
        </Badge> 
        </Rightwrapper>
</Right>
</Navcontainer>
)
}

export default Navbar
