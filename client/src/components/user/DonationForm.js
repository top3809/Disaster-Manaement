import React, { useState } from 'react'
import '../../styles/donationform.css'
import SelectComp from '../utility/SelectComp'
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Img from '../../assets/sideimages/donateform.avif'
import Button from '@mui/material/Button';
import UploadDocs from '../utility/UploadDocs';

function DonationForm() {

    const [accNumber,setAccNumber] = useState();
    const [accHolder,setAccHolder] = useState('');
    const [ifsc,setIfsc] = useState('');
    const [type,setType] = useState('');
    const [location,setLocation] = useState('');
    const [area,setArea] = useState('');
    const [desc,setDesc] = useState('');

    const handleClick = ()=>{
        
    }

  return (
    <div className='donation-container'>
            <div className='donation-left'>
            <div className='formbox'>
                <h2>Please Fill Raise Fund Form</h2>
                <div>                  
                    <h5>Account Number</h5>
                    <input type="number" className='inputbox' />
                </div>
                <div>
                <h5>Name of Account Holder</h5>
                    <TextField size='small' id="outlined-basic" value={subject} onChange={(e)=>setSubject(e.target.value)} label="" variant="outlined" />
                </div>
                <div>
                <h5>IFSC Code</h5>
                    <TextField size='small' style={{textTransform:'upperCase'}} id="outlined-IFSC" value={subject} onChange={(e)=>setSubject(e.target.value)} label="" variant="outlined" />
                </div>
                <div>
                <h5>Amount Required (in Rs)</h5>
                    <input type="number" className='inputbox' />
                </div>
                <div>
                    <h5>Name of Victim / Organization</h5>
                    <TextField size='small' id="outlined-basic" value={area} onChange={(e)=>setArea(e.target.value)} label="" variant="outlined" required />
                </div>
                <div>
                    <h5>Description</h5>
                    <Textarea 
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
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
                <Button onClick={handleClick} variant="contained" sx={{width:348,backgroundColor:'var(--col1)'}}>Submit</Button>
                </div>
                </div>
            </div>
            <div className='donation-right'>
                <img src={Img} alt="" />
            </div>
        </div>
  )
}

export default DonationForm