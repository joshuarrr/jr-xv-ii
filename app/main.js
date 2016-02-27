import React, { Component } from "react";
import { render } from "react-dom";
import createBrowserHistory from "history/lib/createBrowserHistory";
import { Router, Route, IndexRoute } from "react-router";
import { Home } from "./content/home";
import { Code } from "./content/code";
import { Art } from "./content/art";
import { Art2 } from "./content/art2";
import { Design } from "./content/design";
import { Photography } from "./content/photography";
require("./styles/app.css");
require('file?name=favicon.png!./favicon.png');

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.node
  }
  render = () => {
    return (
     <div className="react-wrapper">
      { this.props.children }
     </div>
   );
  }
}

render((
  // createBrowserHistory removes ULR cruft but eliminates persistent state
  // See: http://rackt.org/history/stable/HashHistoryCaveats.html
  <Router history={ createBrowserHistory({ queryKey: false }) }>
    <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="/art" component={ Art } />
    <Route path="/art2" component={ Art2 } />
    <Route path="/design" component={ Design } />
    <Route path="/photography" component={ Photography } />
    <Route path="/code" component={ Code } />
    <Route path="/home" component={ Home } />
    </Route>
  </Router>
),
document.getElementById("root"));
