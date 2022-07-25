import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutPropr {
  children: any;
}

const Layout: React.FunctionComponent<ILayoutPropr> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
