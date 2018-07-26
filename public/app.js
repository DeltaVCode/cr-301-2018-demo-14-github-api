'use strict';

// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.get('/github/user/repos')
.then(
  // render the data
  data => {
    data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
  }
);
