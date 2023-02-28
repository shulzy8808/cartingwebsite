import Navbar from "../components/Navbar"
import Announce from "../components/Announcements"
import Slides from "../components/Slides"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
const Homepage = () => {
  return (
    <div>
<Announce/>
 <Navbar/>
 <Slides/>
 <Categories/>
 <Products/>
<Newsletter/>
<Footer/>
    </div>
  )
}

export default Homepage
