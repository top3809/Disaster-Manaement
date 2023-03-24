import React from "react";
import DonationCard from "./DonationCard";
import burger1 from "../../assets/burger1.jpg";
import burger2 from "../../assets/img1.jpg";
import burger3 from "../../assets/maps.jpg";
import Fab from '@mui/material/Fab';
import '../../styles/donation.scss'

const Donation = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>DONATE</h1>
      <div className="raise"><Fab style={{padding:"0px 50px", backgroundColor:"rgb(232, 43, 43)"}} variant="extended">
        
        Raise Fund
       </Fab></div>
      <div>
        <DonationCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Emergency management, also referred to as disaster management"
          handler={addToCartHandler}
          delay={0.1}
        />
        <DonationCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Emergency management, also referred to as disaster management"
          delay={0.3}
          handler={addToCartHandler}
        />
        <DonationCard
          itemNum={3}
          burgerSrc={burger3}
          price={1800}
          title="Emergency management, also referred to as disaster management"
          delay={0.6}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Donation;