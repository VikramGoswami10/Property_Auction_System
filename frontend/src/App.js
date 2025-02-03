import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, HowToBid, Layout , AuctionPage , ContactUs } from "./Routes/index";
import { ScrollToTop } from "./Routes/index";
import { Login, Register, LoginAsSeller } from "./Routes/index";


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
           {/* How To Contact Us PAGE */}
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
