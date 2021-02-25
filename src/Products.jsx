import React from 'react'
import Card from "./Card"
import BagDetails from "./BagDetails.js";
import Grid from "@material-ui/core/Grid"
export default function Products() {
    return (
        <>
        <h1 style={{textAlign: 'center',marginTop:"20px"}}>Here Are All Products</h1>
    <Grid container>
        {BagDetails.map((val)=>(
            <Card
                    id={val.id}
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
