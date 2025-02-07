import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../Routes";
import { commonClassNameOfInput } from "../../Components/Common/Design";

export const LoginAsSeller = () => {
  return (
    <section className="register pt-16 relative">
      <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
      
      {/* Header Section */}
      <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
        <Container>
          <div>
            <Title level={3} className="text-white">Login Seller</Title>
            <div className="flex items-center gap-3">
              <Title level={5} className="text-green font-normal text-xl">Home</Title>
              <span className="text-white font-normal text-xl">/</span>
              <Title level={5} className="text-white font-normal text-xl">Seller</Title>
            </div>
          </div>
        </Container>
      </div>

      {/* Form Section */}
      <form className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
        <div className="text-center">
          <Title level={5}>New Seller Member</Title>
          <p className="mt-2 text-lg">
            Do you already have an account? <CustomNavLink href="/create-account">Signup Here</CustomNavLink>
          </p>
        </div>

        <div className="py-5 mt-8">
          <Caption className="mb-2">Enter Your Email *</Caption>
          <input type="email" name="email" className={commonClassNameOfInput} placeholder="Enter Your Email" required />
        </div>

        <div>
          <Caption className="mb-2">Password *</Caption>
          <input type="password" name="password" className={commonClassNameOfInput} placeholder="Enter Your Password" required />
        </div>

        <div className="flex items-center gap-2 py-4">
          <input type="checkbox" required />
          <Caption>I agree to the Terms & Policy</Caption>
        </div>

        <PrimaryButton type="submit" className="w-full rounded-none my-5 uppercase">
          Become Seller
        </PrimaryButton>

        <p className="text-center mt-5">
          By clicking the signup button, you create an account, and you agree to Property Auction 
          <span className="text-green underline"> Terms & Conditions </span> & 
          <span className="text-green underline"> Privacy Policy</span>.
        </p>
      </form>

      <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
    </section>
  );
};
