import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";
function Footer(props) {
  return (
    <>
      <Navbar className="footer">
        <Navbar.Group align={Alignment.CENTER}>
          <Navbar.Heading>&copy; ToDo By Munther</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    </>
  );
}

export default Footer;
