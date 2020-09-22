import React from "react";
import { connect } from "react-redux";
import { CLIENT_MENU_ITEMS, ADMIN_MENU_ITEMS } from "../constants/menu";
import { NavLink } from "react-router-dom";
import NormalScreenMenuContainer from "./NormalScreenMenuContainer";
import SmallScreenMenuContainer from "./SmallScreenMenuContainer";

const renderMenuItems = (menuItems) => {
  return menuItems.map((menuItem, index) => {
    return (
      <NavLink
        className="nav-link"
        activeClassName="active"
        to={menuItem.path}
        key={`menu-item-${index}`}
      >
        {menuItem.title}
      </NavLink>
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
