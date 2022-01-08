import { Request, Response } from "express";
import { object, ref, string } from "yup";

// Validator Schema And Error Messages
const schema = object().shape({
  fullName: string()
    //
    .min(4, "نام و نام خانوادگی نباید کمتر از ۴ کاراکتر باشد.")
    .max(255, ".نام و نام خانوادگی نباید بیشتر از ۲۵۵ کاراکتر باشد")
    .required("نام و نام خانوادگی الزامی هست."),
  //
  email: string()
    //
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی هست."),
  //
  password: string()
    //
    .min(4, "رمز عبور باید بیشتر از ۴ کاراکتر باشد.")
    .max(255, "کلمه عبور نباید بیشتر از ۲۵۵ تا باشه.")
    .required("کلمه عبور باید وارد شود"),
  //
  repeatPassword: string()
    //
    .required("تکرار کلمه عبور باید وارد شود")
    .oneOf([ref("password"), null], "تکرار کلمه عبور صحیح نیست"),
  //
});

/**
 * Page: 'pages/signup'
 * Layout: 'loginSignup'
 * Params: ['pageTitle', 'message']
 */
export const signupController = (_: Request, res: Response) => {
  res.render("pages/signup", {
    pageTitle: "Signup",
    message: "Register",
    layout: "loginSignup",
    errors: ["hghsggfyewgayw"],
  });
};

/**
 * Register New User
 */
export const handleSignup = (_: Request, res: Response) => {
  console.log(_.body);

  // Validate Data
  schema
    .validate(_.body)
    .then((result) => {
      console.log(result);
      res.redirect("/users/login");
    })
    .catch((err) => {
      console.log(err.errors);
      res.render("pages/signup", {
        pageTitle: "Signup",
        layout: "loginSignup",
        errors: err.errors,
      });
    });
};
