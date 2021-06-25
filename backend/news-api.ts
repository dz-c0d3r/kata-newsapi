const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("backend/db.json");
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
const apiKey = "2e53196b09ad42989a10a3771728b116";
const defaultCountry = "fr";
const defaultUrl = "https://newsapi.org/v2/top-headlines";
//popularity

server.get("/news", (req, res) => {
  // Get params country
  const country = req.query.country || defaultCountry;
  const query = req.query.q || "";
  const from = req.query.from || "";
  const sortBy = req.query.sortBy || "";
  let params = "";
  params += country ? `country=${country}&` : ``;
  params += query ? `q=${query}&` : ``;
  params += from ? `from=${from}&` : ``;
  params += sortBy ? `sortBy=${sortBy}&` : ``;
  params += apiKey ? `apiKey=${apiKey}&` : ``;
  params =
    params !== ""
      ? `?${
          params.substr(params.length - 1) === "&"
            ? params.slice(0, -1)
            : params
        }`
      : "";
  const url = `${defaultUrl}${params}`;
  const request = require("request");
  request(url, function (error, response, body) {
    res.jsonp(JSON.parse(body));
  });
});

// Use default router
server.use(router);
server.listen(port, () => {
  console.log("NewsAPI Server is running");
});
