import DirectionSlider from "../components/DirectionSlider"


const Directions = () => {
  return (
    <section className="directions">
      <div className="container">
        <h2 className="directions__title">Our directions</h2>
        <p className="directions__text">We specialize in international logistics and turnkey delivery solutions, providing reliable and cost-effective transportation services across multiple regions.</p>

        <DirectionSlider/>
      </div>
    </section>
  )
}

export default Directions
