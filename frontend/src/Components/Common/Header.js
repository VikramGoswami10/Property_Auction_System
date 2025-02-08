import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Container, CustomNavLink, CustomNavLinkList, ProfileCard, User1 } from "../../Routes";
import { menulists } from "../../Utils/Data";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [user, setUser] = useState(null); // Track user data
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // ✅ Move fetchUser outside useEffect
  const fetchUser = async () => {
    try {
      const response = await fetch("https://localhost:5002/api/Userinfoes/current-user", {
        method: "GET",
        credentials: "include", // Ensures session is included
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();
      if (data.userEmail) {
        setUser(data); // Store user data
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  };

  // ✅ Call fetchUser correctly in useEffect
  useEffect(() => {
    fetchUser();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (id) => setOpenDropdown(openDropdown === id ? null : id);
  const closeDropdown = () => setOpenDropdown(null);

  useEffect(() => {
    const closeMenuOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("https://localhost:5002/api/Userinfoes/logout", {
        method: "POST",
        credentials: "include", // Ensure session is cleared
      });
      sessionStorage.removeItem("user"); // Clear user data from session storage
      setUser(null);
      navigate("/login"); // Redirect to login after logout

      window.location.reload();
    } catch (error) {
      console.error("Logout failed");
    }
  };

  // Redirect user to the correct dashboard
  const handleProfileClick = () => {
    if (!user) return;

    switch (user.userRole) {
      case "admin":
        navigate("/admin");
        break;
      case "seller":
        navigate("/seller");
        break;
      case "buyer":
        navigate("/buyer");
        break;
      default:
        navigate("/buyer");
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}` : `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
      <Container>
        <nav className="p-4 flex justify-between items-center relative" ref={menuRef}>
          <div className="flex items-center gap-14">
            {/* LOGO */}
            <div>
              <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="capitalize list-none relative">
                  {list.submenu ? (
                    <div className="relative group">
                      <button onClick={() => toggleDropdown(list.id)} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"} flex items-center gap-1`}>
                        {list.link}
                        <AiOutlineDown size={12} />
                      </button>
                      {openDropdown === list.id && (
                        <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-48 z-50">
                          {list.submenu.map((sub) => (
                            <li key={sub.id} className="px-4 py-2 hover:bg-gray-100">
                              <CustomNavLinkList href={sub.path} className="text-black" onClick={closeDropdown}>
                                {sub.link}
                              </CustomNavLinkList>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <CustomNavLinkList href={list.path} isActive={location.pathname === list.path} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
                      {list.link}
                    </CustomNavLinkList>
                  )}
                </li>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            {!user ? (
              <>
                {/* Become a Seller */}
                <CustomNavLink href="/seller/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
                  Become a Seller
                </CustomNavLink>

                {/* Sign In */}
                <CustomNavLink href="/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
                  Sign in
                </CustomNavLink>

                {/* Join */}
                <CustomNavLink href="/register" className={`${!isHomePage || isScrolled ? "bg-green" : "bg-white"} px-8 py-2 rounded-full text-yellow shadow-md`}>
                  Join
                </CustomNavLink>
              </>
            ) : (
              <>
                {/* User Profile */}
                <div className="flex items-center gap-4 cursor-pointer" onClick={handleProfileClick}>
                  <span className={`${!isHomePage || isScrolled ? "bg-green" : "bg-white"} px-8 py-2 rounded-full text-yellow shadow-md`}>{user.userEmail}</span>
                  <ProfileCard>
                    <img src={User1} alt="User" className="w-full h-full object-cover" />
                  </ProfileCard>
                </div>

                {/* Logout Button */}
                <button onClick={handleLogout} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="w-10 h-10 flex justify-center items-center bg-black text-white">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
