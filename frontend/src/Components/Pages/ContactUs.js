import { useState } from "react";
import { Container, Title, PrimaryButton } from "../Common/Design";
import {
  MdOutlineMail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="py-12">
      <div className="text-center mb-10">
        <Title className="text-3xl font-bold text-primary">Contact Us</Title>
        <p className="text-gray-600 mt-2">
          Have questions? Reach out to us and we’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form & Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary"
            />
            <PrimaryButton type="submit" className="w-full p-3 rounded-md">
              Send Message
            </PrimaryButton>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-6">
          <h2 className="text-xl font-semibold">Get In Touch</h2>
          <div className="flex items-center space-x-4">
            <MdOutlineMail size={24} className="text-primary" />
            <p className="text-gray-700">support@auctionplatform.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <MdOutlinePhone size={24} className="text-primary" />
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div className="flex items-center space-x-4">
            <MdOutlineLocationOn size={24} className="text-primary" />
            <p className="text-gray-700">
              123, Property Auction Street, Pune, India
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="h-48">
            <iframe
              className="w-full h-full rounded-md"
              title="Property Auction Office Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225312925239!2d-122.4194151846812!3d37.77492977975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3dfba7f1%3A0x53b0df09f9f5c!2sGoogle!5e0!3m2!1sen!2sin!4v1632480890909"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
