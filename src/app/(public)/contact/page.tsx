import Image from "next/image"
import Maps from "../../(public)/img/contact1.gif"
// Image

export default function ContactPage() {
    return (
        <main>
            <section className="contactPage">
                <div className="contactPageDiv1">
                    <h1>Contact Us</h1>
                </div>

                <div className="location w-full">
                    <Image src={Maps} alt="map" />
                </div>

                <div className="contactDetails">
                    <div className="contactPageDiv2">
                        <h2>Get in Touch</h2>
                        <p>We invite you to visit our dealership and experience the Zkingman difference for yourself. Whether you’re in the market for a new car, need service for your current vehicle, or just have a question, we are here to help. We look forward to serving you! Follow us on social media to stay updated on our latest offerings, events, and promotions. Join the Zkingman community and be a part of our journey. Feel free to tweak or expand on this to make it perfectly fit Zkingman!</p>
                        
                    </div>
                    
                    <div className="contactPageDiv2">
                        <h2>Contact Us</h2>
                        <h5>Phone no: 111-222-333 </h5>
                        <h5> Email: support@zKingman.com </h5> 
                        <h5>Address: JL.Kemacetan timur no 23. block. Q Jakarta-Indonesia</h5>
                    </div>
                </div>
            </section>
        </main>
    )
}
