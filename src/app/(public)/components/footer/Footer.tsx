import Link from "next/link"
export default function Footer() {
    return (

        <main className="mainfooter">
            <footer>
                <div className="footer1Div">
                    <h2>Visit Us Today</h2>
                    <p>Convenient Location: We are conveniently located at Khalid Bin waleed road karachi. All rights reserved &copy;copyrights &#174; zKingman registered trademark</p>
                </div>
            <div className="subFooterDiv">
                <div className="footer2Div">
                    <h2>Services</h2>
                    <ul>
                        <li> <Link href="/">Home</Link></li>
                        <li><Link href="/reviews">Testimonials</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer3Div">
                    <h2>Social Media</h2>
                    <p>facebook</p>
                    <p>twitter</p>
                    <p>instagram</p>
                    <p>linkedin</p>
                </div>
                
            </div>
            
            </footer>
        </main>
    )
}