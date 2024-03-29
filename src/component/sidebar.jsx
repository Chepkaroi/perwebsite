import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarDays, faEnvelope, faLocationDot, faPhone, faSignal, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faIntercom, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Home extends Component {
    render() {
        return (
            <div className='p-4 md:p-10'>

                <div className='mb-10 md:mb-0 md:flex md:items-center'>
                    <div className='md:mr-8'>
                        <div className='pb-10 bg-black rounded-md text-white'>
                            <img src="./perwebsite/component/images/amon.jpg" alt="Amon's photo" className='h-full w-full' />
                            <div className='flex flex-col justify-center text-white'>
                                <p className='text-xl ml-8 mt-4'>Amon Too</p>
                                <p className='text-xl ml-8 bg-gray-800 w-fit p-2 rounded-md mt-2'>Ui/Ux Designer</p>
                            </div>
                            <div className='flex justify-center text-white mt-3'>
                                <FontAwesomeIcon icon={faFacebook} className='bg-gray-800 w-fit p-2 rounded-md m-2' />
                                <FontAwesomeIcon icon={faTwitter} className='bg-gray-800 w-fit p-2 rounded-md m-2' />
                                <FontAwesomeIcon icon={faIntercom} className='bg-gray-800 w-fit p-2 rounded-md m-2' />
                                <FontAwesomeIcon icon={faWhatsapp} className='bg-gray-800 w-fit p-2 rounded-md m-2' />
                            </div>

                            <div className='bg-gray-800 p-2 m-9 rounded-md'>
                                <div className='flex align-center'>
                                    <FontAwesomeIcon icon={faPhone} className='text-pink-500 p-4 text-3xl' />
                                    <p><span>Phone</span> <br />+254 748 0730 52</p>
                                </div>

                                <div className='flex align-center pt-2'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-pink-500 p-4 pb-1 text-3xl' />
                                    <p><span>Email</span> <br />+254 748 0730 52</p>
                                </div>

                                <div className='flex align-center pt-3'>
                                    <FontAwesomeIcon icon={faLocationDot} className='text-pink-500 p-5 text-3xl' />
                                    <p><span>Phone</span> <br />Nairobi/ Kenya</p>
                                </div>

                                <div className='flex align-center'>
                                    <FontAwesomeIcon icon={faCalendarDays} className='text-pink-500 p-5 text-3xl' />
                                    <p><span>Birthday</span> <br />13/06/2003</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-pink-600 p-4 w-40 rounded-md'>Hire Me!</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 md:mt-0'>
                        <div className='flex justify-center text-white rounded-md w-full bg-black mb-8 md:mb-0'>
                            <div className='flex-col justify-center bg-gray-800 px-4 rounded-md  mx-6 my-6 align-middle'>
                                <FontAwesomeIcon icon={faUser} className='text-pink-500 p-5 text-3xl' />
                                <p>About</p>
                            </div>

                            <div className='flex-col justify-center  bg-gray-800 px-3 rounded-md  mx-6 my-6 align-middle'>
                                <FontAwesomeIcon icon={faSignal} className='text-pink-500 p-5 text-3xl' />
                                <p>What I Do</p>
                            </div>

                            <div className='flex-col justify-center  bg-gray-800 px-4 rounded-md mx-6 my-6 align-middle'>
                                <FontAwesomeIcon icon={faBriefcase} className='text-pink-500 p-5 text-3xl' />
                                <p>Work</p>
                            </div>

                            <div className='flex-col justify-center  bg-gray-800 px-4 rounded-md  mx-6 my-6 align-middle'>
                                <FontAwesomeIcon icon={faSun} className='text-pink-500 p-5 text-3xl' />
                                <p>Light</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='text-white p-4 md:mt-8 w-full bg-black flex-col items-center justify-center'>
                    <div>
                        <div className='p-4 text-3xl font-medium text-pink-500'>About Me</div>
                        <div>
                            <p className="text-lg">I'm a Kenyan based freelance full-stack web developer and
                                I would love to help you with your project. Currently, I do all web-related jobs and
                                specialize in HTML5/CSS3 JavaScript and a framework React.Js. I can build any website, from huge
                                dynamic apps to small static sites, on any budget.
                                <br />
                                <a href="https://github.com/Chepkaroi?tab=repositories" className="text-0.4xl text-blue-700 italic">See my work in my github repository.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
