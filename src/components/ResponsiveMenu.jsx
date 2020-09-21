import React from "react";
import { connect } from "react-redux";
import { CLIENT_MENU_ITEMS, ADMIN_MENU_ITEMS } from "../constants/menu";

const renderMenuItems = (menuItems) => {
  return menuItems.map((menuItem, index) => {
    return (
      <li key={`menu-item-${index}`}>
        <span>{menuItem.title}</span>
      </li>
    );
  });
};

const NormalScreen = ({ menuItems }) => {
  return (
    <div>
      <span>Normal Screen</span>
      {renderMenuItems(menuItems)}
    </div>
  );
};

const SmallScreen = ({ menuItems }) => {
  return (
    <div>
      <span>Small Screen</span>
      {renderMenuItems(menuItems)}
    </div>
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
