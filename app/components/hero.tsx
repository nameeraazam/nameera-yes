import "../style/hero.css";
import Image from "next/image";
function Hero(){
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
                </div>
                 <div className="hero-right-div">
                    <h1 className="title-hero">Savoring the flavor, one bite at a time.</h1>
                    <p className="des-hero">When you are looking for Pakistani foods, Cakes, Deserts restaurants in Karachi, 
                        you cannot go past Baig Kitchen. We have captured the exotic flavours of the Mediterranean seaside
                         region through to Turkey & created a exotic dining experience you will never forget.
                          While we largely focus on offering delicious Middle Eastern & Turkish food, we also 
                          draw on Mediterranean influences to give our menu that extra twist. Meals are served up 
                          from traditionally Meze style to flavoursome chargrills giving you and your loved ones 
                          the chance to share your food, stories and laughs. We offer a warm and friendly dining 
                          restaurant, and an ambience to remember, making us the ideal venue for all your special
                           occasions. Whether it is family dinner, casual parties or a corporate luncheon, we are 
                           the perfect place to go. In true Middle Eastern fashion, we love to celebrate food and we 
                           know our diners do too! That’s why we offer the best quality and tasting food every day 
                            a spectacular environment and exceptional hospitality which would make you keep coming 
                            back for more.

Explore Our Menu</p>
                  <button className="hero-btn">Explore Our Food!</button>
                  </div>
            </div>
        </div>
    )
}

export default Hero