import express from "express";
import compression from "compression";
import morgan from "morgan";
import passport from "passport";
import "./config/passport";

import { authenticateJWT } from "./middleware/auth.middleware";

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
app.use("/auth", authRoute);
app.use("/health", authenticateJWT, healthRoute);

//    Error Handler
app.use(errorHandler);

export default app;