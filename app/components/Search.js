// dependencies
var React = require("react");
var Query = require("./searchchildren/Query");
var Results = require("./searchchildren/Results");
var helpers = require("../utils/helpers");

// setting up search component
var Search = React.createClass({

  getInitialState: function() {
    return {
      results: {}
    };
  },

  setQuery: function(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: { docs: data.docs } });
    }.bind(this));
  },

  // rendering the search component
  render: function() {
    console.log(this.state.results);

    return (
      <div className="main-container">
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
});

module.exports = Search;