import React from 'react'
import './Home.css'
import { MdGroups } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import RatingIcon from "../Assets/Rating-Icon.png"
import Poster from "../assets/Poster-icon.png"
import Feedback from "../assets/Feedback.mp4"
import bg_img from "../assets/bg_img2.jpg"
import CartProfile from "../assets/card-profile.jpg"
import { Fade, Slide } from "react-slideshow-image"
import TempleImage from "../assets/Temple-image.avif"
import Templeimage2 from "../assets/Temple-image.2.jpeg"
import Templeimage3 from "../assets/temples3.webp"
import 'react-slideshow-image/dist/styles.css'
import { CgAdd } from "react-icons/cg";
import image from "../assets/image.jpg"
import ChooseImage from "../assets/Choose-image.png"
const slideImages = [
    {
        url: TempleImage
    },
    {
        url: Templeimage2
    },
    {
        url: Templeimage3
    }
]

const Home = () => {
    return (
        <div className='Home-container' style={{ backgroundImage: `url(${bg_img})` }}>

            <div className='Home-Header'>
                <div className='Home-Header-Text'>
                    <img src={Poster} alt='Poster' className='Poster-Img' />
                </div>
            </div>
            <div className='Home-Body'>
                <div className='Home-Frames'>
                    <iframe width="100%" height="345" src="https://www.youtube.com/embed/fPhBdTNPJIM?si=PCnO1--zH2Ym4Nn5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='Home-Text'>
                    <h1 className='Home-Text-Head'>Our Success Numbers </h1>
                </div>
                <div className='Home-Numbers'>
                    <div className='Home-Numbers-Box i'>
                        <MdGroups className='icon-box' />
                        <h1 className='Numbers-Text'>+55K</h1>
                        <h1 className='Sub-Text'> Total Registered </h1>
                    </div>
                    <div className='Home-Numbers-Box'>
                        <img src={RatingIcon} alt='RatingIcon' className='rat-icon-box' />
                        <h1 className='rat-Numbers-Text'>+5K</h1>
                        <h1 className='rat-Sub-Text'> Shadi Done </h1>
                    </div>
                    <div className='Home-Numbers-Box'>
                        <AiOutlineUser className='icon-box' />
                        <h1 className='Numbers-Text'>+150K</h1>
                        <h1 className='Sub-Text'> JSM Team Member </h1>
                    </div>
                </div>
                <div className='Home-Text'>
                    <h1 className='Home-Text-Med'>Teatimonial</h1>
                    <div className='teati-Btn'>
                        <button className='teati-Button'>Shadi Done</button>
                        <button className='teati-Button'>Review</button>
                        <button className='WBtn'>Whats App </button>
                    </div>
                </div>
                <div className='Home-Feedback'>
                    <video src={Feedback} controls className='Feed-Video' />
                </div>
                <div className='Home-Text'>
                    <h1 className='Home-Text-Med'>Padadhikari</h1>
                    <img src={image} alt='image' className='Cart-Profile' />
                </div>
                <div className='Home-Text'>
                    <h1 className='Home-Text-Med'>Jainism </h1>
                </div>
                <div className='slide-container'>
                    <Fade>
                        {slideImages.map((each, index) => (
                            <div key={index} className='each-slide'>
                                <div className='slide-Box' style={{ 'backgroundImage': `url(${each.url})` }}>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
                <div className='Home-Text'>
                    <h1 className='Home-Text-Med'>Why Choose Us</h1>
                    <img src={ChooseImage} alt='ChooseImage' className='Choose-Image' />
                </div>
                <div className='Que-Box'>
                    <div className='Text-Ques'>
                    <h1 className='Home-Text-Ques'>We're to help you with anything and everyting on</h1>
                    <h1 className='Home-Text-Ques'>Our Support Team JSM</h1>
                   </div>
                    <p className='PBox'>At Jain Shadi Milan we expect at a day’s start is
                        you, better and happier than yesterday. We have
                        got you covered share your concern or check our
                        frequently asked questions listed below. </p>
                    <div className='Home-Text'>
                        <h1 className='Home-Text-Head'>Frequently Asked Questions</h1>
                    </div>
                    <div className="field_container">
                      <select className='Field'  >
                      <option> What is Jain Milan? </option>
                      <option value="App">Way TO Find your better hafe </option>       
                      </select>
                      <CgAdd className='add-box' />
                  </div>
                  <div className="field_container">
                      <select className='Field'  >
                      <option> How to get the Biodata through Whatsapp ? </option>
                      <option value="App">App </option>       
                      </select>
                      <CgAdd className='add-box' />
                  </div>
                  <div className="field_container">
                      <select className='Field'  >
                      <option>How to Register in JAIN SHADI MILAN ?</option>
                      <option value="App">App </option>         
                      </select>
                      <CgAdd className='add-box' />
                  </div>
                  <div className="field_container">
                      <select className='Field'  >
                      <option> What is Silver Package ? </option>
                      <option value="App">App </option>        
                      </select>
                      <CgAdd className='add-box' />
                  </div>
                  <div className="field_container">
                      <select className='Field'  >
                      <option> What is Gold Package ? </option>
                      <option value="App">App </option>      
                      </select>
                      <CgAdd className='add-box' />
                  </div>
                  <div className="field_container">
                      <select className='Field'  >
                      <option> What is Platinum Package ? </option>
                      <option value="App">App </option>        
                      </select>
                      <CgAdd className='add-box' />
                  </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home
