import { Navbar, Button, Alignment } from "@blueprintjs/core";

export default function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>TODO</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
        </Navbar.Group>
      </Navbar>
    </>
  );
}