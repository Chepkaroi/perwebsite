import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    render() {
        return (
            <div className='border-[1px] mx-3 cursor-cell p-3 min-w-[400px] w-full md:w-[70%] ml-auto mr-auto mt-2 rounded-[30px] border-[#7a8085] flex-col justify-center'>
                <h1 className="text-4xl font-bold flex justify-center mb-4">Contact Me</h1>
                <div className="flex flex-col items-center justify-center">
                    <div className="border border-gray-300 rounded-lg p-6 mb-4 w-full md:w-1/2">
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-4" />
                            <p className="text-lg">amontoo53@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-2xl mr-4" />
                            <p className="text-lg">+254748073052</p>
                        </div>
                    </div>
                    <p className="text-2xl text-[#005d99]">Send message</p>
                    <form className="w-full md:w-1/2">
                        <div className="mb-4">
                            <label className="block text-lg mb-2" htmlFor="name">Name</label>
                            <input className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none" type="text" id="name" name="name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none" type="email" id="email" name="email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none" id="message" name="message" rows="4"></textarea>
                        </div>
                        <button className="bg-[#005d99] flex justify-center w-[50%] text-white py-2 px-4 rounded-lg hover:bg-[#005c99a6] transition duration-300">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
