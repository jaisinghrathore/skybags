import React from 'react'
import Grid from '@material-ui/core/Grid'
import Bag from "./Images/bag.jpg"
import Card from "./Card"
import BagDetails from "./BagDetails.js";

export default function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{marginBottom:"15px"}}>
                <div style={{width: '90%', height: '500px',position:"relative",left:"50%",transform:"translate(-50%)"}}>
                <img src={Bag} style={{width: '100%', height: '500px'}}></img>
                <h1 style={{position:"absolute",top:"40%",textAlign:"center",left:"50%",transform:"translate(-50%)",color:"white"}}><b>You Can Buy Any Kind Of Bags Here,Enjoy Shopping</b></h1>
                </div>
                </Grid>
                {BagDetails.map((val)=>(
            <Card
                 img={val.img}
                 name={val.name}
                price={val.price}
                off={val.off}
            />
        ))}
            </Grid>
        </>
    )
}
