import PropTypes from "prop-types";
import { RiAuctionFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { Caption, PrimaryButton, ProfileCard, Title } from "../Common/Design";
import { NavLink, useNavigate } from "react-router-dom";

export const ProductCard = ({ item = {} }) => {  // ✅ Ensure item is always defined
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-s1 rounded-xl p-3">
      <div className="h-56 relative overflow-hidden">
        <NavLink to={`/details/${item?._id || 0}`}>
          <img
            src={item?.image || "https://via.placeholder.com/300"}
            alt={item?.title || "No Image"}
            className="w-full h-full object-cover rounded-xl hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
          />
        </NavLink>
        <ProfileCard className="shadow-s1 absolute right-3 bottom-3">
          <RiAuctionFill size={22} className="text-green" />
        </ProfileCard>
      </div>
      
      <div className="details mt-4">
        <Title className="uppercase">{item?.title || "No Title"}</Title>
        <hr className="mt-3" />
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-5">
            <RiAuctionFill size={40} className="text-green" />
            <div>
              <Caption className="text-green">Current Bid</Caption>
              <Title>${item?.biddingPrice || "N/A"}</Title>
            </div>
          </div>
          <div className="w-[1px] h-10 bg-gray-300"></div>
          <div className="flex items-center gap-5">
            <GiTakeMyMoney size={40} className="text-red-500" />
            <div>
              <Caption className="text-red-500">Buy Now</Caption>
              <Title>${item?.price || "N/A"}</Title>
            </div>
          </div>
        </div>
        <hr className="mb-3" />

        <div className="flex items-center justify-between mt-3">
          <PrimaryButton className="rounded-lg text-sm" onClick={() => navigate(`/property/${item?._id || 0}`)}>
            Place Bid
          </PrimaryButton>
          <PrimaryButton className="rounded-lg px-4 py-3">
            <MdOutlineFavorite size={20} />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
};
