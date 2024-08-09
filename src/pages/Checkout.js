import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Productcontainer = styled.div`
  display: flex;
  
`


const Productitem = styled.div`
  flex: 1;
`

const Productdesc = styled.div`
 flex: 1;
`
const Productimgcontainer = styled.div`
padding: 2em;


`

const Productimg = styled.img`
  width: 90%;
  height: 80vh;
  object-fit: cover;
`
const Producttitle = styled.p`
  font-weight: lighter;
  font-size: 40px;
`
const Productbody = styled.p`
  margin-right: 9em;
`
const Productprice = styled.span`
  font-size: 50px;
  font-weight: lighter;
`
const Productfilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Productcolor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Productcolortext = styled.p`
  font-size: 20px
`
const Productcolors = styled.div`
  border: 1px solid none;
  margin-left: .5em;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  background-color: ${props => props.colour}
`
const Productsize = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`
const Productsizetext = styled.p`
  font-size: 20px;
`
const Productsizes = styled.select`
   height: 2em;
   margin-left:1em;
`
const Option = styled.option`
  
`
const Prod = styled.div`
  display: flex;
  
`
const Productsum = styled.div`
  display: flex;
  align-items: center;
`
const Productnum = styled.span`
  border-radius: 8px;
  border: 1px solid black;
  padding: .7em;
`
const Productbtn = styled.button`
  margin-left: 4em;
  border: 2px solid teal;
  cursor: pointer;
  &: hover{
    background-color: lightgrey
  }
`


const Product = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      <Productcontainer> 
        <Productitem>
    <Productimgcontainer>
      <Productimg src='/img/crazy-jeans.jpeg' />
    </Productimgcontainer>
        </Productitem>
        <Productdesc>
        <Producttitle>
        Denim Crazy Jeans
        </Producttitle>
        <Productbody>
        Welcome to where we had a bit of wild to your fashion to make you look different from the rest, the alté wouldn't be complete without addding the denim stripped jeans along with whatever fits you wish to wear

        </Productbody>
        <Productprice>
       $20
        </Productprice>
        <Productfilter>
        <Productcolor>
        <Productcolortext>Color</Productcolortext> 
        <Productcolors colour='black'/>
        <Productcolors colour='blue'/>
        <Productcolors colour='grey'/>
        </Productcolor>
        <Productsize>
        <Productsizetext>Size</Productsizetext> 
        <Productsizes>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Productsizes> 
        </Productsize>
        </Productfilter>
       <Prod> <Productsum>
           <Remove/>
          <Productnum>1</Productnum>
          <Add/>
        </Productsum>
        <Productbtn>
          ADD TO CART
        </Productbtn>
        </Prod>
        </Productdesc>
      </Productcontainer>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product
