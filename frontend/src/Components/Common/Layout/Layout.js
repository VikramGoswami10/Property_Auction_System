import React from "react";
import {Header} from "../../../Routes/index";
import {Footer} from "../../../Routes/index";



export const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
