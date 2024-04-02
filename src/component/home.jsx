import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faBriefcase, faCalendarDays, faClock, faEnvelope, faLocationDot, faPhone, faPlus, faSignal, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faIntercom, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image1 from  "../images/img1.jpg"

class Home extends Component {
    render() {
        return (
            <div className='border-[1px] cursor-cell p-3 w-[400px] rounded-[30px] border-[#7a8085] flex-col justify-center'>
                
                <div >
                 <h1 className="text-center font-bold text-4xl my-3">Home</h1>
               </div>
             <div className='border-[1px] cursor-cell p-3 py-8  rounded-[5px] border-[#7a8085] flex-col justify-center'>
               <div className='border-[1px] cursor-cell p-3 hover:bg-[#7a8081]  rounded-[5px] border-[#7a8085] flex-col justify-center  mt-3'>
                   <p><a href="" className="flex justify-center">Available for freelancing work</a></p>
               </div>
               <div className='border-[1px] cursor-cell p-3 hover:bg-[#7a8081]  rounded-[5px] border-[#7a8085] flex-col justify-center  mt-3'>
                  <p className='flex justify-center'> <FontAwesomeIcon icon={faClock} className="fa-solid my-1 mx-3 text-[#005d99]"/>Tuesday,April 2,2024</p>
               </div>
               <div className='border-[1px] cursor-cell p-3 hover:bg-[#7a8081]  rounded-[5px] border-[#7a8085] flex-col justify-center  mt-3'>
                <p className='flex justify-center'>Contact Me  <FontAwesomeIcon icon={faArrowAltCircleRight} className="fa-solid my-1 mx-5 text-[#005d99]"/></p>
               </div>
             </div>
             <div className='border-[1px] my-3 cursor-cell p-3 py-9 rounded-[5px] border-[#7a8085] flex-col justify-center'>
                <p className='flex justify-center'>A WEB DEVELOPER AND UI/UX DESIGNER</p>
                <h1 className='flex justify-center p-2 text-2xl'>Amon Too <FontAwesomeIcon icon={faPlus} className="fa-solid my-1 mx-3 text-[#005d99]"/>29 years</h1>
                <p className='flex justify-center p-3'>I am a Kenyan product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
                <h1 className='flex justify-center border-1 bg-[#005d99] text-[#cccccc] py-2 rounded-[10px] hover:bg-[#005c99a6 ] text-xl'><FontAwesomeIcon icon={faPlus} className="fa-solid  mx-1 text-[#fff]"/>7 years of Experience</h1>
             </div>
           </div>

          
        );
    }   
}

export default Home;
