import { Container, Heading } from "../../Routes";
import { AuctionData } from "../../Utils/Data"; // Use AuctionData instead of productlists
import { ProductCard } from "../cards/ProductCard";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const navigate = useNavigate();

  // Filter only ongoing auctions and limit to 8 items
  const ongoingAuctions = AuctionData.filter(
    (auction) => auction.status === "Ongoing"
  ).slice(0, 8);

  return (
    <>
      <section className="product-home">
        <Container>
          <Heading
            title="Live Auctions"
            subtitle="Explore the world's best & largest bidding marketplace with our exclusive properties up for auction."
          />

          {/* Displaying only 8 items (2 rows, 4 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
            {ongoingAuctions.map((auction) => (
              <ProductCard auction={auction} key={auction.id} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/auction")}
              className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              View All Auctions →
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};
