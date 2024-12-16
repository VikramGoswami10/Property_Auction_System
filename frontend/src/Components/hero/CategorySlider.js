import { categorylists } from "../../Routes";
import { Container, Heading } from "../../Routes";
import "./styles/CategorySlider.css";

const CategorySlider = () => {
  return (
    <section className="category-slider pb-16">
      <Container>
        <Heading title="Browse the categories" subtitle="Most viewed and all-time top-selling categories" />
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

export default CategorySlider;
