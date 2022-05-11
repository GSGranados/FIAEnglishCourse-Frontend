import React, { Component} from "react";
import { ReactComponent as MenuIcon } from "../../assets/cheveron-outline-right.svg";
import UesLogo from "../../assets/ues-logo.png";
import { SideMenu } from "./sideMenu";

export class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state={
            open:true,
            Menus : [
             { title: "Tuition", src: "faUserTie", link:"/" },
             { title: "MOOC Courses", src: "faBook", link:"/" },
             { title: "English Courses", src: "faFile", link :"/" },
             { title: "User Settings", src: "faUser",link: "/permissions", gap: true },
             { title: "Log", src: "faCog", link: "/" },
           ]
        }
        this.toggleChildMenu = this.toggleChildMenu.bind(this);
    }
    toggleChildMenu() {
        this.setState(state => ({
          open: !state.open
        }));
     }

  render(){
      const {open,Menus} = this.state
  return ( 
      <div
        className={`${
          open ? "w-72" : "w-20"
        } p-5 pt-8 duration-300 h-screen bg-wine-red-600 relative tablet:hidden`}
      >
        <MenuIcon
          className={`${
            open ? "rotate-0" : "rotate-180"
          } duration-300 absolute cursor-pointer rounded-full -right-5 top-4 w-9 h-9 bg-white-text-100`}
          onClick={this.toggleChildMenu}
        />
        <div className="flex flex-col gap-x-4 items-center">
          <img
            src={UesLogo}
            alt="UES Logo"
            className={`cursor-pointer duration-500 w-14 `}
          />
          <h1
            className={`text-white-text-100 origin-center font-medium text-xl duration-300 ${!open && 'scale-0'}`}
          >
            FIA EC/MOOC
          </h1>
        </div>
        <SideMenu menuOptions={Menus} open={this.state.open}/>
      </div>
  );
    }
};
