import React, { Component } from "react";
import { Link } from "react-router";
require("../../styles/components/nav.css");

export class Nav extends Component {
  render() {
    return (
     <nav>
       <ul className="nav-links">

         <li className="nav-item">
           <Link
           to="/design"
           className="nav-link"
           activeClassName="active"
           >
            design
           </Link>
         </li>

         <li className="nav-item">
          <Link
            to="/photography"
            className="nav-link"
            activeClassName="active"
          >
            photography
          </Link>
         </li>

         <li className="nav-item">
           <Link
           to="/code"
           className="nav-link"
           activeClassName="active"
           >
            code
           </Link>
         </li>

         <li className="nav-item">
          <Link
            to="/art"
            className="nav-link"
            activeClassName="active"
          >
            art
          </Link>
         </li>
       </ul>
     </nav>
    );
  }
}
