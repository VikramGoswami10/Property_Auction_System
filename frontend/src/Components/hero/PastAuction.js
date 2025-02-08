// import { Container, Heading } from "../../Routes";
// import { AuctionData } from "../../Utils/Data";
// import { ProductCard } from "../cards/ProductCard";
// import { useNavigate } from "react-router-dom";

// export const PastAuction = () => {
//   const navigate = useNavigate();

//   // Filter only past auctions and limit to 8 items
//   const pastAuctions = AuctionData.filter(
//     (auction) => auction.status === "Past"
//   ).slice(0, 8);

//   return (
//     <>
//       <section className="process py-12 relative z-10">
//         <Container>
//           <Heading
//             title="Past Auctions"
//             subtitle="Explore successfully completed auctions hosted by BidBuzz."
//           />

//           {/* Auction Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
//             {pastAuctions.map((auction) => (
//               <ProductCard auction={auction} key={auction.id} />
//             ))}
//           </div>

//           {/* View All Button */}
//           <div className="text-center mt-8">
//             <button
//               onClick={() => navigate("/auction/past")}
//               className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
//             >
//              View All Past Auctions →
//             </button>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };
