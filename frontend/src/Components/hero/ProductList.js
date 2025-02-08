import { Container, Heading } from "../../Routes";
import { useAuctionData } from "../../Utils/Data";
import { ProductCard } from "../cards/ProductCard";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const { auctions, loading, error } = useAuctionData();
  const navigate = useNavigate();

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const ongoingAuctions = auctions?.filter((auction) => auction.status === "Ongoing")?.slice(0, 8);

  return (
    <section className="product-home bg-gray-100 py-12">
      <Container className="w-full mx-auto px-6">
        <div className="text-center mb-6">
        <Heading
          title="Live Auctions"
          subtitle="Explore the world's best & largest bidding marketplace with our exclusive properties up for auction."
          className="text-center mb-6"
        />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {ongoingAuctions.map((auction) => (
            <div className="w-full max-w-sm"> {/* Ensures uniform width */}
              <ProductCard item={auction} key={auction.id} />
            </div>
          ))}
        </div>
        
        {/* Fix for Button Alignment & Visibility */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/auction")}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-purple-700"
          >
            View All Auctions →
          </button>
        </div>
      </Container>
    </section>
  );
};
