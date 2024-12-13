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

  const isHomePage = location.pathname === "/";
  const role = "buyer"; // Dynamic role could come from user state or context

  return (
    <header
      className={`${
        isHomePage ? "header bg-primary" : "header bg-white"
      } ${isScrolled ? "scrolled" : ""}`}
    >
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* Left Section */}
          <div className="flex items-center gap-14">
            {/* Logo */}
            <div>
            {isHomePage && !isScrolled ? (
                  <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
                ) : (
                  <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
                )}
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="list-none capitalize">
                  <CustomNavLinkList
                    href={list.path}
                    isActive={location.pathname === list.path}
                  >
                    {list.link}
                  </CustomNavLinkList>
                </li>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            <IoSearchOutline size={23} />

            {/* Conditional "Become a Seller" Link */}
            {role === "buyer" && (
              <CustomNavLink href="/seller/login" className="text-white">
                {/* Updated text color */}
                Become a Seller
              </CustomNavLink>
            )}

            {/* Sign In Link */}
            <CustomNavLink href="/login" className="text-white">
              {/* Updated text color */}
              Sign In
            </CustomNavLink>

            {/* Join Link */}
            <CustomNavLink
              href="/register"
              className="bg-white px-8 py-2 rounded-full text-primary shadow-md"
            >
              Join
            </CustomNavLink>

            {/* Profile Card */}
            <CustomNavLink href="/dashboard">
              <ProfileCard>
                <img
                  src={User1}
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </ProfileCard>
            </CustomNavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 border rounded-md bg-white"
            >
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`menu-container ${isOpen ? "open" : "closed"} lg:hidden`}
        >
          {menulists.map((list) => (
            <li key={list.id} className="uppercase list-none">
              <CustomNavLink
                href={list.path}
                className="text-white block py-2 px-4 hover:bg-gray-700"
              >
                {/* Updated hover color */}
                {list.link}
              </CustomNavLink>
            </li>
          ))}
        </div>
      </Container>
    </header>
  );
};
