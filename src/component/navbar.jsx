import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarDays, faEnvelope, faLocationDot, faPhone, faSignal, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faIntercom, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Home extends Component {
    render() {
        return (
           <div className='w-full  flex text-black justify-between px-16 cursor-pointer'>
            <div className='p-4 text-[#1DB954] font-bold text-2xl '>
                <p>Amon Too</p>
            </div>
            <div>
                <ul className='flex items-center'>
                    <li className='font-semi-bold hover:text-[#1DB954] p-4'><a href="#">Home</a></li>
                    <li className='font-semi-bold hover:text-[#1DB954]  p-4'><a href="#">About</a></li>
                    <li className='font-semi-bold hover:text-[#1DB954]  p-4'><a href="#">What I Do</a></li>
                    <li className='font-semi-bold hover:text-[#1DB954]  p-4'><a href="#">Recent Work</a></li>
                    <li className='font-semi-bold hover:text-[#1DB954]  p-4'><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className=''><button className='text-white px-6 py-3 rounded-3xl bg-[#1DB954] hover:bg-[#53da82]'>Hire Me!</button></div>
           </div>
        );
    }   
}

export default Home;
