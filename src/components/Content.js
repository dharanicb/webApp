import React from "react";
import boyImage from "../assets/boyImage.png";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png";
import girl3 from "../assets/girl3.png";
import Maskgroup from "../assets/Mask group.png";
import anotherimage from '../assets/Group 167.png'


import { useTheme } from '@mui/material/styles';



const Content = () => {
  const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  
  return (
    <div>
      <div className="row discover-div">
        <div className="col-6 text-col">
          <div className="discover-text">
            Discover the beauty of the tropics
          </div>
          <div className="mrg-top-12">
            <span className="detination-text">Tropical Destinations</span>{" "}
            <br /> <span className="student-text">For Student</span>
          </div>
          <div className="sit-text">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae
          </div>
          <div>
            <button className="sign-btn col-3">SIGN UP</button>
          </div>
        </div>
        <div className="col-6">
          <img src={boyImage} alt="img"></img>
        </div>
      </div>
      <div className="circle-div">
        <span className="circle-span"></span>
      </div>
      <div className="row card-main-div">
        <div className="col-10 d-flex">
          <div className="col-6">
            <div className="col-8">
              <div className="card">
                <div className="card-div">
                  <img src={girl1} width={80} height={80} />
                  <div>
                    <div className="discover-text">Jenny Wilson</div>
                    <div className="sit-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-div">
                  <img src={girl2} width={80} height={80} />
                  <div>
                    <div className="discover-text">Jenny Wilson</div>
                    <div className="sit-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-div">
                  <img src={girl3} width={80} height={80} />
                  <div>
                    <div className="discover-text">Jenny Wilson</div>
                    <div className="sit-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="">
              <span className="adventure-text">Tropical Adventure</span> <br />{" "}
              <span className="student-text2">for Students.</span>
            </div>
            <div className="student-tropical">
              Student Tropical Vacation: Relax and Recharge
            </div>
            <div className="list-div">
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit</li>
                <li>tortor id euismod habitant</li>
                <li>Sed suspendisse id in ultrices</li>
              </ul>
            </div>
            <button className="sign-btn">Explore more</button>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-6">
          <div className="card">
            <img></img>
            <div>
              <div className="name">
                Jenny Wilson
              </div>
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing...
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
        </div>
      </div> */}
      <div>
        {/* <p>Our Destinations</p> */}
        </div>
      <div className="d-flex  align-items-start" style={{padding:"0px 110px",gap:'100px'}}>
        <div style={{marginTop:"120px"}}>
          <p className="h">
          Get 20% off for student
          </p>
          <p style={{width:'500px'}} className="notBold"><span className="boldText w-100">Student discounts available.
</span> Get ready for some fun in the sun!</p>
<ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit</li>
                <li>tortor id euismod habitant</li>
                <li>Sed suspendisse id in ultrices</li></ul><button className="btnExplore" style={{marginTop:"60px"}}>Explore More</button>
        </div>
        <div style={{background:'url("C:\Users\veeresh.km\Downloads\bggrild.png.png")'}}>
           <img  style={{height:'560px',width:"457px"}}src={Maskgroup}/>
        </div>
        
      </div>


      <div className="d-flex" style={{gap:'100px',marginTop:'200px',padding:"0px 110px"}}>
        <div><img src={anotherimage}/></div>
     

      <form className="thisFOrm">
        <p className="bookNOw">Book now</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div>
          <label className="city">City</label>
          <input placeholder="Enter City" className="EnterCity"/>
        </div>

        <div className="d-flex" style={{gap:'11px',marginTop:'17px'}}> 
          <div><label className="city">Arrival</label>
          <input placeholder="10 October" className="EnterCity"/></div>
          <div><label className="city">Departure</label>
          <input placeholder="11 October" className="EnterCity"/></div>
        </div>

        <div className="d-flex" style={{gap:'11px',marginTop:'17px'}}> 
          <div><label className="city">Star</label>
         <div className="d-flex"><div className="">-</div> <input placeholder="10 October" className="EnterCity"/></div><div>+</div></div>
          <div><label className="city">Room</label>
          <input placeholder="11 October" className="EnterCity"/></div>
        </div>
        
      </form>
      </div>
    </div>
  );
};

export default Content;
