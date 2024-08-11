import styled from "styled-components"
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Productfilter from "../components/Productfilter";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Sportswear from "../components/Sportswear";

const Sportwearspage = () => {
  return (
  <div> 
    <Announcements/>
      <Navbar/>
          <Productfilter/>
        <Sportswear/>
      <Newsletter />
    <Footer/>
  </div>
  )
}

export default Sportwearspage;
