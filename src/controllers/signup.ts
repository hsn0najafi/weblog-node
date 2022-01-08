import { Request, Response } from "express";
import FastestValidator from "fastest-validator";

// Validator Schema And Error Messages
const validator = new FastestValidator();
const schema = {
  fullname: {
    type: "string",
    trim: true,
    min: 4,
     max: 255,
    messages: {
      required: "نام و نام خانوادگی الزامی است.",
      stringMin: "نام و نام خانوادگی نباید کمتر از ۴ باشد.",
      stringMax: "نام و نام خانوادگی نباید بیشتر از ۲۵۵ باشد.",
    },
  },
  email: {
    type: "email",
    normalize: true,
    messages: {
      required: "آدرس ایمیل الزامی هست.",
      string: "آدرس ایمیل صحیح نیست.",
    },
  },
  password: {
    type: "string",
    min: 4,
    max: 255,
    messages: {
      required: "رمز عبور الزامی هست.",
      string: "کلمه عبور را درست بنویس.",
      stringMin: "کلمه عبور نباید کمتر از ۴ کاراکتر باشد",
      stringMax: "کلمه عبور نباید بیشتر از ۲۵۵ باشد.",
    },
  },
  repeatPassword: {
    type: "string",
    min: 4,
    max: 255,
    messages: {
      required: "تکرار کلمه عبور الزامی هست.",
      string: "تکرار کلمه عبور را درست بنویس.",
      stringMin: "تکرار کلمه عبور نباید کمتر از ۴ کاراکتر باشد",
      stringMax: "تکرار کلمه عبور نباید بیشتر از ۲۵۵ باشد.",
    },
  },
};

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
};
