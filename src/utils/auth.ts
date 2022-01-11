import passport from "passport";
import { Strategy } from "passport-local";
import bcryptjs from "bcryptjs";

import { User } from "../models/User";

passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        /**
         * Can't File Username
         */
        if (!user) {
          return done(null, false, {
            message: "کاربری با این ایمیل تاکنون ثبت نام نکرده",
          });
        }
        /**
         * Compare Hashed Password bye new Password
         */
        const isMatch = await bcryptjs.compare(password, user.password);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: "یه جای کار میلنگه",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err: any, user: any) => {
    done(err, user);
  });
});
