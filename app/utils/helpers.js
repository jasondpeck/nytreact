// dependencies
var axios = require("axios");

// api key for ny times
var APIKey = "49c28a1fb2c348979e2d415a6cc9c468";

var helpers = {

  // axios query and date format
  runQuery: function(term, start, end) {

    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": term,
        "begin_date": start,
        "end_date": end
      }
    })
    .then(function(results) {
      console.log(results.data.response);
      return results.data.response;
    });
  },

  // get function
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // save function
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // delete function
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};

module.exports = helpers;