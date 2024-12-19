import Image from "next/image"
import Ferrari from "../../img/image1.jpg"
import Polex from "../../img/image2.jpg"
import Tyre from "../../img/image3.jpg"
import Civic from "../../img/image4.jpg"
import ferrari from "../../img/image51.jpg"
import Wagon from "../../img/image6.jpg"
import BMW from "../../img/image7.jpg"
import frontSide from "../../img/image8.jpg"
import WallPic from "../../img/image9.jpg"
export default function CarsSection() {
    return (
        <main>
            <div className="CarsSection">
                <h2>
                    Featured Vehicles 2024
                    <hr/>
                </h2>
            </div>

            <section className="carsPics">
                <div className="firstSec">
                    <div className="SectionDiv">
                        <Image src={Ferrari} alt="ferrari" />
                    </div>
                    <div className="SectionDiv">
                        <Image src={Polex} alt="Polex" />
                    </div>
                    <div className="SectionDiv">
                        <Image src={Tyre} alt="Tyre" />
                    </div>
                </div>
                <div className="secondSec">
                    <div className="SectionDiv">
                        <Image src={Civic} alt="Civic" />
                    </div>
                    <div className="SectionDiv">
                        <Image src={ferrari} alt="ferrari" />
                    </div>
                    <div className="SectionDiv">
                        <Image src={Wagon} alt="Wagon" />
                    </div>
                </div>
                <div className="thirdSec">
                    <div className="SectionDiv">
                        <Image src={BMW} alt="BMW" />
                    </div>
                    <div className="SectionDiv">
                        <Image src={frontSide} alt="PfrontSideolex" />
                    </div>
                    <div className="SectionDiv">
                        <Image src={WallPic} alt="WallPic" />
                    </div>
                </div>
            </section>
        </main>
    )
}