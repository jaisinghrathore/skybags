import React from 'react'
import Grid from '@material-ui/core/Grid'
import Bag from "./Images/bag1.jpg"
import Bag2 from "./Images/bag2.jpg"

export default function About() {
    return (
        <>
            <Grid container>
            <Grid item xs={12}>
                <div style={{width: '90%', height: '500px',position:"relative",left:"50%",transform:"translate(-50%)"}}>
                <img src={Bag2} style={{width: '100%', height: '500px'}}></img>
                <h1 style={{position:"absolute",top:"40%",textAlign:"center",left:"50%",transform:"translate(-50%)",color:"white"}}><b>You Can Buy Any Kind Of Bags Here,Enjoy Shopping</b></h1>
                </div>
                </Grid>
        <Grid item xs={12} md={6}>
            <img src={Bag} style={{width: '100%', height: '500px',borderRadius:"15px",margin:"20px"}}></img>
        </Grid>

        <Grid item xs={12} md={6} style={{padding:"25px "}}>
        <h1 style={{textAlign:"center",margin:"20px"}}>ABOUT US</h1>
        <p>Skybags is aimed at travelers who like to make a style statement everywhere they go.
While the bags offer world class functional features, the brand is committed to help you Move in Style through vibrant and unique designs that add an edge to the traveler's personality. Behind the stylish aesthetics, lies over four decades of design and engineering innovation, resulting in products that are as durable and reliable as they are stylish!<br></br>


Apart from being the first Indian brand to manufacture printed polycarbonate luggage, Skybags also manufactures a wide variety of products like trolleys, rucksacks, backpacks, duffels, laptop bags, everyday travel accessories and short haul essentials made from quality materials.<br></br>


Skybags hails from VIP Industries (est. 1971), market leaders for over 40 years; and shares its roots with sister brands like VIP, Carlton and Caprese.

</p>
        </Grid>
            </Grid>            
     </>
    )
}
