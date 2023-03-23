import React from 'react'
import '../../styles/alerts.css'
import SelectComp from '../utility/SelectComp'
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Img from '../../assets/others/sunami.jpg'
import Button from '@mui/material/Button';
import UploadDocs from '../utility/UploadDocs';

function Alerts() {
    return (
        <div className='alerts-container'>
            <div className='alerts-left'>
            <div className='formbox'>
                <h2>Please Fill the Alert Information</h2>
                <div>
                    <h5>Subject</h5>
                    <TextField size='small' id="outlined-basic" label="" variant="outlined" />
                </div>
                <div>
                    <h5>Type of Disaster</h5>
                    <SelectComp id="outlined-basic"></SelectComp>
                </div>
                <div>
                    <h5>Location (center point) </h5>
                    <TextField size='small' id="outlined-basic" label="" variant="outlined" />
                </div>
                <div>
                    <h5>Area Radius (in kilometers)</h5>
                    <TextField size='small' id="outlined-basic" label="" variant="outlined" required />
                </div>
                <div>
                    <h5>Description</h5>
                    <Textarea 
                    sx={{ width: 348 }}
                    id='outlined-basic'
                        placeholder=""
                    
                        minRows={2}
                        maxRows={5}
                    />
                </div>
                <div>
                    <h5>Add Supporting Documents</h5>
                    <TextField size='small' id="outlined-basic" label="" variant="outlined" />
                    <UploadDocs></UploadDocs>
                </div>
                <div>
                <h5></h5>
                <Button variant="contained" sx={{width:348,backgroundColor:'var(--col1)'}}>Submit</Button>
                </div>
                </div>
            </div>
            <div className='alerts-right'>
                <img src={Img} alt="" />
            </div>
        </div>
    )
}

export default Alerts