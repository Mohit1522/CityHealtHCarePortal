import React from 'react'

import Rahul from "./images/Rahul_44kb.jpg";
import Ravi  from "./images/ravi.jpg";
import Yash from "./images/yash.jpg";
import  Mohit from "./images/Mohit.jpg";
import  Abhishek from "./images/abhishek.jpg";
import "../CSS/Aboutus.css"

function About() {
    return (
        <div>

            <div className='text-center text-light mt-4 mb-2 py-2 pb-sm-1'>
                <h1>About us</h1>
            </div>

            <div className='p-3 p-sm-2 mt-sm-0 mt-0 p-2 mx-xl-5'>

                <div className='mx-sm-2 mt-sm-3 mx-2 d-flex cards'>
                    <div className='col-4 col-md-3 col-lg-3'>
                        <img src={Mohit} className="w-100 border border-dark border-1 personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-md-1 col-9 cardsColor1 rounded-end-5  '>
                        <h1 className='text-start text-dark names'>Mohit Chouhan</h1>
                        <h5 className='text-start text-secondary locations'>Indore</h5>
                        <h4 className='text-start emailIDs'>mohitchouhan707@gmail.com</h4>
                        <div className='description '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-3 mt-sm-3 d-flex cards'>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor3'>
                        <h1 className='text-end text-dark names'>Rahul Barange</h1>
                        <h5 className='text-end text-secondary px-1 locations'>Burhanpur</h5>
                        <h4 className='text-end emailIDs'>rahulbarange2021@gmail.com</h4>
                        <div className='description  '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                    <div className=' p-0 col-4 col-md-3 col-lg-3 '>
                        <img src={Rahul} className="w-100 border personImages"></img>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-3 mt-sm-3 d-flex cards'>
                    <div className=' p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Yash} className="w-100 border personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor2 rounded-end-5  '>
                        <h1 className='text-start text-secondary names'>Yash Kukkar</h1>
                        <h5 className='text-start locations locations'>Nashik</h5>
                        <h4 className='text-start locations emailIDs'>ykukkar@gmail.com</h4>
                        <div className='description  '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2  mt-sm-3 mt-3 d-flex cards'>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor4 rounded-end-5  '>
                        <h1 className='text-end text-dark names'>Abhishek Shinde</h1>
                        <h5 className='text-end locations locations'>Nashik</h5>
                        <h4 className='text-end locations emailIDs'>abhishekshinde938@gmail.com</h4>
                        <div className='description '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                    <div className='p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Abhishek} className="w-100 border personImages"></img>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-sm-3 mt-3 d-flex cards'>
                    <div className=' p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Ravi} className="w-100 border personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor5'>
                        <h1 className='text-start text-dark names'>Ravi Malegave</h1>
                        <h5 className='text-start locations locations'>Latur</h5>
                        <h4 className='text-start locations emailIDs'>ravi.malegave@gmail
                            com</h4>
                        <div className='description  '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About