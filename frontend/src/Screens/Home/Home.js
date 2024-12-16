import { ProductList } from "../../Components/hero/ProductList";
import { Hero, UpcomingAuction, Process} from "../../Routes";
import { CategorySlider } from "../../Routes";

export const Home = () => {

    return (
        <>
            <Hero />
            <CategorySlider />
            <ProductList />
            <UpcomingAuction />
            <Process />
        </>
    );
}
