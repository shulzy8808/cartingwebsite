import styled from "styled-components"
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Productfilter from "../components/Productfilter";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Womenswear from "../components/Womenswear";

const Womenswearpage = () => {
  return (
  <div> 
    <Announcements/>
      <Navbar/>
          <Productfilter/>
        <Womenswear/>
      <Newsletter />
    <Footer/>
  </div>
  )
}

export default Womenswearpage;
