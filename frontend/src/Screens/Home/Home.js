import { ProductList } from "../../Components/hero/ProductList";
import { Hero } from "../../Routes";
import { CategorySlider } from "../../Routes";

export const Home = () => {

    return (
        <>
            <Hero />
            <CategorySlider />
            <ProductList />
        </>
    );
}
