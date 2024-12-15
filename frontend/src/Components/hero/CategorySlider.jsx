import { categorylists } from "../../utils/data";
import { Container,Heading } from "../../Routes"
import "./styles/CategorySlider.css"

const CategorySlider = () => {
  return (
    <section className="catgeory-slider pb-16">
    <Container>
      <Heading title="Browse the catgeorys" subtitle="Most viewed and all-time top-selling category" />
      <div className="property-container">
        <div className="property-types">
          {categorylists.map((property, index) => (
          <div key={index} className="property-card">
            <img src={property.img} alt={property.title} className="property-image" />
            <div className="overlay">
            <span className="property-title">{property.title}</span>
          </div>
        </div>
         ))}
        </div>
      </div>
    </Container>
  </section>
  );
};


export { CategorySlider };
