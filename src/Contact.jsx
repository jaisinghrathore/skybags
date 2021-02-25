import React from 'react'
import Grid from "@material-ui/core/Grid"
import Bag2 from "./Images/bag3.jpg"

export default function Contact() {
    return (
        <>
                   <Grid container style={{zIndex:0}}>


<Grid item xs={12} >
<div style={{width: '90%', height: '500px',position:"relative",left:"50%",transform:"translate(-50%)"}}>
                <img src={Bag2} style={{width: '100%', height: '500px'}}></img>
                <h1 style={{position:"absolute",top:"40%",textAlign:"center",left:"50%",transform:"translate(-50%)",color:"white"}}><b>You Can Buy Any Kind Of Bags Here,Enjoy Shopping</b></h1>
                </div>
</Grid>

<Grid item xs={12} container style={{padding:"20px"}}>

<Grid item xs={12} md={8}>
   <div style={{width: "100%",height:"508px"}}>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8047984074465!2d77.23861231508135!3d28.575623782440257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzMyLjMiTiA3N8KwMTQnMjYuOSJF!5e0!3m2!1sen!2sin!4v1614093992397!5m2!1sen!2sin" width="100%" height="100%" style={{border:"none"}} allowfullscreen="" loading="lazy"></iframe>
   </div>
</Grid>

<Grid item xs={12} md={4}>


			<div style={{borderRadius: '30px',width: '400px',height: '460px',backgroundColor: 'rgba(1, 1, 1,0.6)',marginTop: '20px',position: 'relative',right: '160px',boxShadow: "2px 2px 2px 1px #555555"}}>
				
<form>
					<h1 className='ContactHeading' style={{textAlign: 'center',color:'#fff',lineHeight: "80px",color:"white"}} >Contact us</h1>
					<input className="inpu" type="text" placeholder="Name" required id="name"/>

					<input className="inpu" type="number" placeholder="Mobile" maxlength="15" required style={{marginTop: "30px"}}/>

					<input className="inpu" type="email" placeholder="E-mail" style={{marginTop: "30px"}}/>

					<textarea className="textA" placeholder="Message"></textarea>
					<input type="submit" style={{width: '80px',height: '35px',border: 'none',backgroundColor:'rgb(226, 109, 109)',borderRadius: '10px',marginTop:"26px",marginLeft:"50%",transform: 'translate(-50%)',color:'white',fontSize:"1rem"}}/>
</form>

                </div>

</Grid>


</Grid>



</Grid>
        </>
    )
}
