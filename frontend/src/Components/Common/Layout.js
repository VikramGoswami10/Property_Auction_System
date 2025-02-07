import React from "react";
import {Header , Footer} from "../../Routes";

export const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
