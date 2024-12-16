import { Container, PrimaryButton, Title } from "./Design";
import { useLocation } from "react-router-dom";

// FOLLOW US SECCTION IMPORTS 
// import { FiPhoneOutgoing } from "react-icons/fi";
// import { MdOutlineAttachEmail } from "react-icons/md";
// import { IoLocationOutline } from "react-icons/io5";
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin, CiTwitter } from "react-icons/ci";
// import { AiOutlineYoutube } from "react-icons/ai";

export const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className="relative bg-primary py-16 mt-16">
        {isHomePage && <div className="bg-white w-full py-20 -mt-10 rounded-b-[40px] z-10 absolute top-0"></div>}

        <Container className={`${isHomePage ? "mt-32" : "mt-0"} flex flex-col md:flex-row justify-between gap-12`}>
          <div className="w-full md:w-1/3">
            <img src="../images/common/header-logo.png" alt="Property Auction System Logo" />
            <br />
            <p className="text-gray-300">Built with passion to bring property auctions closer to you. Empowering buyers and sellers with seamless, secure transactions.</p>
            <div className="bg-gray-300 h-[1px] my-8"></div>
            <Title className="font-normal text-gray-100">Get The Latest Updates</Title>
            <div className="flex items-center justify-between mt-5">
              <input type="text" placeholder="Enter your email" className="w-full h-full p-3.5 py-[15px] text-sm border-none outline-none rounded-l-md" />
              <PrimaryButton className="rounded-none py-3.5 px-8 text-sm hover:bg-indigo-800 rounded-r-md">Submit</PrimaryButton>
            </div>
            <p className="text-gray-300 text-sm mt-3">Email is safe. We don't spam.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3">
            <div>
              <Title level={5} className="text-white font-normal">Auction Categories</Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p>Residential Properties</p>
                <p>Commercial Real Estate</p>
                <p>Auctioned Estates</p>
                <p>Luxury Homes</p>
                <p>Land Auctions</p>
                <p>Vacation Homes</p>
              </ul>
            </div>

            <div>
              <Title level={5} className="text-white font-normal">About Us</Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p>About Us</p>
                <p>How it Works</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
                <p>Our Mission</p>
              </ul>
            </div>

            <div>
              <Title level={5} className="text-white font-normal">We are Here to Help</Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p>How to Participate</p>
                <p>Payment & Bidding FAQs</p>
                <p>Property Information</p>
                <p>Support & Assistance</p>
                <p>Terms of Sale</p>
              </ul>
            </div>

            
          </div>
        </Container>
      </footer>

      {/* FOLLOW US SECTION IN FOOTER */}
      {/* <div>
        <Title level={5} className="text-white font-normal">Follow Us</Title>
        <ul className="flex flex-col gap-5 mt-8 text-gray-200">
          <div className="flex items-center gap-2">
            <FiPhoneOutgoing size={19} />
            <span>(646) 968-0608</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineAttachEmail size={22} />
            <span>support@propertyauctionsystem.com</span>
          </div>
        </ul>
        <div className="flex items-center mt-5 justify-between">
          <ProfileCard className="bg-white">
            <AiOutlineYoutube size={22} />
          </ProfileCard>
          <ProfileCard className="bg-white">
            <FaInstagram size={22} />
          </ProfileCard>
          <ProfileCard className="bg-white">
            <CiTwitter size={22} />
          </ProfileCard>
          <ProfileCard className="bg-white">
            <CiLinkedin size={22} />
          </ProfileCard>
        </div>
      </div> */}
    </>
  );
};
