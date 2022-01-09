import { Model, Schema, model } from "mongoose";
import { object, ref, string } from "yup";

interface UserSchema {
  fullName: string;
  email: string;
  password: string;
  createDate: DateConstructor | number;
}

interface UserModel extends Model<UserSchema> {
  userValidation(body: any): Boolean;
}

/**
 * DB Schema
 */
const userSchema = new Schema<UserSchema, UserModel>({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

/**
 * Yup Schema
 */
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

userSchema.static("userValidation", function (body) {
  return schema.validate(body, { abortEarly: false });
});

export const User = model<UserSchema, UserModel>("User", userSchema);
