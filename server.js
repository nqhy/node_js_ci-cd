const App = require("./app");
const express = require("express");

const PORT = 3000;

const server = App.getInstance().server;

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT} `);
});

module.exports = server;
