const express = require("express");
const { Server } = require("http");
const path = require("path");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
