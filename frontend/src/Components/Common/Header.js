import { useState, useEffect, useRef } from "react"; // hooks
import { useLocation } from "react-router-dom"; // current route/location

// Designs
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // for Ai icons
import { IoSearchOutline } from "react-icons/io5"; // for Io icons

import { Container, CustomNavLink, CustomNavLinkList, ProfileCard } from "../../Routes";
import { User1 } from "../../Routes";
import { menulists } from "../../Utils/Data";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // Scroll behavior
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen); // Open/close mobile menu
  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleScroll = () => setIsScrolled(window.scrollY > 0); // Check scroll

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   // Check if it's the home page
  const isHomePage = location.pathname === "/";
  const role = "buyer"; // Dynamic role could come from user state or context

  return (
    <>
    <header className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}` : `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
        <Container>
          <nav className="p-4 flex justify-between items-center relative">
            <div className="flex items-center gap-14">
             {/* LOGO */}
              <div>
            {isHomePage && !isScrolled ? (
                  <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
                ) : (
                  <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
                )}
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="capitalize list-none">
                  <CustomNavLinkList
                    href={list.path}
                    isActive={location.pathname === list.path}
                    // on scroll change text color
                    className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}
                    >
                    {list.link}
                  </CustomNavLinkList>
                </li>
              ))}
            </div>
          </div>

           {/* Right Section */}
            <div className="flex items-center gap-8 icons">
              <div className="hidden lg:flex lg:items-center lg:gap-8">
                <IoSearchOutline size={23} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`} />
                
                {/* Conditional "Become a Seller" Link */}
                {role === "buyer" && (
                  <CustomNavLink href="/seller/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
                    Become a Seller
                  </CustomNavLink>
                )}

                {/* Sign In Link */}
                <CustomNavLink href="/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
                  Sign in
                </CustomNavLink>

                {/* Join Link */}
                <CustomNavLink href="/register" className={`${!isHomePage || isScrolled ? "bg-green" : "bg-white"} px-8 py-2 rounded-full text-yellow shadow-md`}>
                  Join
                </CustomNavLink>

                {/* Profile Card */}
                <CustomNavLink href="/">
                {/* <CustomNavLink href="/dashboard"> */}
                  <ProfileCard>
                    <img src={User1} alt="" className="w-full h-full object-cover" />
                  </ProfileCard>
                </CustomNavLink>
              </div>

              {/* Mobile Menu Button */}
              <div className={`icon flex items-center justify-center gap-6 ${isScrolled || !isHomePage ? "text-primary" : "text-white"}`}>
                <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
                  {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {/* Responsive Menu if below 768px */}
            <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}>
              {menulists.map((list) => (
                <li href={list.path} key={list.id} className="uppercase list-none">
                  <CustomNavLink className="text-white">{list.link}</CustomNavLink>
                </li>
              ))}
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};
