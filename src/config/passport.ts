import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "secret",
};

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {

            // normally you fetch user from DB
            const user = {
                id: jwt_payload.id,
                email: jwt_payload.email,
            };

            if (user) {
                return done(null, user);
            }

            return done(null, false);

        } catch (err) {
            return done(err, false);
        }
    })
);

export default passport;