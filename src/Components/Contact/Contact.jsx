import React, { useEffect } from "react"; 
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"
import { AiOutlineTwitter, AiFillYoutube, AiFillFacebook, AiFillInstagram} from "react-icons/ai"
// import {FaTripadvisor, FaTwitter} from "react-icons/fa"
// import axios from "axios";
import './contact.css'

export default function ContactUs() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if(this.value === "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
  }, []);

  // const postContactInfo = () => {
  //   console.log("Posting contact info to backend")
  //   axios.post("https://api.mhilladventure.com/trips/contact")
  //   .then(res => console.log("Message and Contact info sent!"))
  //   .catch(err=> console.log(err));
  // }

  return (
    <section className="contact">

      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's Get In Touch</h3>
          <p className="text">
          Being in the tourism business since 1994, M Hill Adventure has proven to be a pivotal platform for delivering picturesque sightseeing experiences to its valued customers in the most affordable way. We provide group and individual tours in and across Uttarakhand.
          </p>

          <div className="info">
            <div className="information">
              <MdLocationOn className="conicon"/>
              <div className="adress">
                <p>Mana Village, P.O. Mana Badrinath</p>
                <p>District Chamoli, Uttarakhand-246422</p>
              </div>
            </div>
            <div className="information">
              <MdEmail className="conicon"/>
              <div className="emailid">
                <p>mhilladventure@gmail.com</p>
              </div>
            </div>
            <div className="information">
              <MdPhone className="conicon"/>
              <div className="phoneno">
                <p>+91 94129 66171</p>
                <p>+91 63968 89138</p>
                <p>+91 91197 60282</p>
              </div>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="https://twitter.com/MhillAdventure">
                <AiOutlineTwitter />
              </a>
              <a href="https://www.youtube.com/channel/UCz5LzoYyQ3enznAIIUUHJFA">
                <AiFillYoutube />
              </a>
              <a href="https://www.facebook.com/Satopant">
                <AiFillFacebook />
              </a>
              <a href="https://www.instagram.com/mhilladventure/">
                <AiFillInstagram />
              </a>
              {/* <a href="#">
                <FaTripadvisor />
              </a> */}
            </div>
          </div>


        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autoComplete="off" action="https://formsubmit.co/mhilladventure@gmail.com" method="POST">
            <h3 className="heading">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" required/>
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" required/>
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type= "tel" name="phone" className="input" required/>
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
             <input type="submit" value="Send"  className="butn"/> {/*onClick={postContactInfo} */}
          </form>
        </div>
      </div>

      <script src="hover.js"></script>

    </section>
  );
}