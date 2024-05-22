import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Model } from 'objection';
import knex from 'knex';
import knexConfig from './config/databases';
import { apiRouter } from './routers';
dotenv.config();
Model.knex(knex(knexConfig));
const port = process.env.PORT || 9999;
const app = express();
app.locals.baseURL = `${process.env.BASE_URL}:${port}`;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', apiRouter);
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
