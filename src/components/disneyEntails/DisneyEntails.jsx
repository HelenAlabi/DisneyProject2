import Marvel from "../../assets/marvel.png"
import Iwaju from "../../assets/iwaju.png"
import Jack from "../../assets/jack.png"
import AllLogo from "../../assets/allLogo.png"
import "./DisneyEntails.css"
const DisneyEntails =()=>{

    return(
        <>
           <div className= "WhatsBody">
              <div className= "all_what">
                  <h2 id="headW">What&apos;s on Disney+</h2>
                  <div className= "imageM_what">
                        <div className= "imageM1">
                            <div className= "imageM"><img src={Marvel}alt="" /></div>
                            <h2 id="mar">The Marvel</h2>
                        </div>
                        <div className= "imageM2">
                            <div className= "imageM"><img src={Iwaju}alt="" /></div>
                            <h2 id="iwa">Iwaju</h2>
                        </div>
                        <div className= "imageM3">
                            <div className= "imageM"><img src={Jack} alt="" /></div>
                            <h2 id="per">Percy Jackson and Olympians</h2>
                        </div>
                  </div>
                  <div id="logoAll"><img src={AllLogo} alt="" /></div>
                  <button id="subW">SUBSCRIBE NOW*</button>
                  <p id="term">* Terms and Conditions Apply | Plans start from just £4.99 a month</p>
             </div>
          </div>

        </>
    )
}

export default DisneyEntails;