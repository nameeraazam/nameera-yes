import "../style/hero.css";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import "../style/about.css";
import Link from "next/link";

function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                <div>
                    <Image src={"/image/images.1.jpeg" }
                     width={500}
                     height={50} 
                     alt="logo"
                     className="header-image"  > 
                    </Image>
                    <div className="social-icon">

                    <Link href={"https://www.facebook.com/baigkitchenoffical/"}><IoLogoFacebook className="s-icon1"/></Link>
                    <Link href={"https://www.instagram.com/p/DB0uPDBgT2F/?igsh=NTc4MTIwNjQ2YQ=="}> <FaInstagramSquare className="s-icon2"/></Link>
                    </div>  
                   </div>
                 <div className="hero-right-div">
                    <h1 className="title-hero">Pakistani Food</h1>
                    <p className="des-hero">Step into Baigs Kitchen, where the aroma of exotic spices and the warmth of traditional Pakistani hospitality will transport you to a culinary paradise. Savor our signature dishes, crafted with love and care, using only the freshest ingredients and timeless recipes passed down through generations. From the tender bite of our Tandoori Chicken to the flavorful burst of our Biryani, every dish is a testament to our commitment to authenticity and excellence. Come, indulge in a culinary journey that will leave you craving for more, and experience the true essence of Pakistani cuisine at Baigs Kitchen.



</p>
                  </div>
            </div>
      </div>
    )
}
export default About;