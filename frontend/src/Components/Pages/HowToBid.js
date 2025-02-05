import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Title, PrimaryButton } from "../Common/Design";

export const HowToBid = () => {
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container>
        {/* HEADER SECTION */}
        <div className="text-center mb-10">
          <Title className="text-3xl font-semibold text-primary">How to Bid in Our Property Auctions</Title>
          <p className="text-gray-600 mt-3">A simple step-by-step guide to participating in our online property auctions.</p>
        </div>

        {/* SECTION: BUYING PROCESS */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">Buying a Property in Our Auction</h2>
          <p className="text-gray-700">
            Purchasing a property with us is simple and fully online. The process ensures transparency and ease of use.
            Below are the key steps to successfully bidding on a property.
          </p>
        </div>

        {/* SECTION: PROPERTY LISTINGS */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">Properties Listed on Our Platform</h2>
          <p className="text-gray-700">
            Our auction listings contain detailed property information, including images, descriptions, floor plans, and legal documents.
          </p>
          <p className="text-gray-700 mt-2">
            Each property has a **Guide Price**, giving you an estimate of its value. However, the **final sale price depends on bidding activity**.
          </p>
        </div>

        {/* SECTION: DUE DILIGENCE */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">Due Diligence Before Bidding</h2>
          <p className="text-gray-700">
            Before bidding, carefully examine all legal documentation and consider hiring a surveyor. Ensure your **finances or mortgage are in place** before bidding, as all auction sales are final.
          </p>
        </div>

        {/* SECTION: REGISTRATION PROCESS */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">How to Register for an Auction</h2>
          <p className="text-gray-700">
            To bid in an auction, you must first **create an account** and verify your identity.  
            <strong> Steps to Register: </strong>
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Sign up for an account on our platform.</li>
            <li>Complete identity verification.</li>
            <li>Register for the specific auction you wish to participate in.</li>
            <li>Read & accept the auction terms and conditions.</li>
          </ul>
        </div>

        {/* SECTION: BIDDING PROCESS */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">Auction Day: How to Place Bids</h2>
          <p className="text-gray-700">
            Our auctions **start at 9 AM** and can be accessed via desktop, tablet, or mobile. Bidding opens at the same time for all properties, but each lot has its **own closing time**.
          </p>
          <p className="text-gray-700 mt-3">
            Bidding starts with a **minimum increment of ₹1,000**. You can either bid manually or set a **Maximum Bid** so that the system bids for you up to your set limit.
          </p>
        </div>

        {/* SECTION: WINNING A BID & PAYMENT */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">Winning & Completing the Purchase</h2>
          <p className="text-gray-700">
            If you win, **contracts are exchanged immediately**. You must pay **10% of the sale price** as a deposit within **2 working days**.
          </p>
          <p className="text-gray-700 mt-2">
            Our team will guide you through the final payment process and legal formalities.
          </p>
        </div>

        {/* SECTION: FINAL NOTES */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">Final Notes</h2>
          <p className="text-gray-700">
            Our online property auctions offer a **secure and efficient way** to buy properties.  
            If you have any further questions, feel free to <strong>contact our support team</strong>.
          </p>
        </div>

        {/* CONTACT BUTTON */}
        <div className="text-center mt-10">
          <PrimaryButton className="px-6 py-3 text-lg" onClick={() => navigate("/contact")}>
          <a href="/contact">Contact Support</a>
          </PrimaryButton>
        </div>
      </Container>
    </div>
  );
};

// export default HowToBid;
