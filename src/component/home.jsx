import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faBriefcase, faCalendarDays, faClock, faEnvelope, faLocationDot, faPhone, faPlus, faSignal, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faIntercom, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image2 from  "../images/img2.jpg"

class Home extends Component {
    render() {
        return (
            <div className='border-[1px] mx-3 cursor-cell p-3 min-w-[400px] w-full md:w-[70%] ml-auto mr-auto mt-2 rounded-[30px] border-[#7a8085] flex-col justify-center'>
                <div className='border-[1px] my-3 cursor-cell p-3 py-8  rounded-[5px] border-[#7a8085] flex-col justify-center'>
                    <h1 className="text-center font-bold text-4xl my-3">Home</h1>
                    <div className='border-[1px] cursor-cell p-3 hover:bg-[#7a8081]  rounded-[5px] border-[#7a8085] flex-col justify-center  mt-3'>
                        <p><a href="" className="flex justify-center">Available for freelancing work</a></p>
                    </div>
                    <div className='border-[1px] cursor-cell p-3 hover:bg-[#7a8081]  rounded-[5px] border-[#7a8085] flex-col justify-center  mt-3'>
                        <p className='flex justify-center'> <FontAwesomeIcon icon={faClock} className="fa-solid my-1 mx-3 text-[#005d99]"/>Tuesday, April 2, 2024</p>
                    </div>
                    <div className='border-[1px] cursor-cell p-3 hover:bg-[#7a8081]  rounded-[5px] border-[#7a8085] flex-col justify-center  mt-3'>
                        <p className='flex justify-center'>Contact Me  <FontAwesomeIcon icon={faArrowAltCircleRight} className="fa-solid my-1 mx-5 text-[#005d99]"/></p>
                    </div>
                </div>
               
                <div className='border-[1px] my-3 cursor-cell p-3 py-8 rounded-[5px] border-[#7a8085] flex-col justify-center w-full md:w-[80%] ml-auto mr-auto'>
                    <h2 className="text-center font-bold text-2xl flex justify-center my-3">Contact Me</h2>
                    <ul className='flex-col justify-center'>
                        <li className='flex justify-center'>Email: amontoo53@gmail.com</li>
                        <li className='flex justify-center'>Phone: +254748073052</li>
                    </ul>
                </div>
                <div className='border-[1px] my-3 cursor-cell p-3 py-8 rounded-[5px] border-[#7a8085] flex-col justify-center w-full md:w-[80%] ml-auto mr-auto'>
                    <h2 className="text-center font-bold text-2xl my-3">Follow Me</h2>
                    <ul className='flex justify-center'>
                        <li className='hover:bg-[#282c34] hover:rounded-[10px] py-3'><a href="#"><FontAwesomeIcon icon={faFacebook} className="fa-brands mx-6 hover:text-[#005d99]" /></a></li>
                        <li className='hover:bg-[#282c34] hover:rounded-[10px] py-3'><a href="#"><FontAwesomeIcon icon={faTwitter} className="fa-brands mx-6 hover:text-[#005d99]" /></a></li>
                        <li className='hover:bg-[#282c34] hover:rounded-[10px] py-3'><a href="#"><FontAwesomeIcon icon={faIntercom} className="fa-brands mx-6 hover:text-[#005d99]" /></a></li>
                        <li className='hover:bg-[#282c34] hover:rounded-[10px] py-3'><a href="#"><FontAwesomeIcon icon={faWhatsapp} className="fa-brands mx-6 hover:text-[#005d99]" /></a></li>
                    </ul>
                </div>
            </div>
        );
    }   
}

export default Home;
