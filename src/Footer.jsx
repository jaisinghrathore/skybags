import React from 'react';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import AlarmIcon from '@material-ui/icons/Alarm';
import {Link} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Footer() {
    return (
        <>
        <Grid container style={{width:"100%",backgroundColor:"#323a43",paddingBottom:""}}>
        <Grid xs={12} md={4} style={{border:'1px solid #555555',height:'110px',paddingTop:"24px"}}>
                <p style={{fontSize:"1.3rem",color:'#999999',textAlign:'center'}}> <LocationOnIcon style={{fontSize:"3rem",color:"rgb(226, 109, 109)"}}></LocationOnIcon> <span style={{color:'#FFFFFF'}}>Address</span> 66 New York</p>
            </Grid>
            <Grid xs={12} md={4} style={{border:'1px solid #555555',height:'110px',paddingTop:"24px"}}>
                <p style={{fontSize:"1.3rem",color:'#999999',textAlign:'center'}}> <MailOutlineIcon style={{fontSize:"3rem",color:"rgb(226, 109, 109)"}}></MailOutlineIcon> <span style={{color:'#FFFFFF'}}>Email</span> help@skyBags.com</p>
            </Grid>
            <Grid xs={12} md={4} style={{height:'110px',border:'1px solid #555555',paddingTop:"24px"}}>
                <p style={{fontSize:"1.3rem",color:'#999999',textAlign:'center'}}>  <AlarmIcon style={{fontSize:"3rem",color:"rgb(226, 109, 109)"}}></AlarmIcon> <span style={{color:'#FFFFFF'}}>Open Hours </span> Mon-Sat : 9am – 6pm</p>
            </Grid> 
           
            <Grid xs={12} md={6} style={{paddingTop:"40px"}}>
                <p style={{fontSize:"1.7rem",color:'#999999',textAlign:'center'}}>
                
                {/* List */}
                <div style={{width:'50%',float:"left",position:'relative'}} >
                <ul className='listu'>
                <li  style={{marginBottom:"30px"}}><Link className="nav-link" to="/">HOME<ArrowForwardIosIcon/></Link></li>
                <li><Link className="nav-link" to="/about">About<ArrowForwardIosIcon/></Link></li>
                </ul>
                </div>

                <div style={{width:'50%',float:"right",position:'relative'}} >
                <ul className='listu'>
                <li  style={{marginBottom:"30px"}}><Link className="nav-link" to="/contact">CONTACT<ArrowForwardIosIcon/></Link></li>
                <li><Link className="nav-link" to="/products">PRODUCTS<ArrowForwardIosIcon/></Link></li>
                </ul>
                </div>
                
                {/* List */}
                
                 </p>
            </Grid> 
            <Grid xs={12} md={6} style={{height:'180px',borderRight:"1px solid #555555",paddingTop:"80px"}}>
            <p style={{fontSize:"1.3rem",color:'#999999',textAlign:'center'}}> Copyright © 2021 skyBags. All rights reserved. </p>       
            </Grid> 
        </Grid>
       
        </>
    )
}
