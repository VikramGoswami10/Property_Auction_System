import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  HowToBid,
  Layout,
  AuctionPage,
  ContactUs,
  FAQ,
  UpcomingAuctionPage,
  PastAuctionPage,
  PropertyDetails,
} from "./Routes/index";
import { ScrollToTop } from "./Routes/index";
import { Login, Register, LoginAsSeller } from "./Routes/index";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import BuyerDashboard from "./Components/Dashboard/BuyerDashboard";
import SellerDashboard from "./Components/Dashboard/SellersDashboard";
import CreateAuction from "./Components/Dashboard/CreateAuction";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* HOME PAGE  */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
    

          {/* AUCTION PAGE */}
          <Route
            path="/auction"
            element={
              <Layout>
                <div className="mt-24">
                  <AuctionPage />
                </div>
              </Layout>
            }
          />
          {/* UpComing AUCTION PAGE */}
          <Route
            path="/auction/upcoming"
            element={
              <Layout>
                <div className="mt-24">
                  <UpcomingAuctionPage />
                </div>
              </Layout>
            }
          />{" "}
          {/* Past AUCTION PAGE */}
          <Route
            path="/auction/past"
            element={
              <Layout>
                <div className="mt-24">
                  <PastAuctionPage />
                </div>
              </Layout>
            }
          />
          <Route
            path="/property/:id"
            element={
              <Layout>
                <div className="mt-24">
                  <PropertyDetails />
                </div>
              </Layout>
            }
          />
          {/* How To Bid PAGE */}
          <Route
            path="/how-to-bid"
            element={
              <Layout>
                <div className="mt-24">
                  <HowToBid />
                </div>
              </Layout>
            }
          />
          {/* Contact Us PAGE */}
          <Route
            path="/contact"
            element={
              <Layout>
                <div className="mt-24">
                  <ContactUs />
                </div>
              </Layout>
            }
          />
          {/* FAQ */}
          <Route
            path="/faq"
            element={
              <Layout>
                <FAQ />
              </Layout>
            }
          />
          {/* LOGIN IN PAGE */}
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          {/* REGISTER PAGE */}
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          {/* Seller Login Page */}
          <Route
            path="/seller/login"
            element={
              <Layout>
                <LoginAsSeller />
              </Layout>
            }
          />
          {/* ADMIN DASHBOARD */}
          <Route
            path="/admin"
            element={
              <Layout>
                <div className="mt-24">
                  <AdminDashboard />
                </div>
              </Layout>
            }
          />
          {/* Buyer DASHBOARD */}
          <Route
            path="/buyer"
            element={
              <Layout>
                <div className="mt-24">
                  <BuyerDashboard />
                </div>
              </Layout>
            }
          />
          {/* Seller DASHBOARD */}
          <Route
            path="/seller"
            element={
              <Layout>
                <div className="mt-24">
                  <SellerDashboard />
                </div>
              </Layout>
            }
          />
          {/* Seller Create Auction */}
          <Route
            path="/seller/create-auction"
            element={
              <Layout>
                <div className="mt-24">
                  <CreateAuction />
                </div>
              </Layout>
          }
          />
	        {/* ✅ Won Auction Details Page */}
          <Route
            path="/auction/won/:auctionId"
            element={
              <Layout>
                <div className="mt-24">
                  <WonAuctionDetails />
                </div>
              </Layout>
            }
          />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
