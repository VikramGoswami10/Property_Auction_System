import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Container} from "../../Routes";
import { useAuth } from "../../Screens/auth/context/AuthContext";
import { baseurl } from "../../Utils/api";


// Default Profile Image
const defaultProfilePic = "https://www.w3schools.com/howto/img_avatar.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [propertyDropdown, setPropertyDropdown] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const { user, setUser, fetchUser } = useAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const togglePropertyDropdown = () => setPropertyDropdown(!propertyDropdown);

  useEffect(() => {
    const closeOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownOpen(false);
        setPropertyDropdown(false);
      }
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    document.addEventListener("mousedown", closeOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(baseurl+'Users/logout', {
        method: "POST",
        credentials: "include",
      });

      sessionStorage.removeItem("user");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  //Function to determine user profile route
  const getProfileRoute = () => {
    if (!user) return "/login";
    switch (user.userRole) {
      case "admin":
        return "/admin";
      case "seller":
        return "/seller";
      case "buyer":
        return "/buyer";
      default:
        return "/buyer";
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}` : `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
      <Container>
        <nav className="p-4 flex justify-between items-center px-6 lg:px-12">
          {/* LOGO */}
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => navigate("/")} className="text-gray-700 hover:text-black">
              Home
            </button>

            {/* Property Dropdown */}
            <div className="relative">
              <button 
                onClick={togglePropertyDropdown} 
                className="text-gray-700 hover:text-black flex items-center gap-1"
              >
                Property <AiOutlineDown size={12} />
              </button>
              {propertyDropdown && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-48 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button onClick={() => navigate("/auction")} className="text-black w-full text-left">Live Auctions</button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button onClick={() => navigate("/auction/upcoming")} className="text-black w-full text-left">Upcoming Auctions</button>
                  </li>
                </ul>
              )}
            </div>
            
            <button onClick={() => navigate("/how-to-bid")} className="text-gray-700 hover:text-black">
              How to Bid
            </button>
            <button onClick={() => navigate("/contact")} className="text-gray-700 hover:text-black">
              Contact
            </button>
            <button onClick={() => navigate("/faq")} className="text-gray-700 hover:text-black">
              FAQ
            </button>
          </div>

          {/* Right Section: Login/Profile */}
          <div className="flex items-center gap-6">
            {user ? (
              <div className="relative">
                {/* Profile Button */}
                <button 
                  onClick={toggleDropdown} 
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-md border border-gray-300"
                >
                  <img 
                    src={user.profilePic || defaultProfilePic} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover" 
                  />
                  {user.userEmail}
                  <AiOutlineDown size={14} />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-4 mt-2 w-50 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
                    <button 
                      onClick={() => navigate(getProfileRoute())} 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </button>
                    <button 
                      onClick={handleLogout} 
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button onClick={() => navigate("/seller/login")} className="text-gray-700 hover:text-black">
                  Become a Seller
                </button>
                <button onClick={() => navigate("/login")} className="text-gray-700 hover:text-black">
                  Sign in
                </button>
                <button 
                  onClick={() => navigate("/register")} 
                  className="px-6 py-2 rounded-full shadow-md transition bg-blue-500 text-white"
                >
                  Join
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="w-10 h-10 flex justify-center items-center bg-black text-white rounded">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
