import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Container = styled.div`
height:100vh;
z-index:10;
`

function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order Onlie"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
             />
             <Section 
            title="Model M"
            description="Order Onlie"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
             />
             <Section 
            title="Model Y"
            description="Order Onlie"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
             />
             <Section 
            title="Model X"
            description="Order Onlie"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
             />
             <Section 
            title="Lowest cost solar panels in America"
            description="Money Back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
             />
              <Section 
            title="Solar for New Roofs"
            description="Solar Roof costs less"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
             />
              <Section 
            title="Accessories"
            description="Money Back guarantee"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
             />
            
        </Container>
    )
}

export default Home
