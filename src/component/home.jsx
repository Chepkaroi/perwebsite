import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarDays, faEnvelope, faLocationDot, faPhone, faSignal, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faIntercom, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image1 from  "../images/img1.jpg"

class Home extends Component {
    render() {
        return (
            <div className='w-full  flex text-black justify-between px-16 cursor-pointer'>
               <div className='mt-[10%]'>
               <h1 className='p-5 font-semi-bold  text-5xl'>HELLO I<span className='font-bold text-6xl text-[#005d99]'>`</span>M 👋 </h1>
               <h1 className='p-5 font-semi-bold mt-3text-bold  text-5xl'>  AMON TOO</h1>
                <p className='p-5 text-[#cccccc] justify-center text-3xl'>I am an expert from <br />
                <span className='font-bold text-4xl text-[#005d99]'>Kenya</span> in Developing $ <br />
                Designing awesome web Apps</p>

                <div className=''><button className='text-white mx-4 my-5 px-16 rounded-3xl py-4 hover:bg-[#005c99bb]  bg-[#005d99]'>Hire Me!</button></div>
               </div>
              <div><img src={Image1} alt="Me" className='w-[55%] mx-[30%] my-[10%] hover:rotate-[-2deg] hover:w-[56%]  border-[#005d99] border-[3px] rounded-[10%]' /></div>
           </div>
        );
    }   
}

export default Home;
