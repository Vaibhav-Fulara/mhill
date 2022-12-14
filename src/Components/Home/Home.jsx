import React, {useEffect} from "react";
import './home.css'
import video from '../../Assets/video.mp4'
import {AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
// import {FaTripadvisor} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
// import {BsListTask} from 'react-icons/bs'
// import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    // react hook for scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
        <section className="home" id = "top">
            <div className="overlay"></div>
            <video src= {video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    
                    <span data-aos="fade-up" className="smallText">
                        The best tourism experience ever....
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        M Hill Adventure
                    </h1>

                    <h4 data-aos="fade-up" style={{fontWeight: "normal"}}>
                        by Mannu Rawat
                    </h4>
                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <a href="https://www.facebook.com/Satopant"><FiFacebook className="icon"/></a>
                        <a href="https://www.instagram.com/mhilladventure/"><AiOutlineInstagram className="icon"/></a>
                        <a href="https://www.youtube.com/channel/UCz5LzoYyQ3enznAIIUUHJFA"><AiOutlineYoutube className="icon"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home