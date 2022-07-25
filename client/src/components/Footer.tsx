import React from "react";

export interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => (
  <footer className="footer font-small blue pt-4">
    <div className="footer-copyright text-center py-4">
      © 2020 Copyright{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="http://localhost:3000/"
        style={{ textDecoration: "none" }}
      >
        Book Catalog
      </a>
    </div>
  </footer>
);

export default Footer;
