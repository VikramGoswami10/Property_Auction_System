import { Container, Heading } from "../../Routes";
import { AuctionData } from "../../Utils/Data"; // Use AuctionData instead of productlists
import { ProductCard } from "../cards/ProductCard";


export const ProductList = () => {
  // Filter only ongoing auctions
  const ongoingAuctions = AuctionData.filter(auction => auction.status === "Ongoing");

  return (
    <>
      <section className="product-home">
        <Container>
          <Heading
            title="Live Auctions"
            subtitle="Explore the world's best & largest bidding marketplace with our exclusive properties up for auction."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
            {ongoingAuctions.map((auction, index) => (
              <ProductCard auction={auction} key={auction.id} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
