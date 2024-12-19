import CarsSection from "./components/cars-section/CarsSection"

export default function Home() {
    return (
        <main>
            <section className="HomePage">
                <div className="HomePageDiv">
                    <h2>Discover Your Dream Car Today</h2>
                    <h2>Your Ultimate Destination for Quality Cars</h2>
                </div>
                <div>
                    <CarsSection/>
                </div>
            </section>
        </main>
    )
}