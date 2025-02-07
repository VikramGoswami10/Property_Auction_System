import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiAuctionFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { Caption, PrimaryButton, ProfileCard, Title } from "../Common/Design";
import { NavLink, useNavigate } from "react-router-dom";

export const ProductCard = ({ item = {} }) => {
  const navigate = useNavigate();

  // Default Images if item.images is empty or undefined
  const defaultImages = [
    "https://imgs.search.brave.com/_aS2kH0wUNC3CZ0b7KnfNOrgrFezXWH2QCjdFXYR9o8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQ4Lzg1LzMy/LzM2MF9GXzQ4ODUz/Mjc5X3dRMnhPSnp1/aTl6MlBLRWgzNkhZ/cXVucmVTSUtPWEpB/LmpwZw",
    "https://imgs.search.brave.com/DcaUzU-PR2opCJ-MGE47ihk1vbb6ZTtWh1T_Ew4nV-s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/MTM3Nzg4Mi9waG90/by9mcm9udC15YXJk/LW9mLW1vZGVybi1j/aXR5LWhvdXNlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1p/SzJRVkdybktJRE5R/SXVlbzFmSG84YkhU/RG1fYXVfMUFvV0Rs/Tm1rZXdVPQ",
    "https://imgs.search.brave.com/cWtb_Ab9wmoLrgChu2FwMsbnuO5xNGAkpnkE-b8gXKE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/Mzg4MzYwL3Bob3Rv/L3BlcmZlY3QtYmFj/a3lhcmQtbGFuZHNj/YXBpbmcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUJlQW9k/OWJMNllXZmZKMk5C/dU9SbHdiOUo2ZHpJ/Yk9ZTXFVc3ZjeTM0/Y0E9",
    "https://imgs.search.brave.com/jEr1qYHBGW9RQQCBl-Nd4PgrRdQIrtwYD10G28qNs5A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/NzI1NjI1NC9waG90/by9tb3N0LWJlYXV0/aWZ1bC1uZWlnaGJv/cmhvb2Qtc3RyZWV0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz14NzJrVkVHdjFp/Rm9PMGRIem5GLThk/c0t1WlZjb1lzdXdH/TlJ2bkJwbkhrPQ",
    "https://imgs.search.brave.com/rY_q9PMfS7Es96lY5PdusxaxRHTYmytbTeUguTXTnnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzA2LzIxLzM5/LzM2MF9GXzYwNjIx/Mzk0MV9UbldzVHZh/SUxPSHpZZ0Vxd2pn/RUx4T3hjV0ZQVnJU/SC5qcGc",
    "https://imgs.search.brave.com/R8ZCmGcNCaBGXvGzS4Jms8w0y7m6TGdiSNWLXv8nq8E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9oYngx/MTAxMjR3aC1pbnRy/by0wMDEtNjcwMDJh/NjFkYjMwOC5qcGc_/Y3JvcD0wLjY3MHh3/OjEuMDB4aDswLjIz/OXh3LDAmcmVzaXpl/PTM2MDoq",
    "https://imgs.search.brave.com/kwRvFzcHEEiM4DfDBBKqBthK_oBwIppoKxLyF-o-ogU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM1/Njk4NTU5L3Bob3Rv/L2JlYXV0aWZ1bC1u/ZXctZnVybmlzaGVk/LWxpdmluZy1yb29t/LWluLW5ldy1sdXh1/cnktaG9tZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZGp4/WmRJZmcyWktxMndf/eXgySlRFV05nV0NH/X2JzMUZPQ0xpcjR3/X1BkMD0",
    "https://imgs.search.brave.com/nzX9Jinm7xegZVc8Kdafw-WjLPju2OohdID6OasiCEw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzg2LzM1LzE1/LzM2MF9GXzY4NjM1/MTUwOF9FY294Y1dl/NHVwakV4OEZvajlo/d2lYVHBPeHVwQjYy/Uy5qcGc",
    "https://imgs.search.brave.com/jaztOQFbYuEeQ3IUtPRX61t_OlsuU5hePtXrZ-8SD44/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY4/NjQ0NjcxL3Bob3Rv/L3ZpbGxhLWluLXRo/ZS10cm9waWNzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1x/REczd19wd1RuYU13/YnM3TGNjQzFtdEpo/NnoyU29zSGRUa09j/SnZWaXg0PQ", 
    "https://imgs.search.brave.com/MjbT7PNFiWQlziDZQYCagUHcfpcRug71w7P3eAs5KD4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/dXh1cnktcG9vbC12/aWxsYS1zcGVjdGFj/dWxhci1jb250ZW1w/b3JhcnktZGVzaWdu/LWRpZ2l0YWwtYXJ0/LXJlYWwtZXN0YXRl/LWhvbWUtaG91c2Ut/cHJvcGVydHktZ2Vf/MTI1OC0xNTA3NTku/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    "https://imgs.search.brave.com/K-YS2QwKnLlP7WtHowq-_eITuRjcPUL2eZTGHk4fD_o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEw/ODY0NTY2L3Bob3Rv/L2l0YWxpYW4taG9s/aWRheS12aWxsYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RGxfaTlkd0V4OXpw/TDlCMkhtb2V5clU3/MzJwSlJHYXFuWi1u/Z3ZhMjlHZz0",
    "https://imgs.search.brave.com/Vcc3uPx3KBtWx3d0j4A_u8Zg08x9PKvmCuGjVSK-vkY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk0Lzc2LzAx/LzM2MF9GXzQ5NDc2/MDEwMV91RFlyREJh/dmx4SzhQN09MZjB0/S3pUcXFXSDZRSGtj/bS5qcGc",
    "https://imgs.search.brave.com/L5nYFhIDCGR6zXGVra4SqQ5k1oBezgZV41y36U0CnYA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS8xY2U3MzYx/Mi9kbXMzcmVwL211/bHRpL29wdC9GaXZl/K0JlZHJvb20rVmls/bGErd2l0aCtzbGlk/ZS0zLTMwMGRwaS0x/OTIwdy5qcGc",
    "https://imgs.search.brave.com/wCodaQ6B_BWT3XUoa40aIArMaYCD3Wt_pAG9L_zKvsU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/NTIyNjM1L3Bob3Rv/L2x1eHVyeS1jYXJp/YmJlYW4tdmlsbGEt/aW4tdGhlLXZpcmdp/bi1pc2xhbmRzLXRy/b3BpY2FsLXZhY2F0/aW9uLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1HcnpIaGJf/TkFDZTlob0VaVEQ4/dG5uSnRPS0sxT3Bt/b2M5NFZ6V0hFNGJr/PQ",
    "https://imgs.search.brave.com/cp9bhfFwid44OLrADD7mG6WTEEJQT3cphVC2zrzyu5A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vZ3Mu/bnkuZ292L3NpdGVz/L2cvZmlsZXMvb2Vl/OTgxL2ZpbGVzL3N0/eWxlcy9tb2JpbGVf/bGVhZC9wdWJsaWMv/bWVkaWEvMjAxOC8x/MS9ueXNsYW5kLmpw/Zz9oPTdlNDVlZDI1/Jml0b2s9NFZHLWNa/eS0",
    "https://imgs.search.brave.com/iTmbjkFt8MA7I72OFMEm6PJnqfDhP4SYXHUt7oUoXjo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lMzYw/LnlhbGUuZWR1L2Fz/c2V0cy9zaXRlL180/MDB4MjI1X2Nyb3Bf/Y2VudGVyLWNlbnRl/ci9DYXN0cm9MYWJv/cmVpcm9Qb3J0dWdh/bF9mbGlja3Jfd2Vi/LmpwZw",
    "https://imgs.search.brave.com/TQ8R7E2jOg67kS8TWNMwnbNy0BNuFynPS5tWe5k-ToE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taWxs/bWFubGFuZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDEvdW5uYW1lZC00/Mi5qcGc ",
    "https://imgs.search.brave.com/C5yUdlqX6qEeJ4WJWzw7dcINbj3bdXuknawa_JpVTs4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bGFuZHNlYXJjaC5j/b20vbGlzdGluZ3Mv/NER6Tncvc21hbGwv/Y2hhcmxvdHRlc3Zp/bGxlLXZhLTEyODcx/MjI3OS5qcGc",
    "https://imgs.search.brave.com/fQq-hLH8Du9WpH8pDS2FLlOS5cap-lCa_JLnX9-ZXGE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/ODk0MTY3OC9waG90/by9idWlsZGluZy1h/cGFydG1lbnRzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/UHFLSHNwVTlFaFpJ/em9wLWJFcDdwR3Nk/djRBd1VMbUNBTzBr/SGE2VXFrPQ",
    "https://imgs.search.brave.com/huYEb9aV_LLKXI-Ja29qEvjCuAiLdt5sKNk3iy4uXR0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/MzUzNzY2NS9waG90/by9tb2Rlcm4tdG93/bmhvdXNlLWRlc2ln/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9dmdRZXNPWERS/enowVWZPWnhtVXRF/LXJGZTc1WWdBOUd2/a0tTOGVlZXVtRT0",
    "https://imgs.search.brave.com/Y9viK2ihuoOFVCd6UFomKkc8mHFm-FGhvz3F1ZIG6Ro/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NTIyNjg4Ni9waG90/by9tb2Rlcm4tcmVz/aWRlbnRpYWwtYnVp/bGRpbmdzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMVZC/THBQbXRmemJ2MVd0/dWVPb2lETlNseGpR/ek1TZjFUQ2hHUXpl/TW4wPQ",
  ];

  // Use provided images if available, else use default images
  const images = item?.images?.length > 0 ? item.images : defaultImages;

  // Slick Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows for navigation
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white shadow-s1 rounded-xl p-3">
      {/* Image Slider */}
      <div className="h-56 relative overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <NavLink to={`/details/${item?.id || 0}`}>
                <img
                  src={img}
                  alt={`Property Image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-xl"
                />
              </NavLink>
            </div>
          ))}
        </Slider>
        <ProfileCard className="shadow-s1 absolute right-3 bottom-3">
          <RiAuctionFill size={22} className="text-green" />
        </ProfileCard>
      </div>

      {/* Property Details */}
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

        {/* Buttons */}
        <div className="flex items-center justify-between mt-3">
          <PrimaryButton className="rounded-lg text-sm" onClick={() => navigate(`/property/${item?.id || 0}`)}>
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

// Prop Types Validation
ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    biddingPrice: PropTypes.number,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string), // Ensure images is an array of strings
  }),
};
