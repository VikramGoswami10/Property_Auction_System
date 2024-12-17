import { Container, Heading } from "../../Routes";
import { pastAuctions} from "../../Utils/Data";
import { ProductCard } from "../cards/ProductCard";
export const PastAuction = () => {
  return (
    <>
      <section className="process py-12 relative z-10">
        <Container>
          <Heading
            title="Past Auctions"
              subtitle="Past Auctions successfully hosted by BidBuzz "/>  
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
                  {pastAuctions?.slice(0, 12)?.map((item, index) => (
                    <ProductCard item={item} key={index + 1} />
                  ))}
                </div>
         </Container>
      </section>
    </>
  );
};
