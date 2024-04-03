import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faPhone, faUser, faVoicemail, faMessage } from "@fortawesome/free-solid-svg-icons"; // Import only necessary icons
import Image1 from  "../images/img1.jpg";
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends Component {
    render() {
        return (
            <div className='border-[1px] mx-3 cursor-cell  p-3 w-[430px] rounded-[30px] border-[#7a8085] flex-col align-middle justify-center '>
            <div><img src={Image1} alt="Me"  className='w-[250px]  rounded-[10px] border-[1px] border-[#7a8085] mx-auto' /></div>
            <div className='flex align-middle justify-center pt-8 cursor-pointer'>
            <h1 className=' hover:text-[#cccccc]'>amontoo53@gmail.com</h1>
            </div>
            <div className='flex align-middle justify-evenly w-auto  pt-8 text-1xl font-bold'>
           <a href="" className=" hover:bg-[#282c34] hover:rounded-[10px] p-3"> <FontAwesomeIcon icon={faFacebook} className="fa-solid text-[#005d99] hover:text-xl hover:text-[#cccccc]"/></a>
            <a href="" className="hover:bg-[#282c34] hover:rounded-[10px] p-3"><FontAwesomeIcon icon={faWhatsapp} className="fa-solid text-[#005d99] hover:text-xl hover:text-[#cccccc]"/></a>
            <a href="" className="hover:bg-[#282c34] hover:rounded-[10px] p-3"><FontAwesomeIcon icon={faInstagram} className="fa-solid text-[#005d99] hover:text-xl hover:text-[#cccccc]"/></a>
           <a href="" className="hover:bg-[#282c34] hover:rounded-[10px] p-3"> <FontAwesomeIcon icon={faTiktok} className="fa-solid text-[#005d99] hover:text-xl hover:text-[#cccccc]"/></a>
            </div>
            <div className='w-[250px] h-auto my-[10%] pt-[10%] rounded-[10%] border-t-[1px] border-b-[1px] mx-auto'>
            <div className=' flex p-[10%] hover:bg-[#282c34] hover:rounded-[10px]'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHouse} className="fa-solid text-[#005d99]"/> {/* Display house icon */}
                        <a href="#" className=" mx-[50px]">Home</a>
                    </li>
                </ul>
            </div>
            <div className=' flex p-[10%] hover:bg-[#282c34] hover:rounded-[10px]'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faBriefcase} className="fa-solid text-[#005d99]"/> {/* Display briefcase icon */}
                        <a href="#" className=" mx-[50px]">About</a>
                    </li>
                </ul> 
            </div>
            <div className='flex p-[10%] hover:bg-[#282c34] hover:rounded-[10px]'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faBriefcase} className="fa-solid text-[#005d99]"/> {/* Display briefcase icon */}
                        <a href="#" className=" mx-[50px]">Projects</a>
                    </li>
                </ul>
            </div>
            <div className=' flex p-[10%] hover:bg-[#282c34] hover:rounded-[10px]'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPhone} className="fa-solid text-[#005d99]"/> {/* Display phone icon */}
                        <a href="#" className=" mx-[50px] ">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='w-auto flex justify-center'>
            <button className='bg-[#005d99] p-2 w-[50%] hover:bg-[#005c99a6] flex justify-center rounded-[10px] border-none my-5'>Hire Me!</button>
            </div>
            </div>
           </div>
        );
    }   
}

export default Sidebar;
