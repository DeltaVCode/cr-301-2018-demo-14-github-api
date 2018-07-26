'use strict';

// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.ajax({
  // go get the data
  url: 'https://api.github.com/user/repos',
  method: 'GET',
  headers: {
    Authorization: `token ${myDamnGitHubToken}`
  }
})
.then(
  // render the data
  data => {
    data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
  }
);
