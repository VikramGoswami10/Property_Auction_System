import { Container, Heading } from "../../Routes";
import { AuctionData } from "../../Utils/Data";
import { ProductCard } from "../cards/ProductCard";


export const UpcomingAuction = () => {
  // Filter only upcoming auctions
  const upcomingAuctions = AuctionData.filter(auction => auction.status === "Upcoming");

  return (
    <>
      <section className="process py-12">
        <Container>
          <Heading
            title="Upcoming Auctions"
            subtitle="Discover exclusive properties that will soon be available for bidding."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
            {upcomingAuctions.map((auction) => (
              <ProductCard auction={auction} key={auction.id} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
