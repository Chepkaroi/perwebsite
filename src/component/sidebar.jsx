import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarDays, faContactBook, faEnvelope, faLocation, faLocationDot, faMessage, faPhone, faSignal, faSun, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faIntercom, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
class Home extends Component {
    render() {
        return (
            
            <div>
                <div className='flex justify-center h-fit '>
                    <div className='flex-col justify-center'>
                    <div className='pb-10  h-full bg-black rounded-md text-white'>
                        <img src="./perwebsite/component/images/amon.jpg" alt="" />
                        <div className='flex-col justify-center text-white'>
                        <p className='text-xl pl-24 mt-4'>Amon Too</p>
                        <p className='text-xl pl-20 text-zinc-200 w-fit p-2 rounded-md mt-2'>Ui/Ux Designer</p>
                        </div>
                        <div className='flex justify-center text-white mt-3'>
                            <FontAwesomeIcon icon={faFacebook} className=' bg-gray-800 w-fit p-2 rounded-md m-2' />
                            <FontAwesomeIcon icon={faTwitter} className=' bg-gray-800 w-fit p-2 rounded-md m-2'/>
                            <FontAwesomeIcon icon={faIntercom} className=' bg-gray-800 w-fit p-2 rounded-md m-2' />
                            <FontAwesomeIcon icon={faWhatsapp} className=' bg-gray-800 w-fit p-2 rounded-md m-2'/>
                        </div>

                        <div className='bg-gray-800 p-4 m-9 rounded-md'>
                        <div className='flex align-center'>
                        <FontAwesomeIcon icon={faPhone} className='text-pink-500 p-4 text-3xl'/>
                        <p><span>Phone</span> <br />+254 748 0730 52</p>
                        </div>

                        <div className='flex align-cente pt-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-pink-500 p-4 pb-1 text-3xl'/>
                        <p><span>Email</span> <br />+254 748 0730 52</p>
                        </div>

                        <div className='flex align-center pt-3'>
                        <FontAwesomeIcon icon={faLocationDot} className='text-pink-500 p-5 text-3xl'/>
                        <p><span>Phone</span> <br />Nairobi/ Kenya</p>
                        </div>

                        <div className='flex align-center'>
                        <FontAwesomeIcon icon={faCalendarDays} className='text-pink-500 p-5 text-3xl'/>
                        <p><span>Birthday</span> <br />13/06/2003</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-pink-600 p-4 w-40 rounded-md'>Hire Me!</button>
                    </div>
                    </div>
                    </div>
                    

                    <div className='ml-16 flex-col justify-end'>
                        <div className='flex justify-center mr-8 text-white rounded-md  bg-black'>
                        <div className='flex-col justify-center bg-gray-800 px-7 rounded-md  mx-6 my-6 align-middle'>
                        <FontAwesomeIcon icon={faUser} className='text-pink-500 p-5 text-3xl'/>
                        <p>About</p>
                        </div>

                        <div className='flex-col justify-center  bg-gray-800 px-6 rounded-md  mx-6 my-6 align-middle'>
                        <FontAwesomeIcon icon={faSignal} className='text-pink-500 p-5 text-3xl'/>
                        <p>What I Do</p>
                        </div>

                        <div className='flex-col justify-center  bg-gray-800 px-4 rounded-md mx-6 my-6 align-middle'>
                        <FontAwesomeIcon icon={faBriefcase} className='text-pink-500 p-5 text-3xl'/>
                        <p>Recent Work</p>
                        </div>

                        <div className='flex-col justify-center  bg-gray-800 px-6 rounded-md  mx-6 my-6 align-middle'>
                        <FontAwesomeIcon icon={faSun} className='text-pink-500 p-5 text-3xl'/>
                        <p>Contact</p>
                        </div>
                        
                        </div>
                        <div className='text-black flex-col items-center justify-center'>
                          <h1 className='font-2'>About Me</h1>
                        </div>
                        
                        </div>
                        

                </div>
            </div>
        );
    }
}

export default Home;