import { Container, PrimaryButton, Title } from "./Design";
import { useLocation } from "react-router-dom";
// Importing icons
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

export const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <>
      <footer className="relative bg-gray-800 py-16 mt-16 text-white">
        {isHomePage && <div className="bg-white w-full py-20 -mt-10 rounded-b-[40px] z-10 absolute top-0"></div>}

        <Container className={`${isHomePage ? "mt-32" : "mt-0"} flex flex-col md:flex-row justify-between gap-12`}>
          <div className="w-full md:w-1/3">
            <img src="../images/common/_logo.png" alt="Property Auction System Logo" className="mb-4" />
            <p className="text-gray-300 mb-6">Built with passion to bring property auctions closer to you. Empowering buyers and sellers with seamless, secure transactions.</p>
            <div className="bg-gray-300 h-[1px] my-8"></div>
            <Title className="font-normal text-gray-100">Get The Latest Updates</Title>
            <div className="flex items-center justify-between mt-5">
              <input type="text" placeholder="Enter your email" className="w-full h-full p-3.5 text-sm border-none outline-none rounded-l-md" />
              <PrimaryButton className="rounded-none py-3.5 px-8 text-sm hover:bg-indigo-600 rounded-r-md">Submit</PrimaryButton>
            </div>
            <p className="text-gray-300 text-sm mt-3">Email is safe. We don't spam.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3">
            <div>
              <Title level={5} className="text-white font-normal">Auction Categories</Title>
              <ul className="flex flex-col gap-2 mt-4 text-gray-200">
                <li>Residential Properties</li>
                <li>Commercial Real Estate</li>
                <li>Auctioned Estates</li>
                <li>Luxury Homes</li>
                <li>Land Auctions</li>
                <li>Vacation Homes</li>
              </ul>
            </div>

            <div>
              <Title level={5} className="text-white font-normal">About Us</Title>
              <ul className="flex flex-col gap-2 mt-4 text-gray-200">
                <li>About Us</li>
                <li>How it Works</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Our Mission</li>
              </ul>
            </div>

            <div>
              <Title level={5} className="text-white font-normal">We are Here to Help</Title>
              <ul className="flex flex-col gap-2 mt-4 text-gray-200">
                <li>How to Participate</li>
                <li>Payment & Bidding FAQs</li>
                <li>Property Information</li>
                <li>Support & Assistance</li>
                <li>Terms of Sale</li>
              </ul>
            </div>
          </div>
        </Container>

        {/* FOLLOW US SECTION IN FOOTER */}
        <div className="mt-16">
          <Title level={5} className="text-white font-normal">Follow Us</Title>
          <ul className="flex flex-col gap-2 mt-4 text-gray-200">
            <li className="flex items-center gap-2">
              <FiPhoneOutgoing size={19} />
              <span>(646) 968-0608</span>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineAttachEmail size={22} />
              <span>support@propertyauctionsystem.com</span>
            </li>
          </ul>
          <div className="flex items-center mt-5 justify-between">
            <div className="bg-white p-2 rounded-full">
              <AiOutlineYoutube size={22} />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaInstagram size={22} />
            </div>
            <div className="bg-white p-2 rounded-full">
              <CiTwitter size={22} />
            </div>
            <div className="bg-white p-2 rounded-full">
              <CiLinkedin size={22} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};