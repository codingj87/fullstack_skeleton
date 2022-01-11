import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import NavItem from "@material-tailwind/react/NavItem";
import PinterestIcon from "@material-ui/icons/Pinterest";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="lightBlue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a
            href="https://material-tailwind.com?ref=mtk"
            target="_blank"
            rel="noreferrer"
          >
            {/* <NavbarBrand>Hello</NavbarBrand> */}
            <NavbarBrand>
              <PinterestIcon />
            </NavbarBrand>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>
        <NavbarInput type="text" placeholder="Search here" />
        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavItem active="light" ripple="light">
              <Icon name="language" size="xl" />
            </NavItem>
            <NavLink href="#navbar" ripple="light">
              <Icon name="account_circle" size="xl" />
            </NavLink>
            <NavItem ripple="light">
              <Icon name="settings" size="xl" />
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
