import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiAuctionFill } from "react-icons/ri";
import { Caption, PrimaryButton, ProfileCard, Title } from "../Common/Design";
import { NavLink, useNavigate } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const images = item?.images?.length > 0 ? item.images : [
    "https://example.com/default1.jpg",
    "https://example.com/default2.jpg",
  ];

  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };

  return (
    <div className="bg-white shadow-s1 rounded-xl p-3">
      <div className="h-56 relative overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <NavLink to={`/property/${item?.id || 0}`}>
                <img src={img} alt={`Property Image ${index + 1}`} className="w-full h-56 object-cover rounded-xl" />
              </NavLink>
            </div>
          ))}
        </Slider>
        <ProfileCard className="shadow-s1 absolute right-3 bottom-3">
          <RiAuctionFill size={22} className="text-green" />
        </ProfileCard>
      </div>
      <div className="details mt-4">
        <Title className="uppercase">{item?.title || "No Title"}</Title>
        <hr className="mt-3" />
        <div className="flex items-center justify-between py-4">
          <Caption className="text-green">Current Bid: ₹{item?.currentBid || "N/A"}</Caption>
          <Caption className="text-red-500">Buy Now: ₹{item?.price || "N/A"}</Caption>
        </div>
        <PrimaryButton onClick={() => navigate(`/property/${item?.id || 0}`)}>Place Bid</PrimaryButton>
      </div>
    </div>
  );
};

ProductCard.propTypes = { item: PropTypes.object };
