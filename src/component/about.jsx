import React, { Component } from "react";


class About extends Component{
    render() {
        return(
            <div className='border-[1px] mx-3 cursor-cell p-3 min-w-[400px] w-full md:w-[70%] ml-auto mr-auto mt-2 rounded-[30px] border-[#7a8085] flex-col justify-center'>
             <div className='border-[1px] my-3 cursor-cell p-3 py-8  rounded-[5px] border-[#7a8085] flex-col justify-center'>
            <h1 className="text-center font-bold text-4xl my-3">About Me</h1>
            <p className='flex justify-center'>
              Hello, I'm Amon Too, a passionate and experienced web developer specializing in React. With a strong background in front-end development and a keen eye for detail, I strive to deliver high-quality, user-friendly web applications that meet the needs of my clients.
            </p>
            </div>
            <div className='border-[1px] my-3 cursor-cell p-3 py-8  rounded-[5px] border-[#7a8085] flex-col justify-center'>
            <h2 className="text-center font-bold text-2xl my-3">Skills</h2>
            <ul>
              <li>React.js: I am proficient in developing web applications using React.js, including state management with Redux, and working with popular libraries such as React Router and Axios.</li>
              <li>JavaScript (ES6+): I have a strong command of JavaScript and keep up with the latest standards. I'm comfortable working with modern JavaScript features such as arrow functions, async/await, and destructuring.</li>
              <li>HTML5 and CSS3: I possess a solid foundation in web technologies, including semantic HTML markup and CSS styling. I have experience with CSS frameworks like Bootstrap and Tailwind CSS.</li>
              <li>Responsive Design: I ensure that the websites I develop are responsive and accessible across various devices and screen sizes. I prioritize creating seamless user experiences that adapt to different platforms.</li>
            </ul>
            </div>
            <div className='border-[1px] my-3 cursor-cell p-3 py-8  rounded-[5px] border-[#7a8085] flex-col justify-center'>
            <h2 className="text-center font-bold text-2xl my-3">Let's Connect</h2>
            <p>
              If you have a project in mind or if you're looking for a skilled React developer to join your team, I'd love to hear from you. Please feel free to reach out to me through the contact information provided on my website. Let's work together to bring your ideas to life!
            </p>
            </div>
          </div>
        )
    }
} 

export default About;