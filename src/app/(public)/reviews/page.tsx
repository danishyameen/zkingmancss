import Image from "next/image"
import review1 from "../../(public)/img/team1.gif"
import review2 from "../../(public)/img/team2.gif"
import review3 from "../../(public)/img/team3.gif"


export default function ReviewsPage() {
    return (
        <main>
            <section className="reviewsPage">
                <div className="reviewsPageDiv1">
                    <h2>Testimonials</h2>
                    <h4>Customers Feedback</h4>
                </div>
                <div className="feedback">
                    <div className="rewiew1">
                        <Image src={review1} alt="rewiew1"/>
                    </div>
                    <div className="reviewsPageDiv2">
                        <h2>Anjela Robert</h2>
                        <h5>CEO Anjela enterprises 2024</h5>
                        <p>I recently visited your car website to explore options for a new vehicle, and I was thoroughly impressed with the user experience. The website’s design is sleek and modern, making it visually appealing. Navigation is intuitive, allowing me to easily find the information I needed without any hassle. Providing accurate and relevant results quickly. I particularly appreciated the detailed filters that helped me narrow down my choices based on my preferences. Overall, the website’s layout and functionality made my car shopping experience enjoyable and efficient. The website offers comprehensive information about each car model, including specifications, features, and pricing. The high-quality images and 360-degree views gave me a clear understanding of the vehicles. Additionally, the comparison tool was incredibly useful in evaluating different models side by side. The inclusion of customer reviews and ratings further helped me make an informed decision. I felt confident in my choice thanks to the wealth of information provided. This website is a fantastic resource for anyone in the market for a new car. I had a few questions while browsing your car website, so I decided to use the live chat feature. I was pleasantly surprised by the prompt response from the customer support team. The representative was knowledgeable and provided clear and concise answers to all my queries. They even offered additional information that I hadn’t considered, which was very helpful. The level of customer support exceeded my expectations and made me feel valued as a potential customer.
                        </p>
                    </div>
                </div>

                <div className="feedback">
                    <div className="rewiew1">
                        <Image src={review2} alt="rewiew2"/>
                    </div>
                    <div className="reviewsPageDiv2">
                        <h2>Abrar Khan</h2>
                        <h5>CEO Faisal enterprises 2024</h5>
                        <p>I recently visited your car website to explore options for a new vehicle, and I was thoroughly impressed with the user experience. The website’s design is sleek and modern, making it visually appealing. Navigation is intuitive, allowing me to easily find the information I needed without any hassle. Providing accurate and relevant results quickly. I particularly appreciated the detailed filters that helped me narrow down my choices based on my preferences. Overall, the website’s layout and functionality made my car shopping experience enjoyable and efficient. The website offers comprehensive information about each car model, including specifications, features, and pricing. The high-quality images and 360-degree views gave me a clear understanding of the vehicles. Additionally, the comparison tool was incredibly useful in evaluating different models side by side. The inclusion of customer reviews and ratings further helped me make an informed decision. I felt confident in my choice thanks to the wealth of information provided. This website is a fantastic resource for anyone in the market for a new car. I had a few questions while browsing your car website, so I decided to use the live chat feature. I was pleasantly surprised by the prompt response from the customer support team. The representative was knowledgeable and provided clear and concise answers to all my queries. They even offered additional information that I hadn’t considered, which was very helpful. The level of customer support exceeded my expectations and made me feel valued as a potential customer.
                        </p>
                    </div>
                </div>

                <div className="feedback">
                    <div className="rewiew1">
                        <Image src={review3} alt="rewiew3"/>
                    </div>
                    <div className="reviewsPageDiv2">
                        <h2>Jhon Doe</h2>
                        <h5>CEO Doe enterprises 2024</h5>
                        <p>I recently visited your car website to explore options for a new vehicle, and I was thoroughly impressed with the user experience. The website’s design is sleek and modern, making it visually appealing. Navigation is intuitive, allowing me to easily find the information I needed without any hassle. Providing accurate and relevant results quickly. I particularly appreciated the detailed filters that helped me narrow down my choices based on my preferences. Overall, the website’s layout and functionality made my car shopping experience enjoyable and efficient. The website offers comprehensive information about each car model, including specifications, features, and pricing. The high-quality images and 360-degree views gave me a clear understanding of the vehicles. Additionally, the comparison tool was incredibly useful in evaluating different models side by side. The inclusion of customer reviews and ratings further helped me make an informed decision. I felt confident in my choice thanks to the wealth of information provided. This website is a fantastic resource for anyone in the market for a new car. I had a few questions while browsing your car website, so I decided to use the live chat feature. I was pleasantly surprised by the prompt response from the customer support team. The representative was knowledgeable and provided clear and concise answers to all my queries. They even offered additional information that I hadn’t considered, which was very helpful. The level of customer support exceeded my expectations and made me feel valued as a potential customer.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}