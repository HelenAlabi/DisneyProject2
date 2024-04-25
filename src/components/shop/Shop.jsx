import "./Shop.css"
import FatherChild from "../../assets/fatherandChild.jpeg"

const Shop =()=>{

    return(
        <>
           <div className= "shop_sec">
                <h2 id="shopW">Shop</h2>
                <div className= "shopImage"><img src={FatherChild} alt="" id="shopImage" /></div>
           </div>
        </>
    )
}

export default Shop;