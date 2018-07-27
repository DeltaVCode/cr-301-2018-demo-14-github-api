const express = require('express');
const requestProxy = require('express-request-proxy');

function proxyGitHub(request, response) {
  let path = request.params[0];
  console.log(`Routing GitHub request for ${path}`);

  let proxy = requestProxy({
    url: `https://api.github.com/${path}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  });

  proxy(request, response);
}

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.get('/github/*', proxyGitHub);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
