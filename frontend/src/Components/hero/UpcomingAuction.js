import { Container, Heading } from "../../Routes";
import { useAuctionData } from "../../Utils/Data";
import { ProductCard } from "../cards/ProductCard";
import { useNavigate } from "react-router-dom";

export const UpcomingAuction = () => {
  const { auctions, loading, error } = useAuctionData();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const upcomingAuctions = auctions
    ?.filter((auction) => auction.status === "Upcoming")
    ?.slice(0, 8);

  return (
    <section className="process py-12">
      <Container>
        <Heading
          title="Upcoming Auctions"
          subtitle="Discover exclusive properties that will soon be available for bidding."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
          {upcomingAuctions.map((auction) => (
            <ProductCard item={auction} key={auction.id} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/auction/upcoming")}
            className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            View All Upcoming Auctions →
          </button>
        </div>
      </Container>
    </section>
  );
};
