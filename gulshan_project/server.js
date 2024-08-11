import express, { json, urlencoded } from 'express';
const app = express();
const PORT = process.env.PORT || 7000;
import dotenv from 'dotenv';
dotenv.config();

import user from './router/userRoute.js';
import product from './router/productRouter.js';
import task from './router/taskRouter.js'

app.use(json());
app.use(urlencoded({ extended: true }));
 
app.use("/user",user);
app.use("/product",product);
app.use("/task",task);

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
});