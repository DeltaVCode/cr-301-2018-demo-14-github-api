const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const requestProxy = require('express-request-proxy');

function proxyGitHub(request, response){
  console.log(`Routing GitHub request for ${request.params[0]}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
