import { object, ref, string } from "yup";

/**
 * Yup Schema - Error Messages
 */
export const schema = object().shape({
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
