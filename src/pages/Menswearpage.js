import styled from "styled-components"
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Productfilter from "../components/Productfilter";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Menswear from "../components/Menswear";

const Menswearpage = () => {
  return (
  <div> 
    <Announcements/>
      <Navbar/>
          <Productfilter/>
        <Menswear/>
      <Newsletter />
    <Footer/>
  </div>
  )
}

export default Menswearpage;
