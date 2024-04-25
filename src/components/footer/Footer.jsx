

import"./Footer.css"
import Fbk from "../../assets/fbk.png"
import Twit from "../../assets/twitt.png"
import Ig from "../../assets/ig.png"
import YouT from "../../assets/youTub.png"
import DisL from "../../assets/disneyLogo.png"


const Footer =()=>{

    return(
        <>
        <div className= "footer-Section">
              <div className= "SMword">
                <h2 id="fol">Follow Disney on:</h2>
              <div className= "SM">
                  <a href=""><img src={Fbk} alt="" /></a>
                  <a href=""><img src={Ig} alt="" /></a>
                  <a href=""><img src={Twit} alt="" /></a>
                  <a href=""><img src={YouT} alt="" /></a>
              </div>
              </div>
              <div id= "logoF"><img src={DisL} alt="" /></div>
              <div className= "series">
                <p>Help</p>
                <p>Sign Up</p>
                <p>Terms of Use</p>
                <p>UK &EU Privacy Rights</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
                <p>Manage Your Cookie Settings</p>
                <p>Interest-based Ads</p>
                <p>Tax Strategy Statement</p>
                <p>Internet Safety</p>
                <p>About Us</p>
              </div>
              <div id="walt"><p>The Walt Disney Company</p></div>
              <div id="dis"><p>© Disney © Disney•Pixar © & ™ Lucasfilm LTD © Marvel. All Rights Reserved</p></div>
        </div>
        </>
    )
}
export default Footer;