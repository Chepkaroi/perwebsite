import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"; // Import only necessary icons
import Image1 from  "../images/img1.jpg";

class Home extends Component {
    render() {
        return (
           <div className='border-[2px] cursor-cell p-3 max-w-[400px] rounded-[30px] border-[#005d99] flex-col align-middle justify-center '>
            <div><img src={Image1} alt="Me" className='w-[250px] h-[300px] rounded-[10%] border-none mx-auto' /></div>
            <div className='flex align-middle justify-center pt-8 text-2xl font-bold'>
            <h1>Amon Too</h1>
            </div>
            <div className='flex align-middle justify-center  pt-8 text-1xl font-bold'>
            <h1 className='text-[#cccccc]'> Ux/Ui Designer $ Developer</h1>
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
                        <a href="#" className=" mx-[50px]">Resume</a>
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

export default Home;
