import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {

    const { email } = req.body;

    // normally validate user from DB
    const user = {
        id: 1,
        email,
    };

    const token = jwt.sign(user, process.env.JWT_SECRET || "secret", {
        expiresIn: "1h",
    });

    res.json({
        token,
    });

});

export default router;