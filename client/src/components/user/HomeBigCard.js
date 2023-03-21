import React from 'react'
import '../../styles/homebigcard.css'
import Button from '@mui/material/Button';



function HomeBigCard({hbcdata,hbcimg,hbcrow}) {
  return (
    <div className='hbc-container' style={{ display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:`${hbcrow}`}}>
      <div className='hbc-data'>
      <h1>{hbcdata.head}</h1>
      <p>{hbcdata.data}</p>
      {
        hbcdata.button == "none" ?" " : <Button variant="contained" >{hbcdata.button}</Button>
      }
      </div>
      <div className="vl"></div>
      <div className='hbc-img'>
        <img src={hbcimg} alt="" />
      </div>
    </div>
  )
}

export default HomeBigCard