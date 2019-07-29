import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Storino</Navbar.Brand>
          <Nav className="mr-auto">
            <Link href="/shop">
              <a className="nav-link">Shop</a>
            </Link>
            <Link href="/sell">
              <a className="nav-link">Sell</a>
            </Link>
            <Link href="/sell">
              <a className="nav-link">SignUp</a>
            </Link>
            <Link href="/sell">
              <a className="nav-link">Orders</a>
            </Link>
            <Link href="/sell">
              <a className="nav-link">Account</a>
            </Link>
          </Nav>
        </Navbar>
      </>
    </div>
  );
};

export default Navigation;
