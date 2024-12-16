import { Container, Heading } from "../../Routes";
import { upcomingAuctions } from "../../Utils/Data";
import { ProductCard } from "../cards/ProductCard";
export const UpcomingAuction = () => {
  return (
    <>
      <section className="process py-12">
          <Container>
                  <Heading
                    title="Upcoming Auctions"
                    subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
                  />
        
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
                    {upcomingAuctions?.slice(0, 12)?.map((item, index) => (
                      <ProductCard item={item} key={index + 1} />
                    ))}
                  </div>
                </Container>
      </section>
    </>
  );
};
