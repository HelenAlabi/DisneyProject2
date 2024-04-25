
import "./LionFrozen.css"
import LionKing from "../../assets/lionKing.png"
import Frozen from "../../assets/frozenLadyP.png"

const LionFrozen =()=>{

    return(
        <>
          <div className= "LFsection">
               <h2 id="show">Show</h2>
               <div className= "lionF">
                    <div><img src= {LionKing}alt="" /></div>
                    <div><img src={Frozen} alt="" /></div>
               </div>
          </div>
        </>
    )
}

export default LionFrozen;