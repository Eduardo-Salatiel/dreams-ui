import { Fragment } from "react";
import { useRecoilValue } from 'recoil';
import { sidebarToggleActive } from "../../../recoil/styles/atoms";

import Navbar from "./Navbar";
import SidebarMenuIcon from "./SidebarMenuIcon";
import "./style.scss";

const Sidebar = () => {
  const toggleClass = useRecoilValue(sidebarToggleActive)

  return (
    <Fragment>
      <SidebarMenuIcon/>
      <div className={`sidebar ${toggleClass}`}>
        <Navbar />
      </div>
    </Fragment>
  );
};

export default Sidebar;
