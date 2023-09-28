import React from "react";
import instagram from '/images/instagram.png'
import facebook from '/images/facebook.png'
import yt from '/images/yt.png'
import twitter from '/images/twitter.png'
import linkedin from '/images/linkedin.png'
import logo from '/images/logo.png'
import diamond from '/images/diamond.png'
import footerbg from '/images/footerbg.png'
const Footer = () => {
  return (
    <div className=" bg-custom-yellow font-custom2 relative h-auto flex flex-col ">

        {/* footer content div */}
      <img src={footerbg} className="w-full h-full object-cover absolute mix-blend-overlay"/>


      <div className=" tracking-wide flex flex-col gap-16 md:flex-row justify-center items-center">
        <div className=" md:w-2/5  flex flex-col justify-center items-center text-light">
          <div className=""><img src={logo}></img></div>
          <div className=" mb-8 text-center">
            <p className=" font-custom1 text-2xl">Indian Institute of Technology Ropar</p>
          </div>
          <div>
            <p className="font-bold text-xl">Follow Us On</p>
          </div>
          <div className="justify-center flex items-center font-medium mt-2">
            <span className="mx-2 hover:cursor-pointer"><a href=""><img className='w-6'  src={instagram}/></a></span>
            <span className="mx-2 hover:cursor-pointer"><a href=""><img className='w-6' src={linkedin}/></a></span>
            <span className="mx-2 hover:cursor-pointer"><a href=""><img className='w-6' src={yt}/></a></span>
            <span className="mx-2 hover:cursor-pointer"><a href=""><img className='w-6' src={twitter}/></a></span>
            <span className="mx-2 hover:cursor-pointer"><a href=""><img className='w-6' src={facebook}/></a></span>
          </div>
        </div>
        <div className="flex justify-around">
        <div className="w-1/3 md:w-1/2 md:flex flex-col ">
          <div className="border-b-2 w-3/5 md:mt-[24px] text-light border-dark-extra">
            <h2 className="my-3 font-semibold text-xl">Links</h2>
          </div>
          <div className="text-lighter my-3 flex flex-col gap-1 font-medium">
            <p><a href="">Home</a></p>
            <p><a href="">Events</a></p>
            <p><a href="">Sponsor</a></p>
            <p><a href="">Schedule</a></p>
            <p><a href="">Team</a></p>
            <p><a href="">FAQs</a></p>
            <p><a href="">T&C</a></p>
          </div>
        </div>
        <div className="w-1/2 md:mt-[24px]  md:w-1/2 md:flex  flex-col ">
          <div className="border-b-2 w-3/5 text-light border-dark-extra">
            <h2 className="my-3 font-semibold text-xl">Contact Us</h2>
          </div>
          <div className="text-lighter my-3 flex flex-col gap-2">
            <p className="font-medium text-lg">Location</p>
            <p className="font-medium">
            Indian Institute of Technology Ropar
Rupnagar, Punjab, India 
Pincode: 140001
            </p>
            <p className=" font-medium text-lg">Email</p>
            <p className="font-medium">abcdxyz@gmail.com</p>
            <p className="font-medium text-lg">Phone</p>
            <p className="font-medium">+91-8171162979</p>
          </div>
        </div>
        </div>
        
      </div>

      {/* footer design div */}

    <div className="my-10">
    <div className="flex overflow-hidden">
        <img className='' src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        <img src={diamond}></img>
        </div>

    <div className="text-right mt-6 mx-12 text-light"><p>Privacy Policy | Copyright @ Zeitgeist 2023</p></div>    

    </div>
      

    </div>
  );
};

export default Footer;
