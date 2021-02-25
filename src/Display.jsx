import React from 'react'
import Button from '@material-ui/core/Button';
import {useLocation,useHistory} from "react-router-dom";
  
export default function Display() {

    const history=useHistory();
    const location=useLocation();

    console.log(location.state);

    const clck=()=>{
       history.goBack()
    }

    return (
        <>
           <img style={{width: '80%', height: '500px',margin: '0 0 0 20px'}} src={location.state}></img>
           <Button variant="outlined" color="secondary" onClick={clck}>
        go Back
      </Button>
        </>
    )
}
