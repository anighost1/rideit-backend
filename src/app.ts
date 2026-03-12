import express from "express";
import compression from "compression";
import morgan from "morgan";

import healthRoute from "./routes/health.route";
import errorHandler from "./middleware/error.middleware";

const app = express();
app.use(compression());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

// Routes
app.use("/health", healthRoute);

//    Error Handler
app.use(errorHandler);

export default app;