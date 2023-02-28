import styled from "styled-components"

const Filtertitle = styled.h1``
const Filtercontainer= styled.div``
const Filter = styled.h3`
   
`
const Size = styled.h3`
  
`
const Filtercontent= styled.div`
    display: flex;
    margin: 1em;
    margin-top: 0;
`
const Select= styled.select`
    cursor: pointer;
    margin: 1em;
    padding: .7em;
`

const Option= styled.option`
    padding: 2em;
`


const Filtered = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 2em;
   margin-top:-1em;
   align-items: center;
`
const Productfilter = () => {
  return (
    <Filtercontainer>
          <Filtertitle>
            FORZÀ SPÈCIALÉ
        </Filtertitle>
    <Filtered>
    <Filtercontent>
        <Filter>
            Filter Products:
        </Filter>
        <Select>
            <Option disabled>Color</Option>
            <Option>Yellow</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Cream</Option>
        </Select>
        <Select>
        <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option> 
            <Option>XL</Option> 
        </Select>
        </Filtercontent> 
        <Filtercontent>
        <Size>
            SORT PRODUCTS:
            <Select>
            <Option disabled>Price</Option>
            <Option>Price ($)</Option>
            <Option>Price (NGN)</Option>
        </Select>
        </Size>
        </Filtercontent>
        </Filtered>
    </Filtercontainer>
  )
}

export default Productfilter
