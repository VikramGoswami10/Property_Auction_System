// Importing necessary libraries and components
import PropTypes from "prop-types";  // For PropTypes validation
import { NavLink } from "react-router-dom";  // For handling routing

// Title Component - Renders headings of different levels (h1 to h6) with dynamic styles
const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;  // Dynamically choose the heading tag based on 'level'
  const classes = `${
    level === 1
      ? "text-[45px] font-[700]"  // Heading 1 style
      : level === 2
      ? "text-[40px] font-[700]"  // Heading 2 style
      : level === 3
      ? "text-[35px] font-[700]"  // Heading 3 style
      : level === 4
      ? "text-[30px] font-[600]"  // Heading 4 style
      : level === 5
      ? "text-[25px] font-[600]"  // Heading 5 style
      : "text-[18px] font-[500]"  // Heading 6 style
  }`;

  // Render the heading tag dynamically with custom classes
  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

// Body Component - Renders paragraph text with base styles
const Body = ({ children, className }) => {
  return <p className={`${className} text-base font-normal text-[rgb(107, 113, 119)]`}>{children}</p>;
};

// Caption Component - Renders a small caption text with custom styles
const Caption = ({ children, className }) => {
  return <p className={`${className} text-[15px] font-[500] text-gray_100`}>{children}</p>;
};

// CustomNavLinkList Component - Renders a navigation link that applies an "active" class when the link is active
const CustomNavLinkList = ({ href, className, isActive, children }) => {
  const linkStyles = "text-[17px] font-medium cursor-pointer list-none hover:text-green transition-all ease-in-out";
  const activeClass = isActive ? "text-green" : "";  // Adds 'text-green' class if the link is active

  // Render NavLink with dynamic active class
  return (
    <NavLink to={href} className={`${className} ${linkStyles} ${activeClass}`}>
      {children}
    </NavLink>
  );
};

// CustomNavLink Component - Similar to CustomNavLinkList, but also applies a background color for active links
const CustomNavLink = ({ href, className, isActive, children }) => {
  const linkStyles = "text-[17px] font-medium cursor-pointer list-none hover:text-green transition-all ease-in-out";
  const activeClass = isActive ? "bg-green_100 text-green" : "";  // Adds background and text color if active

  // Render NavLink with active background class
  return (
    <NavLink to={href} className={`${className} ${linkStyles} ${activeClass}`}>
      {children}
    </NavLink>
  );
};

// CustomLink Component - Simple link without additional active class, used for regular links
const CustomLink = ({ className, children }) => {
  const linkStyles = "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";  // Regular link styles

  // Render a standard link with custom styles
  return <NavLink className={`${className} ${linkStyles}`}>{children}</NavLink>;
};

// Container Component - Provides a wrapper with a set width and centered content
const Container = ({ children, className }) => {
  return <div className={`${className} w-[85%] m-auto`}>{children}</div>;
};

// PrimaryButton Component - Renders a button with a primary green background and hover effects
const PrimaryButton = ({ children, className }) => {
  return (
    <button type="submit" className={`${className} text-white bg-green font-medium rounded-full text-lg px-16 py-3 hover:bg-primary transition ease-in-out`}>
      {children}
    </button>
  );
};

// ProfileCard Component - Renders a circular profile card (often used for user avatars)
const ProfileCard = ({ children, className }) => {
  return <div className={`${className} w-12 h-12 bg-green_100 flex items-center justify-center rounded-full`}>{children}</div>;
};

// Heading Component - A compound component that combines Title and Caption for page headings
const Heading = ({ title, subtitle }) => {
  return (
    <>
      <Title level={4}>{title}</Title>  {/* Title component to render the title */}
      <div className="w-1/2">
        <Caption>{subtitle}</Caption>  {/* Caption component to render the subtitle */}
      </div>
    </>
  );
};

// Exporting all components to be used in other parts of the application
export { Title, Body, Caption, CustomLink, CustomNavLink, Container, PrimaryButton, ProfileCard, Heading, CustomNavLinkList };

// Common input class for form fields
export const commonClassNameOfInput = "w-full p-4 text-sm text-gray-900 border border-gray-200 focus:ring-green focus:border-green outline-none";

// PropTypes validation for each component to ensure correct usage
Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),  // level must be a number from 1 to 6
  children: PropTypes.any,  // children can be anything
  className: PropTypes.any,  // className can be anything
};

CustomNavLink.propTypes = {
  href: PropTypes.any,  // href can be any value (usually a string URL)
  className: PropTypes.any,  // className can be anything
  children: PropTypes.any,  // children can be anything
  isActive: PropTypes.any,  // isActive can be any value (boolean or otherwise)
};

CustomNavLinkList.propTypes = {
  href: PropTypes.any,  // href can be any value (usually a string URL)
  className: PropTypes.any,  // className can be anything
  children: PropTypes.any,  // children can be anything
  isActive: PropTypes.any,  // isActive can be any value (boolean or otherwise)
};

CustomLink.propTypes = {
  href: PropTypes.any,  // href can be any value (usually a string URL)
  className: PropTypes.any,  // className can be anything
  children: PropTypes.any,  // children can be anything
};

Body.propTypes = {
  children: PropTypes.any,  // children can be anything
  className: PropTypes.any,  // className can be anything
};

Caption.propTypes = {
  children: PropTypes.any,  // children can be anything
  className: PropTypes.any,  // className can be anything
};

Container.propTypes = {
  children: PropTypes.any,  // children can be anything
  className: PropTypes.any,  // className can be anything
};

PrimaryButton.propTypes = {
  children: PropTypes.any,  // children can be anything
  className: PropTypes.any,  // className can be anything
};

ProfileCard.propTypes = {
  children: PropTypes.any,  // children can be anything
  className: PropTypes.any,  // className can be anything
};

Heading.propTypes = {
  title: PropTypes.any,  // title can be anything
  subtitle: PropTypes.any,  // subtitle can be anything
};
