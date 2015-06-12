import React from "react/addons";
import Router from "react-router";
import routes from "./routes.jsx";

var {HistoryLocation, HashLocation} = Router;

Router.run(routes, HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});