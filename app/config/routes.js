// dependencies
var React = require("react");
var router = require("react-router");

// react component
var Route = router.Route;

// router component 
var Router = router.Router;

// main, search, and saved components
var Main = require("../components/Main");
var Search = require("../components/Search");
var Saved = require("../components/Saved");

// index route
var IndexRoute = router.IndexRoute;

// browser history
var browserHistory = router.browserHistory;

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />
      <IndexRoute component={Search} />
    </Route>
  </Router>
);