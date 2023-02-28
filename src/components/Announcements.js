import styled from "styled-components"

const Announce= styled.div`
 background-color: lightblue;
 text-align: center;
 padding: .5em;
`


const Announcements = () => {
  return (
   <Announce>
    Super Deal! Free Delivery on Orders Over NGN10,000
   </Announce>
  )
}

export default Announcements
