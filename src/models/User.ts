import { Model, Schema, model } from "mongoose";

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
    minlength: 4,
    maxlength: 255,
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

export const User = model<UserSchema, UserModel>("User", userSchema);
