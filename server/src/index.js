/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import './config/db';

const app = express();
const port = process.env.PORT || 4000;

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//Routes


app.listen(port, () => console.log(`
============================
Server is running on ${port}..
=============================`));


