import styled from "styled-components"
import Announcements from "../components/Announcements"
import Navbar from "../components/Navbar"
import Productfilter from "../components/Productfilter"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
const Product = () => {
  return (
  <div> 
    <Announcements />
  <Navbar/>
<Productfilter />
<Products/>
<Newsletter />
<Footer />
  </div>
  )
}

export default Product
