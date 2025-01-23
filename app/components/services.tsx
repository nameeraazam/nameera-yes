import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { GiSoundOn } from "react-icons/gi";
import { SlSocialSoundcloud } from "react-icons/sl";
import { GiEarthSpit } from "react-icons/gi";
import { FiAirplay } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";
function Services() {
    return(
       <main className="main">
          <div className="ser-container">
              <div className="top-div-ser">
                 <h2 className="title-ser">Variety Of Services</h2>
                 <p className="des-ser">Unlock exceptional results with our comprehensive services
                  Innovative Solutions!!
                </p>
              </div>
              <div className="boxes-con">
                <div className="box">
                    <FaLaptopCode className="ser-icon"/>
                    <h3>Table Services</h3>
                     <span>Dine,Delight</span>
                </div>
                <div className="box">
                    <GiSoundOn className="ser-icon"/>
                    <h3>Counter-Services</h3>
                     <span>Grab,Go</span>
                </div>
                <div className="box">
                    <SlSocialSoundcloud className="ser-icon"/>
                    <h3>Buffet-Services</h3>
                     <span>Taste,Adventure</span>
                </div>
                <div className="box">
                    <GiEarthSpit className="ser-icon"/>
                    <h3>Assisted-Services</h3>
                     <span>Personalized Care</span>
                </div>
                <div className="box">
                    <FiAlignCenter className="ser-icon"/>
                    <h3>Self-Service</h3>
                     <span>Self,Delight</span>
                </div>
                <div className="box">
                    <FiAirplay className="ser-icon"/>
                    <h3>Take-Away</h3>
                     <span>Swift-Services</span>
                </div>
              
               
               
                </div>
          </div>
            
       </main>
    )
}
export default Services;