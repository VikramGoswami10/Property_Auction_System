import { Container, Heading } from "../../Routes";
import { AuctionData } from "../../Utils/Data";
import { ProductCard } from "../cards/ProductCard";


export const PastAuction = () => {
  // Filter only past auctions
  const pastAuctions = AuctionData.filter(auction => auction.status === "Past");

  return (
    <>
      <section className="process py-12 relative z-10">
        <Container>
          <Heading
            title="Past Auctions"
            subtitle="Explore successfully completed auctions hosted by BidBuzz."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
            {pastAuctions.map((auction) => (
              <ProductCard auction={auction} key={auction.id} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
