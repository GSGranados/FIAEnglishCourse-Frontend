import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/cheveron-outline-right.svg";
import UesLogo from "../../assets/ues-logo.png";
import { SideMenu } from "./sideMenu";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      Menus: [
        { title: "Tuition", src: "faUserTie", link: "/tuitions" },
        { title: "MOOC Courses", src: "faBook", link: "/" },
        { title: "English Courses", src: "faFile", link: "/" },
        { title: "Users", src: "faUser", link: "/users", gap: true },
        { title: "Roles", src: "faCog", link: "/roles" },
        { title: "Permissions", src: "faLock", link: "/permissions" },
        { title: "Tuitions", src: "faCalendar", link: "/tuitions", gap: true },
        { title: "Carrers", src: "faCog", link: "/careers", gap: true },
        {title: "Educational Levels", src: "faCog",link: "/educationallevels",},
        { title: "Topics", src: "faCog", link: "/topics" },
        { title: "ResourceType", src: "faCog", link: "/resourcetypes" },
        {title: "Educational Resource",src: "faCog",link: "/educationalresources",},
        { title: "Abilities", src: "faCog", link: "/abilities" },
        {title: "TutorReviewCriteria",src: "faCog",link: "/tutorreviewcriteria",},
        { title: "Log", src: "faCog", link: "/" },
      ],
    };
    this.toggleChildMenu = this.toggleChildMenu.bind(this);
  }
  toggleChildMenu() {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  render() {
    const { open, Menus } = this.state;
    return (
      <div
        className={`${
          open ? "w-72" : "w-20"
        } p-5 pt-8 duration-300 h-full bg-wine-red-600 relative tablet:hidden`}
      >
        <MenuIcon
          className={`${
            open ? "rotate-0" : "rotate-180"
          } duration-300 absolute cursor-pointer rounded-full -right-5 top-4 w-9 h-9 bg-white-text-100`}
          onClick={this.toggleChildMenu}
        />
        <Link to={"/"}>
          <div className="flex flex-col gap-x-4 items-center cursor-pointer">
            <img src={UesLogo} alt="UES Logo" className={`w-14 `} />
            <h1
              className={`text-white-text-100 origin-center font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              FIA EC/MOOC
            </h1>
          </div>
        </Link>
        <SideMenu menuOptions={Menus} open={this.state.open} />
      </div>
    );
  }
}
