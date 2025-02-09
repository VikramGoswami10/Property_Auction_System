import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Container, CustomNavLink } from "../../Routes";
import { useAuth } from "../../Screens/auth/context/AuthContext"; // ✅ Import AuthContext

// Default Profile Image
const defaultProfilePic = "https://www.w3schools.com/howto/img_avatar.png"; // Replace with actual default image

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const { user, setUser, fetchUser } = useAuth(); // ✅ Use global auth state

  useEffect(() => {
    fetchUser(); // ✅ Ensure navbar updates dynamically
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const closeOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownOpen(false);
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
      await fetch("https://localhost:5002/api/Userinfoes/logout", {
        method: "POST",
        credentials: "include",
      });

      sessionStorage.removeItem("user"); // ✅ Clear session data
      setUser(null); // ✅ Update AuthContext
      navigate("/login");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  // ✅ Function to determine user profile route
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

  return (
    <header className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all ${isScrolled ? "py-2" : "py-4"}`}>
      <Container>
        <nav className="flex justify-between items-center px-6 lg:px-12">
          {/* LOGO */}
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src="../images/common/logo.png" alt="LogoImg" className="h-11" />
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => navigate("/")} className="text-gray-700 hover:text-black">
              Home
            </button>
            <button onClick={() => navigate("/auctions")} className="text-gray-700 hover:text-black">
              Auctions
            </button>
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

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden bg-gray-800 text-white py-4 px-6 space-y-3">
            <button onClick={() => { navigate("/"); setIsOpen(false); }} className="block hover:text-yellow-400">Home</button>
            <button onClick={() => { navigate("/auctions"); setIsOpen(false); }} className="block hover:text-yellow-400">Auctions</button>
            <button onClick={() => { navigate("/about"); setIsOpen(false); }} className="block hover:text-yellow-400">About</button>
            {user ? (
              <>
                <button onClick={() => { navigate(getProfileRoute()); setIsOpen(false); }} className="block hover:text-yellow-400">My Profile</button>
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full text-left hover:text-red-400">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => { navigate("/seller/login"); setIsOpen(false); }} className="block hover:text-yellow-400">Become a Seller</button>
                <button onClick={() => { navigate("/login"); setIsOpen(false); }} className="block hover:text-yellow-400">Sign in</button>
                <button onClick={() => { navigate("/register"); setIsOpen(false); }} className="block bg-blue-500 text-center py-2 rounded-lg">Join</button>
              </>
            )}
          </nav>
        )}
      </Container>
    </header>
  );
};
