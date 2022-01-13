import { Model, Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

import { schema } from "./secure/userAuth";

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
    required: [true, "نام و نام خانوادگی الزامی است"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "ایمیل الزامی هست"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "کلمه عبور الزامی هست"],
    minlength: [4, "کلمه عبور نباید کمتر از ۴ کاراکتر باشد"],
    maxlength: [255, "کلمه عبور نباید بیشتر از ۲۵۵ باشد"],
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

/**
 * Mongoose Static - Return 'Boolean'
 */
userSchema.static("userValidation", function (body) {
  return schema.validate(body, { abortEarly: false });
});

/**
 * Hash Password
 */
userSchema.pre("save", function (next) {
  let user = this;

  if (!user.isModified("password")) return next();
  bcryptjs.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

export const User = model<UserSchema, UserModel>("User", userSchema);
