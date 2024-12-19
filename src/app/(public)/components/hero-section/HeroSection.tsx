import Image from "next/image"
import Barnner from "../../img/barner.gif"
export default function HeroSection(){
    return(
        <section>
            <div className="barnner">
                <Image src={Barnner} alt="barnner"/>
            </div>
        </section>
    )
}