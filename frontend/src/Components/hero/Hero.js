import { Body, Caption, Container, ProfileCard, Title } from "../../Routes";
// import { IoIosSearch } from "react-icons/io";
import { AiOutlinePropertySafety } from "react-icons/ai";
import PropTypes from "prop-types";
import { CiCirclePlus } from "react-icons/ci";
import CountUp from "react-countup";
import "./styles/SearchBar.css";
export const User1 = "https://cdn-icons-png.flaticon.com/128/6997/6997662.png";
export const User2 = "https://cdn-icons-png.flaticon.com/128/236/236832.png";
export const User3 = "https://cdn-icons-png.flaticon.com/128/236/236831.png";
export const User4 = "https://cdn-icons-png.flaticon.com/128/1154/1154448.png";

export const Hero = () => {
  return (
    <>
      <section className="hero bg-primary py-8">
        <Container className="flex items-center justify-between md:flex-row flex-col">
          <div className="w-full md:w-1/2 text-white pr-12">
            <Title level={3} className="text-white font-bold">
            Where the highest bidder always wins—no popcorn required!
            </Title>
            <Body className="leading-7 text-gray-200 my-8">
            {/* Experience the thrill of winning and the ease of buying—real estate, reimagined for you. */}
            Reimagine property buying with transparent auctions, smooth transactions, and unbeatable opportunities. From competitive bidding to seamless ownership, we’ve crafted a platform where every highest bid brings you closer to the keys to your future.
            </Body>
            <SearchBox />
            <div className="flex flex-col items-center gap-8 my-8">
            <div className="flex items-center gap-8">
              <div>
                <Title level={4} className="text-white font-bold">
                  <CountUp start={0} end={1000} duration={3} />+
                </Title>
                <Body className="leading-7 text-gray-200">Total Product</Body>
              </div>
              <div>
                <Title level={4} className="text-white font-bold">
                  <CountUp start={0} end={100} duration={3} />+
                </Title>
                <Body className="leading-7 text-gray-200">Total Auction</Body>
              </div>
              <div>
                <Title level={4} className="text-white font-bold">
                  <CountUp start={0} end={50} duration={3} />+
                </Title>
                <Body className="leading-7 text-gray-200 ">Total Category</Body>
              </div>
            </div>
          </div>
          </div>
          <div className="w-full md:w-1/2 my-16 relative py-16">
          
            <img src="../images/hero/hero.png" alt="Hero-IMG" />
            <div className="horiz-move absolute md:top-28 top-8 left-0">
              <Box title="Verified Property Listings" desc="Authentic and trusted properties" />
            </div>
            <div className="horiz-move absolute bottom-72 right-0">
              <Box title="Transparent Bidding Process" desc="Fair, real-time competition" />
            </div>

            <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl ml-5 -mt-5 vert-move w-1/2">
              <Title>100+Successful Auctions</Title>
              {/* 100+ Auctions Closed */}
              <div className="flex items-center">
                <ProfileCard className="border-2 border-white">
                  <img src={User1} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>
                <ProfileCard className="border-2 border-white -ml-4">
                  <img src={User2} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>
                <ProfileCard className="border-2 border-white -ml-4">
                  <img src={User3} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>
                <ProfileCard className="border-2 border-white -ml-4">
                  <img src={User4} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>

                <ProfileCard className="border-2 border-white -ml-4">
                  <CiCirclePlus size={27} />
                </ProfileCard>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="bg-white w-full py-16 -mt-10 rounded-t-[40px]"></div>
    </>
  );
};

const SearchBox = () => {
  return (
    <div className="search-bar-container">
      <h2 className="search-bar-title">
        Find your next <span className="highlight-text">property</span> at auction
      </h2>
      <form className="search-bar-form">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="e.g. Oxford or NW3"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="max-price">Max Price</label>
          <select id="max-price" className="form-input">
            <option>Any</option>
            <option>₹ 100,000</option>
            <option>₹ 200,000</option>
            <option>₹ 300,000</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="property-type">Property Type</label>
          <select id="property-type" className="form-input">
            <option>None Selected</option>
            <option>House</option>
            <option>Flat</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="min-bedrooms">Min Bedrooms</label>
          <select id="min-bedrooms" className="form-input">
            <option>No Min.</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

const Box = ({ title, desc }) => {
  return (
    <>
      <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl w-auto">
        <div className="w-14 h-14 bg-green_100 flex items-center justify-center rounded-full">
          <AiOutlinePropertySafety size={27} className="text-primary" />
        </div>
        <div>
          <Title>{title}</Title>
          <Caption>{desc}</Caption>
        </div>
      </div>
    </>
  );
};

Box.propTypes = {
  title: PropTypes.any,
  desc: PropTypes.any,
};
