import "./hero.css"
import Card from "../reuseable/productcard"
import Snickers from "../../assets/snickers-img.jfif"
import Wristwatch from "../../assets/wristwatch.webp"
import Vest from "../../assets/T-shirt.jfif"
import Phone from "../../assets/phone.jpg"
import Car from "../../assets/car.jfif"
import Bag from "../../assets/bag.jfif"

const Hero = () => {
    return ( 
        <div className="Card-Container">
             <herotop className="Top">
                <Card
                ProductImg={Snickers}
                ProductName="Snickers"
                Price="$50.00"
                styles="style1"
                />

                <Card
                ProductImg={Wristwatch}
                ProductName="Wristwatch"
                Price="$125.00"
                styles="style2"
                />

                <Card
                ProductImg={Vest}
                ProductName="T-Shirts"
                Price="$16.00"
                styles="style3"
            />
            </herotop>
            <herobuttom className="buttom">
                <Card
                ProductImg={Phone}
                ProductName="Phone"
                Price="$270.00"
                styles="style4"
                />
                <Card
                ProductImg={Car}
                ProductName="Car"
                Price="$16.00"
                styles="style5"
                />
                <Card
                ProductImg={Bag}
                ProductName="Bags"
                Price="$16.00"
                styles="style6"
                />
            </herobuttom>
        </div>
     );
}
 
export default Hero;