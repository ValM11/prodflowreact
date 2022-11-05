const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const dbaccess = require("./connectdb.js");

app.use(cors());
// app.use(express.static("../public"));
app.use(express.json());
app.use(express.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/site-names", (req, res) => {
  dbaccess.getSitesName((result) => {
    res.send(result);
  });
});

app.get("/site-info/:site", (req, res) => {
  let chosenSite = req.params["site"];
  console.log(chosenSite);
  dbaccess.getSiteInfo(chosenSite, (result) => {
    res.json(result[0]);
  });
});

app.post("/new-site", (req, res) => {
  res.send("data received");
  let name = req.body.sitename;
  if (!(name === "")) {
    let street = req.body.sitestreet;
    let city = req.body.sitecity;
    if (street === "") {
      street = "Not available";
    }
    if (city === "") {
      city = "Not available";
    }
    let site = { name: name, address: { street: street, city: city } };
    dbaccess.createNewSite(site, (res) => {
      console.log(res);
    });
  }
});

app.post("/new-production-line/:site", (req, res) => {
  res.send("data received");
  let site = req.params["site"];
  let newline = Number(req.body["new-line"]);
  dbaccess.createNewLine(site, newline, (res) => {
    console.log(res);
  });
});

app.post("/production-line/:site/:id/update", (req, res) => {
  res.send("data received");
  let site = req.params["site"];
  let line = Number(req.params["id"]);
  let nbUnit = Number(req.body["line-update"]);
  dbaccess.updateLine(site, line, nbUnit, (res) => {
    console.log(res);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
