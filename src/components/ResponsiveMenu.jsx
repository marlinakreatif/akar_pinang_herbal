import React from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { CLIENT_MENU_ITEMS, ADMIN_MENU_ITEMS } from "../constants/menu";
import NormalScreenMenuContainer from "./NormalScreenMenuContainer";
import SmallScreenMenuContainer from "./SmallScreenMenuContainer";

const renderMenuItems = (menuItems) => {
  return menuItems.map((menuItem, index) => {
    return (
      <Nav.Link href={menuItem.path} key={`menu-item-${index}`}>
        {menuItem.title}
      </Nav.Link>
    );
  });
};

const NormalScreen = ({ menuItems }) => {
  return (
    <NormalScreenMenuContainer>
      {renderMenuItems(menuItems)}
    </NormalScreenMenuContainer>
  );
};

const SmallScreen = ({ menuItems }) => {
  return (
    <SmallScreenMenuContainer>
      {renderMenuItems(menuItems)}
    </SmallScreenMenuContainer>
  );
};

function ResponsiveMenu(props) {
  console.log(props);
  let menuItems = props.type === "admin" ? ADMIN_MENU_ITEMS : CLIENT_MENU_ITEMS;
  if (props.isMobile) {
    return <SmallScreen menuItems={menuItems} />;
  } else {
    return <NormalScreen menuItems={menuItems} />;
  }
}

const mapStateToProps = (state) => {
  return { isMobile: state.isMobile };
};

export default connect(mapStateToProps)(ResponsiveMenu);
