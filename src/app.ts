import express from "express";
import compression from "compression";
import morgan from "morgan";
import passport from "passport";
import "./config/passport";

import healthRoute from "./routes/health.route";
import errorHandler from "./middleware/error.middleware";
import authRoute from "./routes/auth.route";

const app = express();
app.use(compression());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(passport.initialize());

// Routes
app.use("/health", healthRoute);
app.use("/auth", authRoute);

//    Error Handler
app.use(errorHandler);

export default app;